import {
	FormControl,
	Input,
	InputLabel,
	Stack,
	Typography,
	FormGroup,
	Checkbox,
	FormControlLabel,
	TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../../utils/baseUrl";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import utmTracker from "../../../utils/utmTracker";

const alertContent = () => {
	MySwal.fire({
		title: "",
		text: "Tu información fue enviada correctamente al equipo de recruiting de CEIBO",
		icon: "success",
		timer: 2000,
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
// Form initial state
const INITIAL_STATE = {
	name: "",
	email: "",
	number: "",
	subject: "",
	lkdurl: "",
	cv: "",
	utmSource: "",
	utmMedium: "",
	utmCampaign: "",
	utmTerm: "",
	utmContent: "",
};

const Formulario = ({ vacante, roleType }) => {

	const { t } = useTranslation("common");
	const completaform = t("completaform");
	const nombreyape = t("nombreyape");
	const telefono = t("telefono");
	const comoteEnteraste = t("comoteEnteraste");
	const bolsatrabajo = t("bolsatrabajo");
	const feriauni = t("feriauni");
	const ceiboweb = t("ceiboweb");
	const recomendacion = t("recomendacion");
	const LinkedIn = t("linkedin");
	const instaPost = t("instaPost");
	const otros = t("otros");
	const adjCv = t("adjCv");
	const enviar = t("enviar");

	const [checked, setchecked] = useState([]);
	const [showCheked, setShowChecked] = useState(false);

	const handleCheckbox = (e) => {
		const FormControlLabel = e.target.parentNode.parentNode;
		const labelContent = FormControlLabel.lastElementChild.textContent;
		if (checked.includes(labelContent)) {
			let index = checked.indexOf(labelContent);
			setchecked((prevArray) =>
				prevArray.slice(0, index).concat(prevArray.slice(index + 1))
			);
		} else {
			setchecked((prev) => [...prev, labelContent]);
		}
	};

	const [contact, setContact] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name == "cv") {
			setContact((prevState) => ({
				...prevState,
				[name]: e.target.files[0],
			}));
		} else {
			setContact((prevState) => ({ ...prevState, [name]: value }));
		}
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		criteriaMode: "all",
		defaultValues: {
			email: "",
			name: "",
			number: "",
			lkdurl: "",
		},
		shouldFocusError: true,
		shouldUnregister: true,
		reValidateMode: "onChange",
		// messages: {
		//   required: "Este campo es requerido",
		//   pattern: "El formato del correo electrónico no es válido",
		// },
	});
	const router = useRouter();
	const path = router.asPath;

	const onSubmit = async (data) => {
		// e.preventDefault()
		const { email, name, number, lkdurl, cv } = data;
		try {
			const url = `${baseUrl}/api/contact`;
			const {
				utm_source,
				utm_campaign,
				utm_medium,
				utm_content,
				utm_term,
			} = utmTracker(path);
			const formData = new FormData();
			formData.append("name", name);
			formData.append("email", email);
			formData.append("number", number);
			formData.append("lkdurl", lkdurl);
			formData.append("checked", checked);
			formData.append("subject", "Nueva postulación a vacante en Ceibo");
			formData.append("type", "recruiting");
			formData.append("vacante", vacante);
			formData.append("cv", cv[0]);
			formData.append("utm_source", utm_source);
			formData.append("utm_campaign", utm_campaign);
			formData.append("utm_medium", utm_medium);
			formData.append("utm_content", utm_content);
			formData.append("utm_term", utm_term);
			formData.append("roleType", roleType);
			if (checked.length) {
				const response = await axios.post(url, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				console.log(response.data);
				if (response.status == 200) {
					setContact(INITIAL_STATE);
					setchecked([]);
					alertContent();
				} else {
					alertError();
				}
			} else {
				setShowChecked(true);
			}
		} catch (error) {
			console.log(error);
			alertError();
		}
	};

	return (
		<>
			<div className="pb-100 mt-4">
				<div className="container">
					<Box
						component="section"
						sx={{ border: "thin solid #e8e8e8", p: 2 }}
					>
						<h4 style={{ padding: "20px 0 10px 10px" }}>
							{completaform}
						</h4>
						<Stack component="form">
							<FormControl sx={{ my: 2 }}>
								{/* <InputLabel htmlFor="fullname">{nombreyape} *</InputLabel> */}
								<TextField
									placeholder={nombreyape}
									id="fullname"
									type="text"
									name="name"
									// onChange={handleChange}
									// value={contact.name}
									{...register("name", {
										required: "This field is required",
										minLength: {
											value: 2,
											message: "Mínimum of 2 characters",
										},
									})}
									error={!!errors.name}
									helperText={errors.name?.message}
									required
								/>
							</FormControl>
							<FormControl sx={{ my: 2 }}>
								<TextField
									placeholder="Email *"
									id="email"
									type="email"
									name="email"
									{...register("email", {
										required: "This field is required",
									})}
									error={!!errors.email}
									helperText={errors.email?.message}
									required
								/>
							</FormControl>
							<FormControl sx={{ my: 2 }}>
								<TextField
									placeholder={telefono}
									id="phone"
									type="phone"
									name="number"
									{...register("number", {
										required: "This field is required",
									})}
									error={!!errors.number}
									helperText={errors.number?.message}
									required
								/>
							</FormControl>
							<FormControl sx={{ my: 2 }}>
								<TextField
									placeholder="LinkedIn URL *"
									id="lkd"
									type="url"
									name="lkdurl"
									{...register("lkdurl", {
										required: "This field is required",
									})}
									error={!!errors.lkdurl}
									helperText={errors.lkdurl?.message}
								/>
							</FormControl>

							<FormGroup>
								<Typography component="h6" sx={{ my: 2 }}>
									{comoteEnteraste}*
								</Typography>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(
												bolsatrabajo
											)}
											onChange={handleCheckbox}
										/>
									}
									label={bolsatrabajo}
								></FormControlLabel>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(feriauni)}
											onChange={handleCheckbox}
										/>
									}
									label={feriauni}
								></FormControlLabel>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(ceiboweb)}
											onChange={handleCheckbox}
										/>
									}
									label={ceiboweb}
								></FormControlLabel>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(
												recomendacion
											)}
											onChange={handleCheckbox}
										/>
									}
									label={recomendacion}
								></FormControlLabel>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(
												"LinkedIn"
											)}
											onChange={handleCheckbox}
										/>
									}
									label={LinkedIn}
								></FormControlLabel>
								{/*                 <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.includes(instaAd)}
                      onChange={handleCheckbox}
                    />
                  }
                  label={instaAd}
                ></FormControlLabel> */}
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(
												instaPost
											)}
											onChange={handleCheckbox}
										/>
									}
									label={instaPost}
								></FormControlLabel>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked.includes(otros)}
											onChange={handleCheckbox}
										/>
									}
									label={otros}
								></FormControlLabel>
								{showCheked && !checked.length && (
									<Typography variant="caption" color="error">
										This field is required.
									</Typography>
								)}
							</FormGroup>

							<Typography component="h6" sx={{ my: 2 }}>
								{adjCv}
							</Typography>
							{/* <Label htmlFor="cv">PDF *</Label> */}
							<Input
								id="cv"
								type="file"
								name="cv"
								accept="application/pdf"
								required
								onChange={handleChange}
								{...register("cv", {
									required: "This field is required",
								})}
							/>

							<div
								className="container btn-two-container mb-1"
								onClick={handleSubmit(onSubmit)}
							>
								<a className="default-btn-two">{enviar}</a>
							</div>

							{/* <FormControl>
								<TextField
									id="utm_source"
									type="text"
									value={"test_utm"}
									hidden
								/>
							</FormControl>
							<FormControl>
								<TextField
									id="utm_medium"
									type="text"
									value={"test_utm"}
									hidden
								/>
							</FormControl>
							<FormControl>
								<TextField
									id="utm_campaign"
									type="text"
									value={"test_utm"}
									hidden
								/>
							</FormControl>
							<FormControl>
								<TextField
									id="utm_content"
									type="text"
									value={"test_utm"}
									hidden
								/>
							</FormControl>
							<FormControl>
								<TextField
									id="utm_term"
									type="text"
									value={"test_utm"}
									hidden
								/>
							</FormControl> */}
						</Stack>
					</Box>
				</div>
			</div>
		</>
	);
};

export default Formulario;
