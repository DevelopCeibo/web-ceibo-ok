import React, { useState } from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import baseUrl from "../../utils/baseUrl"
import Swal from "sweetalert2"
const MySwal = withReactContent(Swal)
import withReactContent from "sweetalert2-react-content"
import axios from "axios"

const alertContent = () => {
  MySwal.fire({
    title: "",
    text: "Mensaje enviado",
    icon: "success",
    timer: 3400,
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
  text: "",
}
const Footer = () => {
  const { t } = useTranslation("common")
  const suscribiteNews = t("suscribiteNews")
  const suscribirme = t("suscribirme")

  const currentYear = new Date().getFullYear()
  const [contact, setContact] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    setContact(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = `${baseUrl}/api/contact`
      const formData = new FormData()
      formData.append("email", contact)
      formData.append(
        "subject",
        "Nuevo suscripto al newsletter desde la web de Ceibo"
      )
      formData.append("type", "newsletter")

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      if (response.status == 200) {
        alertContent()
      }
      setContact("")
    } catch (error) {
      console.log(error)
      alertError()
    }
  }

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="/images-ceibo/ceibo-logo-white.png"
                        alt="ceibo logo"
                        style={{ maxWidth: "240px" }}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3  col-sm-12 col-md-6">
              <div className="single-footer-widget ml-4">
                <p>
                  <b>{suscribiteNews}</b>
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-sm-12 mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      {suscribirme}
                    </button>
                  </div>
                  {/* <a className="default-btn-two">
                    Suscribirme <i className="fas fa-chevron-right"></i>
                  </a> */}
                </form>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 col-md-6 ">
              <div className="single-footer-widget ml-4">
                <ul className="list">
                  <li>
                    <b>Buenos Aires</b> <br />
                    Espacio Circular Innova
                  </li>
                  <li>
                    <b>Miami</b> <br /> 777 Brickell Ave
                    <br /> Suite 1210, FL, (33131)
                  </li>
                  <li>
                    <b>Asunción</b> <br /> World Trade Center
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 col-md-6">
              <div className="single-footer-widget">
                {/* <h3>Get in Touch</h3> */}
                <div className="social-links mb-2">
                  <a
                    href="https://www.linkedin.com/company/ceibodigital/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/ceibodigital/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:info@ceibo.digital">info@ceibo.digital</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:recruiting@ceibo.digital">
                      recruiting@ceibo.digital
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Pungent. All Rights Reserved By{" "}
              <a href="https://envytheme.com" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
        </div> */}
      </footer>
    </>
  )
}

export default Footer
