import {
  Divider,
  FormControl,
  TextField,
  Input,
  InputLabel,
  Stack,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import React, { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)
import baseUrl from "../../../utils/baseUrl"
import useTranslation from "next-translate/useTranslation"
import { Label } from "@mui/icons-material"

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
  email: "",
  number: "",
  subject: "",
  lkdurl: "",
  cv: "",
}

const Formulario = ({ vacante }) => {
  const { t } = useTranslation("common")
  const completaform = t("completaform")
  const nombreyape = t("nombreyape")
  const telefono = t("telefono")
  const comoteEnteraste = t("comoteEnteraste")
  const bolsatrabajo = t("bolsatrabajo")
  const feriauni = t("feriauni")
  const ceiboweb = t("ceiboweb")
  const recomendacion = t("recomendacion")
  const instaAd = t("instaAd")
  const instaPost = t("instaPost")
  const otros = t("otros")
  const adjCv = t("adjCv")
  const enviar = t("enviar")

  const nombre = t("nombre")

  const [checked, setchecked] = useState([])

  const handleCheckbox = (e) => {
    const FormControlLabel = e.target.parentNode.parentNode
    const labelContent = FormControlLabel.lastElementChild.textContent

    if (checked.includes(labelContent)) {
      let index = checked.indexOf(labelContent)
      setchecked((prevArray) =>
        prevArray.slice(0, index).concat(prevArray.slice(index + 1))
      )
    } else {
      setchecked((prev) => [...prev, labelContent])
    }
  }

  const [contact, setContact] = useState(INITIAL_STATE)
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name == "cv") {
      setContact((prevState) => ({ ...prevState, [name]: e.target.files[0] }))
    } else {
      setContact((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const { name, email, number, lkdurl, cv } = contact
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("number", number)
      formData.append("lkdurl", lkdurl)
      formData.append("checked", checked)
      formData.append("subject", "Nueva postulación a vacante en Ceibo")
      formData.append("type", "recruiting")
      formData.append("vacante", vacante)
      formData.append("cv", cv)

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      console.log(response.data)
      if (response.status == 200) {
        setContact(INITIAL_STATE)
        setchecked([])
        alertContent()
      } else {
        alertError()
      }
    } catch (error) {
      console.log(error)
      alertError()
    }
  }

  return (
    <>
      <div className="pb-100 mt-4">
        <div className="container">
          <Box component="section" sx={{ border: "thin solid #e8e8e8", p: 2 }}>
            <h4 style={{ padding: "20px 0 10px 10px" }}>{completaform}</h4>
            <Stack component="form">
              <FormControl sx={{ my: 2 }}>
                <InputLabel htmlFor="fullname">{nombreyape} *</InputLabel>
                <Input
                  id="fullname"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={contact.name}
                  required
                />
              </FormControl>
              <FormControl sx={{ my: 2 }}>
                <InputLabel htmlFor="email">Email *</InputLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl sx={{ my: 2 }}>
                <InputLabel htmlFor="phone">{telefono} *</InputLabel>
                <Input
                  id="phone"
                  type="phone"
                  name="number"
                  value={contact.number}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl sx={{ my: 2 }}>
                <InputLabel htmlFor="lkd">LinkedIn URL *</InputLabel>
                <Input
                  id="lkd"
                  type="url"
                  name="lkdurl"
                  onChange={handleChange}
                  value={contact.lkdurl}
                  required
                />
              </FormControl>

              <FormGroup>
                <Typography component="h6" sx={{ my: 2 }}>
                  {comoteEnteraste}*
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.includes(bolsatrabajo)}
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
                      checked={checked.includes(recomendacion)}
                      onChange={handleCheckbox}
                    />
                  }
                  label={recomendacion}
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.includes("LinkedIn")}
                      onChange={handleCheckbox}
                    />
                  }
                  label="LinkedIn"
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.includes(instaAd)}
                      onChange={handleCheckbox}
                    />
                  }
                  label={instaAd}
                ></FormControlLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.includes(instaPost)}
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
              />

              <div
                className="container btn-two-container mb-1"
                onClick={handleSubmit}
              >
                <a className="default-btn-two">{enviar}</a>
              </div>
            </Stack>
          </Box>
        </div>
      </div>
    </>
  )
}

export default Formulario
