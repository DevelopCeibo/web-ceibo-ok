import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../utils/baseUrl";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { addEmailToSendgridContactList } from "../../services/sendgrid.service";

const alertContent = () => {
	MySwal.fire({
		title: "",
		text: "Suscripción realizada con éxito",
		icon: "success",
		timer: 3000,
		timerProgressBar: true,
		showConfirmButton: false,
	});
};
const alertError = () => {
	MySwal.fire({
		icon: "error",
		// title: "Oops...",
		timer: 3000,
		text: "Algo salió mal!",
		footer: "Podes intentarlo más tarde, o comunicarte por otro medio",
	});
};
const Newsletter = () => {
	const { t } = useTranslation("common");
	const suscribiteNews = t("suscribiteNews");
	const suscribirme = t("suscribirme");
	const ingresaCorreo = t("ingresaCorreo");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		criteriaMode: "all",
		defaultValues: {
			email: "",
		},
		shouldFocusError: true,
		shouldUnregister: true,
		reValidateMode: "onChange",
		messages: {
			required: "Este campo es requerido",
			pattern: "El formato del correo electrónico no es válido",
		},
		//  validationSchema: schema, //aquí debes definir tu propio esquema de validación
	});

	// const [contact, setContact] = useState("")

	// const handleChange = (e) => {
	//   setContact(e.target.value)
	// }

	const onSubmit = async (data) => {
		// e.preventDefault()
		const { email } = data;
		try {
			const url = `${baseUrl}/api/contact`;
			const formData = new FormData();
			formData.append("email", email);
			// formData.append("email", contact)
			formData.append(
				"subject",
				"Nuevo suscripto al newsletter desde la web de Ceibo"
			);
			formData.append("type", "newsletter");
			const response = await axios.post(url, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			if (response.status == 200) {
				alertContent();
			}
			await addEmailToSendgridContactList(email,'newsletter');
			// setContact("")
		} catch (error) {
			alertError();
		}
	};
	console.log(errors);
	return (
		<>
			<div className="newsletter-area">
				<div className="container">
					<div
						className="newsletter-inner-area"
						style={{
							backgroundImage: `url(/images-ceibo/Foto-newsletter.jpg)`,
						}}
					>
						<div className="newsletter-content">
							<span className="sub-title"></span>
							<h2>{suscribiteNews}</h2>

							<form
								className="newsletter-form"
								onSubmit={handleSubmit(onSubmit)}
							>
								<input
									type="email"
									className="form-control"
									placeholder={ingresaCorreo}
									name="email"
									{...register("email", {
										required: "Este campo es requerido",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message:
												"El correo ingresado no es válido",
										},
									})}
									// onChange={handleChange}
									// value={contact}
									// required
									// {...register("email", { required: true })}
								/>
								{errors.email && (
									<div
										style={{
											backgroundColor: "white",
											padding: "20px",
											width: "fit-content",
											margin: "10px auto 0",
											borderRadius: "8px",
											border: "1px solid red",
											color: "red",
											position: "absolute",
											left: "0",
											right: "0",
										}}
									>
										{errors.email.message}
									</div>
								)}

								<button type="submit">{suscribirme}!</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newsletter;
