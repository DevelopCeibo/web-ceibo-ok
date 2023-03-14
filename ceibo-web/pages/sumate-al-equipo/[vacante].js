import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import Footer from "../../components/Layouts/Footer"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import Formulario from "../../components/sumatealequipo/vacantes/Formulario"
import PageBanner from "../../components/Common/PageBanner"
import axios from "axios"
import vacantesES from "../../utils/vacantes.json"
import vacantesEN from "../../utils/vacantesEN.json"

import DescripcionVacante from "../../components/sumatealequipo/vacantes/DescripcionVacante"
import { Typography, Box } from "@mui/material"
import { marked } from "marked"
import Head from "next/head"
import baseUrl from "../../utils/baseUrl"

const Vacante = ({ vacantesES, vacantesEN }) => {
  const router = useRouter()
  const { locale } = useRouter()

  const pathVacante = router.asPath.split("/")[2]

  const [vacantes, setvacantes] = useState(
    locale == "en" ? vacantesEN : vacantesES
  )
  const [vacante, setVacante] = React.useState({})

  React.useEffect(() => {
    if (locale == "en") {
      setvacantes(vacantesEN)
    } else {
      setvacantes(vacantesES)
    }
  }, [vacantesEN])

  React.useEffect(() => {
    const selectedVacante = vacantes?.find(
      (vac) => vac["path-url"] == pathVacante
    )
    setVacante(selectedVacante)
  }, [vacantes, pathVacante])

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
    vacante?.title ? vacante.title : "vacante"
  } - Ofertas laborales en Ceibo Digital`

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <NavbarTwo />
      <PageBanner pageTitle={vacante?.title} bgcolor={vacante?.bgcolor} />
      {/* <DescripcionVacante description={ManagerDesc} /> */}
      <div className="pt-70">
        <div className="container">
          <Box component="section" sx={{ border: "thin solid #e8e8e8", p: 2 }}>
            {renderContent(vacante?.content)}
          </Box>
        </div>
      </div>

      <Formulario vacante={vacante?.title} />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const resEs = await axios.get(`${baseUrl}/api/vacantes?locale=es`)
  const resEn = await axios.get(`${baseUrl}/api/vacantes?locale=en`)

  const vacantesES = resEs.data
  const vacantesEN = resEn.data

  return {
    props: {
      vacantesES,
      vacantesEN,
    },
  }
}

// export async function getStaticPaths(context) {
//   // const locale = context.locale

//   const res = await axios.get(`${baseUrl}/api/vacantes?locale=es`)

//   const vacantes = res.data

//   const paths = vacantes?.map((vacante) => ({
//     params: { vacante: vacante["path-url"] },
//   }))
//   return {
//     paths: paths,
//     fallback: true, // Set to true if you want to fallback to SSR or client-side rendering for paths that aren't generated at build time
//   }
// }

export default Vacante
