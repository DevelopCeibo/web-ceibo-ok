import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
import multer from "multer";
import path from "path";
import { Readable } from "stream";
import html from "../../utils/templateFormMail";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import { htmlEventTemplate } from "../../utils/email.utils";

export const config = {
	api: {
		bodyParser: false,
		// en true, el req.body me llega,
		// en false puedo procesar el file
	},
};
const transporter = {
	auth: {
		api_key: process.env.SENDGRID_API_KEY,
	},
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 10000000000,
	},
	fileFilter: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		if (ext !== ".pdf") {
			return cb(new Error("Only PDFs are allowed"));
		}
		cb(null, true);
	},
}).single("cv");

const uploadFile = (req) => {
	return new Promise((resolve, reject) => {
		upload(req, null, (err) => {
			if (err) {
				console.log("Multer error:", err);
				reject(new Error("An error occurred while uploading."));
			} else {
				resolve();
			}
		});
	});
};

const sendMail = (data) => {
	return new Promise((resolve, reject) => {
		mailer.sendMail(data, (error, info) => {
			if (error) {
				reject(error);
			} else {
				resolve(info);
			}
		});
	});
};
const notificationUser = async (oc, ocMail, data) => {
	try {
		let name = `${data.name} ${data.lastname}`;
		const msg = {
			from: ocMail,
			to: data.email,
			subject: data.subject,
			html: html(data.mail, name, oc, ocMail),
		};
		const res = await sendMail(msg);
		if (res.message == "success") {
			console.log("Email send successfully to subscriber");
			const url = `${baseUrl}/api/db`;
			const user = {
				firstName: data.name,
				lastName: data.lastname,
				mail: data.email,
				company: data.empresa,
				position: data.cargo,
				checked: data.checked,
				subject: data.subject,
			};
			const response = await axios.post(url, user, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	} catch (err) {
		console.log("Error->", err);
	}
};

export default async (req, res) => {
	try {
		await uploadFile(req);
		console.log("FILE ->", req.file);
		const { type, ...rest } = req.body;
		let receiver;
		let oc;
		let name,
			lastname,
			email,
			number,
			phone,
			subject,
			text,
			lkdurl,
			checked,
			cv,
			empresa,
			cargo,
			vacante,
			utm_source,
			utm_medium,
			utm_campaign,
			utm_content,
			utm_term,
			roleType,
			eventName,
			eventTime,
			eventLocation,
			addToCalendarLink
		let data;

		switch (type) {
			case "evento":
				({ name, lastname, email, empresa, cargo, subject, checked, phone, eventName, eventTime, eventLocation, addToCalendarLink } =
					rest);
				// receiver = "prensa@ceibo.digital";
				oc = "Prensa & Eventos";
				receiver = "tomas.apochian@ceibo.digital";
				data = {
					to: receiver,
					from: email,
					subject: subject,
					text: text,
					html: `
                <b>Nueva suscripción al próximo evento ${eventName}</b> en <b>${eventLocation}</b> <br />
                <b>Nombre:</b> ${name}, <b>Apellido:</b> ${lastname} <br />
                <b>Email:</b> ${email} <br />
                <b>Empresa:</b> ${empresa} <br />
                <b>Teléfono:</b> ${phone} <br />`,
				};

				const confirmationEmailData = {
					to: email,
					from: receiver,
					fromname: "Ceibo Digital - Prensa y Eventos",
					subject: 'Confirmación de registro - Ceibo Digital',
					html: htmlEventTemplate({
						eventName,
						eventTime,
						eventLocation ,
						name,
						addToCalendarLink
					})
				}

				const confirmationEmailResponse = await sendMail(confirmationEmailData)

				break;
			case "contacto":
				({ name, email, number, subject, text } = rest);
				receiver = "info@ceibo.digital";
				//receiver = "tomas.apochian@ceibo.digital"
				data = {
					to: receiver,
					from: email,
					subject: subject,
					text: text,
					html: `
                <b>From:</b> ${name} <br />
                <b>Number:</b> ${number} <br />
                <b>Message:</b> ${text}
            `,
				};
				break;
			case "newsletter":
				({ email, subject } = rest);
				receiver = "marketing@ceibo.digital";
				// receiver = "tomas.apochian@ceibo.digital";
				data = {
					to: receiver,
					from: email,
					subject: subject,
					html: `
                <b>Email:</b> ${email} <br />
            `,
				};
				break;

			case "recruiting":
				({
					name,
					email,
					number,
					lkdurl,
					subject,
					checked,
					vacante,
					utm_source,
					utm_campaign,
					utm_medium,
					utm_content,
					utm_term,
					roleType
				} = rest);

				checked = checked.split(",");
				const fileStream = new Readable();
				fileStream.push(req.file?.buffer);
				fileStream.push(null);

				receiver = []

				if (roleType === 'specialist') receiver.push('recruiting@ceibo.digital')
				else if (roleType === 'consultant') { receiver.push('recruiting.consultingteam@ceibo.digital') }

				if (utm_medium == 'landing-talento-global') receiver.push("marketing@ceibo.digital")

				cv = req.file;
				data = {
					to: receiver,
					from: email,
					subject: subject,
					html: `
                <b>${name} se postulo a la vacante de </b>${vacante} <br />
                <b>Email:</b> ${email} <br />
                <b>Numero:</b> ${number} <br />
                <b>Linkedin URL:</b> ${lkdurl} <br />
                <b>Se entero de la vacante por:</b> ${checked?.join(", ") ?? ""
						} <br />
				<b>utm_source:</b> ${utm_source} <br />
				<b>utm_medium:</b> ${utm_medium} <br />
				<b>utm_campaign:</b> ${utm_campaign} <br />
				<b>utm_content:</b> ${utm_content} <br />
				<b>utm_term:</b> ${utm_term} <br />
            `,
					attachments: cv
						? [
							{
								filename: req.file.originalname,
								content: fileStream,
							},
						]
						: [],
				};
		}
		try {
			const response = await sendMail(data);
			// if (response.message == "success") {
			// 	if (oc) {
			// 		await notificationUser(oc, receiver, rest);
			// 	}
			// }
			res.status(200).send("Email sent successfully");
		} catch (error) {
			console.log("Error->", error);
			res.status(500).send(`Error sending email`);
		}
	} catch (error) {
		console.log("Error->", error);
		res.status(500).send("Error processing request");
	}
};
