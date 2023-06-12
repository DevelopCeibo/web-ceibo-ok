import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import {
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
  FormGroup,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import useTranslation from "next-translate/useTranslation";

// Form initial state
const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  empresa: "",
  cargo: "",
};
const alertContent = () => {
  MySwal.fire({
    title: "",
    text: "Mensaje enviado",
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

const eventForm = () => {
  const { t } = useTranslation("common");
  const prox = t("prox");
  const suscribiteEvento = t("suscribiteEvento");
  const dondeEnteraste = t("dondeEnteraste");
  const registernow = t("registernow");
  const linkedin = t("linkedin");
  const ceiboweb = t("ceiboweb");
  const mail = t("mail");
  const instaPost = t("instaPost");
  const nombre = t("nombre");
  const apellido = t("apellido");
  const empresa = t("empresa");
  const cargo = t("cargo");
  const otros = t("otros");

  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };
  const [selectSource, setselectSource] = React.useState("");
  const handleChangeSelect = (event) => {
    setselectSource(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, lastname, email, empresa, cargo } = contact;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("empresa", empresa);
      formData.append("cargo", cargo);
      formData.append("checked", selectSource);
      formData.append(
        "subject",
        "Nuevo inscripto al próximo evento / webinar de Ceibo."
      );
      formData.append("type", "evento");

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      if (response.status == 200) {
        setContact(INITIAL_STATE);
        alertContent();
      }
    } catch (error) {
      console.log(error);
      alertError();
    }
  };

  return (
    <>
      <div className="section-title">
        <h2>{prox}</h2>
      </div>
      <section className="row justify-content-center eventos">
        <div className="col-12 col-lg-6 p-0">
          <Stack
            sx={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img src={"/images-ceibo/eventos1.jpg"} className="img-evento" />
          </Stack>
        </div>
        <div className="col-12 col-lg-6" style={{ padding: 4 }}>
          <Stack
            component="form"
            sx={{
              bgcolor: "white",
              padding: 4,
              borderRadius: "8px",
              width: "100%",
            }}
          >
            <h4>{suscribiteEvento}</h4>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <FormControl sx={{ my: 2, width: "49%" }}>
                <InputLabel htmlFor="fullname">{nombre} *</InputLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl sx={{ my: 2, width: "49%" }}>
                <InputLabel htmlFor="fullname">{apellido} *</InputLabel>
                <Input
                  id="lastname"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={contact.lastname}
                  required
                />
              </FormControl>
            </Stack>
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="email">Email *</InputLabel>
              <Input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={contact.email}
                required
              />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="empresa">{empresa}</InputLabel>
              <Input
                id="empresa"
                type="text"
                name="empresa"
                onChange={handleChange}
                value={contact.empresa}
                required
              />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="cargo">{cargo}</InputLabel>
              <Input
                id="cargo"
                type="text"
                name="cargo"
                onChange={handleChange}
                value={contact.cargo}
                required
              />
            </FormControl>

            <FormGroup sx={{ overflowX: "scroll" }}>
              <Typography component="h6" sx={{ my: 2 }}>
                {dondeEnteraste}{" "}
              </Typography>
              <Box>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectSource}
                    label=""
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value={linkedin}>{linkedin}</MenuItem>
                    <MenuItem value={instaPost}>{instaPost}</MenuItem>
                    <MenuItem value={ceiboweb}>{ceiboweb}</MenuItem>
                    <MenuItem value={mail}>{mail}</MenuItem>
                    <MenuItem value={otros}>{otros}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </FormGroup>

            <div className="container btn-two-container mb-1">
              <a className="default-btn-two" onClick={handleSubmit}>
                {registernow}
              </a>
            </div>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default eventForm;
