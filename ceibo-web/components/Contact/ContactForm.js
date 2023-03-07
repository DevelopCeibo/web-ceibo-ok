import React, { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal)
import baseUrl from "../../utils/baseUrl"
import useTranslation from "next-translate/useTranslation"

const alertContent = () => {
  MySwal.fire({
    title: "",
    text: "Mensaje enviado",
    icon: "success",
    timer: 3000,
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
  subject: "Mensaje enviado desde formulario de contacto de la web.",
  text: "",
}

const ContactForm = () => {
  const { t } = useTranslation("common")
  const contactanosPmas = t("contactanosPmas")
  const informacion = t("informacion")
  const enviarMsg = t("enviarMsg")
  const nombreyape = t("nombreyape")
  const telefono = t("telefono")
  const escrirbimsg = t("escrirbimsg")

  const [contact, setContact] = useState(INITIAL_STATE)
  const handleChange = (e) => {
    const { name, value } = e.target
    setContact((prevState) => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const { name, email, number, subject, text } = contact

      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("number", number)
      formData.append("subject", subject)
      formData.append("text", text)
      formData.append("type", "contacto")

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status == 200) {
        alertContent()
      } else {
        alertError()
      }
      setContact(INITIAL_STATE)
    } catch (error) {
      console.log(error)
      alertError()
    }
  }

  return (
    <>
      <div className="contact-form">
        <div className="container contact-title mt-5 px-4">
          <h2>
            {contactanosPmas} <br /> {informacion}
          </h2>
          <div className="social-links-contact">
            <a
              href="https://www.linkedin.com/company/ceibodigital/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/ceibodigital/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:info@ceibo.digital">
              {" "}
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="container mx-auto row d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="col-sm col-md-6">
            <div className="">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder={`${nombreyape}*`}
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder={`Email *`}
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder={`${telefono}*`}
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder=""
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="6"
                      placeholder={`${escrirbimsg} *`}
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 mb-3">
                  <button type="submit" className="btn btn-primary">
                    {enviarMsg}{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="col-12 col-md-6">
            <img
              src="/images-ceibo/mapa-ubicacion@2x.png"
              alt="ubicación de las oficinas de ceibo"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
