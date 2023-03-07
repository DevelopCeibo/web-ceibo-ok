import { useRouter } from "next/router"
import React, { useState } from "react"
import Footer from "../../components/Layouts/Footer"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import Formulario from "../../components/sumatealequipo/vacantes/Formulario"
import PageBanner from "../../components/Common/PageBanner"

import vacantesES from "../../utils/vacantes.json"
import vacantesEN from "../../utils/vacantesEN.json"

import DescripcionVacante from "../../components/sumatealequipo/vacantes/DescripcionVacante"
import { Typography, Box } from "@mui/material"
import { marked } from "marked"
import Head from "next/head"

const Vacante = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const pathVacante = router.asPath.split("/")[2]

  const [vacantes, setvacantes] = useState(
    locale == "en" ? vacantesEN : vacantesES
  )
  const [data, setdata] = React.useState({})

  React.useEffect(() => {
    if (locale == "en") {
      setvacantes(vacantesEN)
    } else {
      setvacantes(vacantesES)
    }

    vacantes.forEach((vac) => {
      if (vac["path-url"] === pathVacante) {
        setdata(vac)
      }
    })
  }, [pathVacante, locale])

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

  const TITLE = `${data?.title} - Ofertas laborales en Ceibo Digital`

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <NavbarTwo />
      <PageBanner pageTitle={data?.title} bgcolor={data?.bgcolor} />
      {/* <DescripcionVacante description={ManagerDesc} /> */}
      <div className="pt-70">
        <div className="container">
          <Box component="section" sx={{ border: "thin solid #e8e8e8", p: 2 }}>
            {renderContent(data?.content)}
          </Box>
        </div>
      </div>

      <Formulario vacante={data?.title} />
      <Footer />
    </>
  )
}

export default Vacante
