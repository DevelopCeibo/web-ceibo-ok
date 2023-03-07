import { useRouter } from "next/router"
import React from "react"
import Link from "../../utils/ActiveLink"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import useTranslation from "next-translate/useTranslation"

const NavbarTwo = () => {
  const { route, locale, locales, push } = useRouter()
  const [actualLocale, setactualLocale] = React.useState(locale)

  const { t } = useTranslation("common")
  const navInicio = t("navInicio")
  const cultura = t("cultura")
  const queHacemos = t("queHacemos")
  const sumateAlEquipo = t("sumateAlEquipo")
  const casosExito = t("casosExito")
  const contacto = t("contacto")
  const publicacionesTitle = t("publicacionesTitle")
  const eventos = t("eventos")

  const handleLocale = (e) => {
    setactualLocale(e.target.innerText.toLowerCase())
    push("/", undefined, { locale: e.target.innerText.toLowerCase() })
  }

  const [menu, setMenu] = React.useState(true)
  const toggleNavbar = () => {
    setMenu(!menu)
  }
  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <img
                  src="/images-ceibo/ceibo-logo.png"
                  className="black-logo ceibo-logo"
                  alt="logo"
                />
                <img
                  src="/images-ceibo/ceibo-logo-white.png"
                  className="white-logo ceibo-logo"
                  alt="logo"
                />
              </a>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a className="nav-link"> {navInicio}</a>
                  </Link>
                  {/* <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Home <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Link> */}
                </li>

                <li className="nav-item">
                  <Link href="/cultura" activeClassName="active">
                    <a className="nav-link">{cultura}</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/que-hacemos" activeClassName="active">
                    <a className="nav-link">{queHacemos}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/sumate-al-equipo" activeClassName="active">
                    <a className="nav-link"> {sumateAlEquipo}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/casos-de-exito" activeClassName="active">
                    <a className="nav-link"> {casosExito}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/publicaciones" activeClassName="active">
                    <a className="nav-link"> {publicacionesTitle}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/eventos" activeClassName="active">
                    <a className="nav-link"> {eventos}</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/alumni" activeClassName="active">
                    <a className="nav-link"> Alumni</a>
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Blog <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/blog" activeClassName="active">
                        <a className="nav-link">Blog Grid</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog2" activeClassName="active">
                        <a className="nav-link">Blog Right Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog3" activeClassName="active">
                        <a className="nav-link">Blog Left Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog-details" activeClassName="active">
                        <a className="nav-link">Blog Details</a>
                      </Link>
                    </li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link href="/contacto" activeClassName="active">
                    <a className="nav-link">{contacto}</a>
                  </Link>
                </li>

                <div>
                  {" "}
                  <ToggleButtonGroup
                    // value={alignment}
                    // onChange={handleAlignment}
                    exclusive
                    aria-label="text alignment"
                    sx={{ bgcolor: "#fff", height: "max-content" }}
                  >
                    <ToggleButton
                      value="es"
                      onClick={handleLocale}
                      sx={{
                        color: "#000",
                        bgcolor: locale == "es" ? "#fff" : "#00000047",
                      }}
                    >
                      <p style={{ padding: 0, margin: 0 }}>es</p>
                    </ToggleButton>
                    <ToggleButton
                      value="en"
                      onClick={handleLocale}
                      sx={{
                        color: "#000",
                        bgcolor: locale == "en" ? "#fff" : "#00000047",
                      }}
                    >
                      <p style={{ padding: 0, margin: 0 }}>en</p>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </ul>

              {/* <div className="others-options">
                <Link href="/contact">
                  <a className="btn btn-primary">Get Started</a>
                </Link>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavbarTwo
