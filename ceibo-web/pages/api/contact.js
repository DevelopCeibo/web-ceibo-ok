import nodemailer from "nodemailer"
import sgTransport from "nodemailer-sendgrid-transport"
import multer from "multer"
import path from "path"
const { Readable } = require("stream")

export const config = {
  api: {
    bodyParser: false,
    // en true, el req.body me llega,
    // en false puedo procesar el file
  },
}
const transporter = {
  auth: {
    api_key: process.env.SENDGRID_API_KEY,
  },
}

const mailer = nodemailer.createTransport(sgTransport(transporter))

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10000000000,
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== ".pdf") {
      return cb(new Error("Only PDFs are allowed"))
    }
    cb(null, true)
  },
}).single("cv")

const uploadFile = (req) => {
  return new Promise((resolve, reject) => {
    upload(req, null, (err) => {
      if (err) {
        console.log("Multer error:", err)
        reject(new Error("An error occurred while uploading."))
      } else {
        resolve()
      }
    })
  })
}

const sendMail = (data) => {
  return new Promise((resolve, reject) => {
    mailer.sendMail(data, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

export default async (req, res) => {
  try {
    await uploadFile(req)

    const { type, ...rest } = req.body
    let receiver
    let name,
      lastname,
      email,
      number,
      subject,
      text,
      lkdurl,
      checked,
      cv,
      empresa,
      cargo,
      vacante
    let data

    switch (type) {
      case "evento":
        ;({ name, lastname, email, empresa, cargo, subject, checked } = rest)
        receiver = "prensa@ceibo.digital"
        // receiver = "segundo.juan@ceibo.digital"
        data = {
          to: receiver,
          from: email,
          subject: subject,
          text: text,
          html: `
                <b>Nueva suscripción al próximo evento</b>  <br />
                <b>Nombre:</b> ${name}, Apellido: ${lastname} <br />
                <b>Email:</b> ${email} <br />
                <b>Empresa:</b> ${empresa} <br />
                <b>Cargo:</b> ${cargo} <br />
                <b>Se entero por :</b> ${checked}`,
        }
        break
      case "contacto":
        ;({ name, email, number, subject, text } = rest)
        receiver = "info@ceibo.digital"
        // receiver = "segundo.juan@ceibo.digital"
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
        }
        break
      case "newsletter":
        ;({ email, subject } = rest)
        // receiver = "marketing@ceibo.digital"
        receiver = "victoria.selva@ceibo.digital"
        // receiver = "segundo.juan@ceibo.digital"
        data = {
          to: receiver,
          from: email,
          subject: subject,
          html: `
                <b>Email:</b> ${email} <br />
            `,
        }
        break

      case "recruiting":
        ;({ name, email, number, lkdurl, subject, checked, vacante } = rest)
        checked = checked.split(",")
        const fileStream = new Readable()
        fileStream.push(req.file?.buffer)
        fileStream.push(null)
        receiver = "recruiting@ceibo.digital"
        // receiver = "segundo.juan@ceibo.digital"
        cv = req.file
        data = {
          to: receiver,
          from: email,
          subject: subject,
          html: `
                <b>${name} se postulo a la vacante de </b>${vacante} <br />
                <b>Email:</b> ${email} <br />
                <b>Numero:</b> ${number} <br />
                <b>Linkedin URL:</b> ${lkdurl} <br />
                <b>Se entero de la vacante por:</b> ${
                  checked?.join(", ") ?? ""
                } <br />
            `,
          attachments: cv
            ? [
                {
                  filename: req.file.originalname,
                  content: fileStream,
                },
              ]
            : [],
        }
    }
    try {
      const response = await sendMail(data)
      console.log(response)
      if (response.message == "success") {
        res.status(200).send("Email send successfully")
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(`Error sending email`)
    }
  } catch (error) {
    console.log(error)
    res.status(500).send("Error processing request")
  }
}
