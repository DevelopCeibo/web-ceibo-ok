import { useRouter } from "next/router";
import React from "react";
import Link from "../../utils/ActiveLink";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import useTranslation from "next-translate/useTranslation";

const NavbarFive = () => {
  const { route, locale, locales, push } = useRouter();
  const [actualLocale, setactualLocale] = React.useState(locale);

  const { t } = useTranslation("common");
  const navInicio = t("navInicio");
  const cultura = t("cultura");
  const queHacemos = t("queHacemos");
  const sumateAlEquipo = t("sumateAlEquipo");
  const busquedasAbiertas = t("busquedasAbiertas");
  const casosExito = t("casosExito");
  const contacto = t("contacto");
  const publicacionesTitle = t("publicacionesTitle");
  const insightsTitle = t("insightsTitle");
  const eventos = t("eventos");

  const handleLocale = (e) => {
    let locale = "es";
    e.target.innerText.toLowerCase() === "español"
      ? (locale = "es")
      : (locale = "en");
    setactualLocale(locale);
    push("/", undefined, { locale: locale });
  };

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

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
                {/* <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a className="nav-link"> {navInicio}</a>
                  </Link>
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Home <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Link>
                </li> */}

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

                {/* <li className="nav-item">
                  <Link href="/sumate-al-equipo" activeClassName="active">
                    <a className="nav-link"> {sumateAlEquipo}</a>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link href="/sumate-al-equipo" activeClassName="active">
                    <a className="nav-link">
                      {sumateAlEquipo}
                      <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    {/*  <h6 class="dropdown-header">lenguaje</h6> */}

                    <li className="nav-item">
                      <Link href="/sumate-al-equipo" activeClassName="active">
                        <a className="nav-link">Overview</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/sumate-al-equipo/busquedas-vigentes"
                        activeClassName="active"
                      >
                        <a className="nav-link">{busquedasAbiertas}</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/casos-de-exito" activeClassName="active">
                    <a className="nav-link"> {casosExito}</a>
                  </Link>
                </li>

                {/* Dropdown Publicaciones */}

                <li className="nav-item">
                  <a className="nav-link">
                    {" "}
                    {"News & Insights"}
                    <i className="fa-solid fa-angle-down"></i>
                  </a>

                  <ul className="dropdown-menu">
                    {/*  <h6 class="dropdown-header">lenguaje</h6> */}

                    <li className="nav-item">
                      <Link href="/publicaciones" activeClassName="active">
                        <a className="nav-link">{publicacionesTitle}</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/insights" activeClassName="active">
                        <a className="nav-link">{insightsTitle}</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Fin dropdown Publicaciones*/}

                <li className="nav-item">
                  <Link href="/eventos" activeClassName="active">
                    <a className="nav-link"> {eventos}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contacto" activeClassName="active">
                    <a className="nav-link">{contacto}</a>
                  </Link>
                </li>

                {/* Dropdown Lenguaje */}

                <li className="nav-item">
                  <a className="nav-link" onClick={(e) => e.preventDefault()}>
                    <i className="fa-solid fa-globe"></i>{" "}
                    <i className="fa-solid fa-angle-down"></i>
                  </a>

                  <ul
                    className="dropdown-menu"
                    /* style={{
                      margin: 0,
                      padding: 0,
                      backgroundColor: "transparent",
                    }} */
                  >
                    {/*  <h6 class="dropdown-header">lenguaje</h6> */}

                    <li
                      className="nav-item"
                      value="es"
                      onClick={(e) => handleLocale(e)}
                    >
                      <Link href="#">
                        <a className="nav-link">{"Español"}</a>
                      </Link>
                    </li>

                    <li
                      className="nav-item"
                      value="es"
                      onClick={(e) => handleLocale(e)}
                    >
                      <Link href="#">
                        <a className="nav-link">{"English"}</a>
                      </Link>
                    </li>

                    {/*  <li className="nav-item">
                      <ToggleButtonGroup
                        // value={alignment}
                        // onChange={handleAlignment}
                        exclusive
                        aria-label="text alignment"
                        size="small"
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
                    </li> */}

                    {/*  <li className="nav-item">
                      <Link href="/blog2" activeClassName="active">
                        <a className="nav-link">Blog Right Sidebar</a>
                      </Link>
                    </li> */}
                  </ul>
                </li>

                {/* Fin dropdown */}

                {/* TOGGLE LENGUAJE OLD */}
                {/* <div>
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
                </div> */}
                {/* FIN DE TOGGLE LENGUAJE OLD */}

                <li className="nav-item">
                  <Link href="/alumni" activeClassName="active">
                    <a className="nav-link">
                      {" "}
                      <i className="fa-regular fa-circle-user"></i> Alumni
                    </a>
                  </Link>
                </li>
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
  );
};

export default NavbarFive;
