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
  Button
} from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { addEmailToSendgridContactList } from "../../services/sendgrid.service";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

// Form initial state
const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  empresa: "",
  cargo: "",
  phone: ""
};

const alertContent = () => {
  MySwal.fire({
    title: "",
    text: "Te has registrado con éxito al evento. Pronto recibirás novedades por correo.",
    icon: "success",
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
const alertError = () => {
  MySwal.fire({
    icon: "error",
    // title: "Oops...",
    text: "Algo salió mal!",
    footer: "Podes intentarlo más tarde, o comunicarte por otro medio",
  });
};
const alertMissingFields = () => {
  MySwal.fire({
    icon: "error",
    text: "Campos sin completar",
    footer: "Por favor, completa los campos faltantes",
  });
}

const eventForm = ({eventImageSource, eventContactList}) => {
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
  const suscribing = t("suscribing");
  const phone = t("telefono");

  const [contact, setContact] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };
  const [selectSource, setselectSource] = React.useState("");
  const handleChangeSelect = (event) => {
    setselectSource(event.target.value);
  };

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault();
    setIsLoading(true)
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, lastname, email, empresa, cargo, phone } = contact;

      if (name == "" || lastname == "" || email == "" || empresa == "" || phone == "") {
        alertMissingFields()
        return
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("empresa", empresa);
      formData.append("cargo", cargo);
      formData.append("checked", selectSource);
      formData.append("phone", phone);
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

      const sendgridResponse = await addEmailToSendgridContactList(email, eventContactList)

      if (response.status == 200) {
        setContact(INITIAL_STATE);
        alertContent();
      }
    } catch (error) {
      alertError();
    } finally {
      setIsLoading(false)
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
            <img src={eventImageSource} className="img-evento" />
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
              <FormControl sx={{ my: 2, width: "49%" }} required={true}>
                <InputLabel htmlFor="fullname" required={true}>{nombre}</InputLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required={true}
                />
              </FormControl>
              <FormControl sx={{ my: 2, width: "49%" }}>
                <InputLabel htmlFor="fullname">{apellido}</InputLabel>
                <Input
                  id="lastname"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={contact.lastname}
                  disabled={isLoading}
                  required={true}
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
                disabled={isLoading}
                required={true}
              />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="empresa">{empresa}*</InputLabel>
              <Input
                id="empresa"
                type="text"
                name="empresa"
                onChange={handleChange}
                value={contact.empresa}
                disabled={isLoading}
                required={true}
              />
            </FormControl>
            {/* <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="cargo">{cargo}</InputLabel>
              <Input
                id="cargo"
                type="text"
                name="cargo"
                onChange={handleChange}
                value={contact.cargo}
                disabled={isLoading}
                required
              />
            </FormControl> */}
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="phone">{phone}*</InputLabel>
              <Input
                id="phone"
                type="text"
                name="phone"
                onChange={handleChange}
                value={contact.phone}
                disabled={isLoading}
                required={true}
              />
            </FormControl>

            {/* <FormGroup sx={{ overflowX: "scroll" }}>
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
                    disabled={isLoading}
                  >
                    <MenuItem value={linkedin}>{linkedin}</MenuItem>
                    <MenuItem value={instaPost}>{instaPost}</MenuItem>
                    <MenuItem value={ceiboweb}>{ceiboweb}</MenuItem>
                    <MenuItem value={mail}>{mail}</MenuItem>
                    <MenuItem value={otros}>{otros}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </FormGroup> */}

            <div className="container btn-two-container mb-1">
                <Button className="default-btn-two" disabled={isLoading} onClick={handleSubmit}>
                  {registernow}
                </Button>
            </div>
          </Stack>
        </div>
      </section>
    </>
  );
};

export default eventForm;
