import React, { useState } from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/Footer"
import Link from "next/link"
import axios from "axios"
import eventosES from "../../utils/eventos.json"
import eventosEN from "../../utils/eventosEN.json"
import {
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
  FormGroup,
  Checkbox,
  Box,
  MenuItem,
  Select,
  FormControlLabel,
} from "@mui/material"
import Head from "next/head"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)
import baseUrl from "../../utils/baseUrl"
import generateUrl from "../../utils/generateUrl"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const alertContent = () => {
  MySwal.fire({
    title: "",
    text: "Mensaje enviado",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}
const alertError = () => {
  MySwal.fire({
    icon: "error",
    // title: "Oops...",
    timer: 3000,
    text: "Algo salió mal!",
    footer: "Podes intentarlo más tarde, o comunicarte por otro medio",
  })
}
// Form initial state
const INITIAL_STATE = {
  name: "",
  lastname: "",
  email: "",
  empresa: "",
  cargo: "",
}

const Eventos = () => {
  const { locale } = useRouter()

  const { t } = useTranslation("common")
  const eventos = t("eventos")
  const eventosSubt = t("eventosSubt")
  const prox = t("prox")
  const suscribiteEvento = t("suscribiteEvento")
  const dondeEnteraste = t("dondeEnteraste")
  const miraPasados = t("miraPasados")
  const registernow = t("registernow")
  const bolsatrabajo = t("bolsatrabajo")
  const feriauni = t("feriauni")
  const ceiboweb = t("ceiboweb")
  const recomendacion = t("recomendacion")
  const instaAd = t("instaAd")
  const instaPost = t("instaPost")
  const nombre = t("nombre")
  const apellido = t("apellido")
  const empresa = t("empresa")
  const cargo = t("cargo")
  const otros = t("otros")

  const eventosh1 = t("eventosh1")
  const eventosh2 = t("eventosh2")
  const eventosTitleTag = t("eventosTitleTag")
  const eventosMetaDesc = t("eventosMetaDesc")

  const [contact, setContact] = useState(INITIAL_STATE)
  const [eventosData, seteventosData] = useState(
    locale == "en" ? eventosES : eventosES
  )

  const [selectSource, setselectSource] = React.useState("")

  const handleChangeSelect = (event) => {
    setselectSource(event.target.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const { name, lastname, email, empresa, cargo } = contact
      const formData = new FormData()
      formData.append("name", name)
      formData.append("lastname", lastname)
      formData.append("email", email)
      formData.append("empresa", empresa)
      formData.append("cargo", cargo)
      formData.append("checked", selectSource)
      formData.append(
        "subject",
        "Nuevo inscripto al próximo evento / webinar de Ceibo."
      )
      formData.append("type", "evento")

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      console.log(response.data)
      if (response.status == 200) {
        setContact(INITIAL_STATE)
        alertContent()
      }
    } catch (error) {
      console.log(error)
      alertError()
    }
  }

  React.useEffect(() => {
    if (locale == "en") {
      seteventosData(eventosEN)
    } else {
      seteventosData(eventosES)
    }
  }, [locale])

  return (
    <>
      <Head>
        <title>{eventosTitleTag}</title>
        <meta name="description" content={eventosMetaDesc} />{" "}
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={eventosh1}
        BGImage={"/images-ceibo/Banner-eventos.jpeg"}
        bgcolor="#b72837"
        subtitle={eventosh2}
      />
      <div className="pt-100 pb-70">
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
                    {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectSource}
                      label=""
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value={bolsatrabajo}>{bolsatrabajo}</MenuItem>
                      <MenuItem value={feriauni}>{feriauni}</MenuItem>
                      <MenuItem value={ceiboweb}>{ceiboweb}</MenuItem>
                      <MenuItem value={recomendacion}>{recomendacion}</MenuItem>
                      <MenuItem value={instaAd}>{instaAd}</MenuItem>
                      <MenuItem value={instaPost}>{instaPost}</MenuItem>
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
        {/* </div> */}
        <div className="section-title pt-5">
          <h2>{miraPasados}</h2>
        </div>
        <div className="container">
          <section className="row justify-content-center">
            {eventosData[0] &&
              eventosData.map((ev, idx) => {
                return (
                  <div className="col-lg-4 col-md-6" key={idx}>
                    <div className="single-blog-item ">
                      <div className="blog-image">
                        <Link href={ev.link}>
                          <a target="_blank">
                            <img src={ev.img} alt="ceibo" />
                          </a>
                        </Link>
                      </div>

                      <div className="blog-post-content blog">
                        <span className="date">{ev.metadata.date}</span>

                        <h6>
                          <a>{ev.title}</a>
                        </h6>

                        <p>{ev.desc}</p>

                        {locale == "en" && (
                          <span className="date">
                            This webinar was held in spanish *
                          </span>
                        )}
                        <Link href={ev.link}>
                          <a className="read-more-btn">
                            {locale == "en" ? "Watch webinar" : "Ver webinar"}
                            <i className="fa-solid fa-angles-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Eventos
