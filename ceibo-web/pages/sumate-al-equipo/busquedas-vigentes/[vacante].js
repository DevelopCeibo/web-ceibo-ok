import { useRouter } from "next/router"
import React, { useState } from "react"
import NavbarFive from "../../../components/Layouts/NavbarFive"
import Formulario from "../../../components/sumatealequipo/vacantes/Formulario"
import PageBanner from "../../../components/Common/PageBanner"
import vacantesES from "../../../utils/vacantes.utils"
import vacantesEN from "../../../utils/vacantesEN.utils"
import { marked } from "marked"
import Head from "next/head"
import { Typography, Box, CircularProgress, Backdrop } from "@mui/material"
import FooterCeiboGrowth from "../../../components/Layouts/FooterCeiboGrowth"

const Vacante = () => {
  const router = useRouter()
  const { locale } = useRouter()

  const pathVacante = router.query.vacante

  const [vacantes, setvacantes] = useState(
    locale == "es" ? vacantesES : vacantesEN
  )

  const [vacante, setVacante] = useState({})

  React.useEffect(() => {
    if (locale == "en") {
      setvacantes(vacantesEN)
    } else {
      setvacantes(vacantesES)
    }
    vacantes.forEach((vac) => {
      if (vac["path-url"] == pathVacante) {

        setVacante(vac)
      }
    })
  }, [locale, pathVacante])

  const renderContent = (content) => {
    return content?.map((el, i) => {
      switch (el.type) {
        case "p":
          return (
            <Typography
              component="p"
              sx={{ pb: 2 }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            ></Typography>
          )
        case "subtitle":
          return (
            <Typography
              sx={{ pb: 1 }}
              // dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            >
              <strong>{el.text}</strong>
            </Typography>
          )
        case "list":
          return (
            <Box
              component="ul"
              sx={{ color: "black", paddingLeft: "50px", fontSize: 16 }}
            >
              {el.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </Box>
          )
        case "doublelist":
          return el.items.map((item, idx) => {
            return (
              <div key={idx}>
                {/* <Typography sx={{ pb: 1 }}>{item.title}</Typography> */}
                <Box
                  component="ul"
                  sx={{ color: "black", fontSize: 16, marginBottom: 1 }}
                >
                  <li>
                    <strong>{item.title}</strong>
                  </li>
                </Box>
                <Box
                  component="ul"
                  sx={{ color: "black", paddingLeft: "60px", fontSize: 16 }}
                >
                  {item?.insideItems?.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </Box>
              </div>
            )
          })
        default:
          return null
      }
    })
  }

  const TITLE = `${
    vacante?.title ? vacante.title : "Vacante"
  } - Ofertas laborales en Ceibo Digital`

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <NavbarFive />
      {/* <PageBanner pageTitle={vacante?.title} bgcolor={vacante?.bgcolor} />
      <div className="pt-70">
        <div className="container">
          <Box component="section" sx={{ border: "thin solid #e8e8e8", p: 2 }}>
            {renderContent(vacante?.content)}
          </Box>
        </div>
      </div>
    
      <Formulario vacante={vacante?.title} /> */}
      {vacante ? (
        <>
          <PageBanner pageTitle={vacante?.title} bgcolor={vacante?.bgcolor} />
        </>
      ) : (
        <PageBanner
          pageTitle={"Ofertas laborales en Ceibo Digital"}
          bgcolor={"#10113E"}
        />
      )}
      ;
      <div className="pt-70" style={{ minHeight: "100vh" }}>
        <div className="container">
          {vacante ? (
            <Box
              component="section"
              sx={{ border: "thin solid #e8e8e8", p: 2 }}
            >
              {renderContent(vacante?.content)}
            </Box>
          ) : (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={!vacante}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "100px",
                }}
              >
                <>
                  <h4 style={{ padding: "30px", color: "white" }}>
                    Cargando formulario
                  </h4>
                  <CircularProgress />
                </>
              </Box>
            </Backdrop>
          )}
        </div>
      </div>
      {console.log(vacante.roleType)}
      {vacante && <Formulario vacante={vacante?.title} roleType={vacante.roleType} />}
      <FooterCeiboGrowth />
    </>
  )
}

export default Vacante
