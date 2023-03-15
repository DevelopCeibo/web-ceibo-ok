import React from "react"
import axios from "axios"
import { marked } from "marked"
import Head from "next/head"
import baseUrl from "../../utils/baseUrl"

import Footer from "../../components/Layouts/Footer"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import Formulario from "../../components/sumatealequipo/vacantes/Formulario"
import PageBanner from "../../components/Common/PageBanner"
import { Typography, Box, CircularProgress, Backdrop } from "@mui/material"

const Vacante = ({ vacante }) => {
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
      <NavbarTwo />
      {vacante ? (
        <>
          <PageBanner pageTitle={vacante?.title} bgcolor={vacante?.bgcolor} />
        </>
      ) : (
        <PageBanner
          pageTitle={"Ofertas laborales en Ceibo Digital"}
          bgcolor={"#b72837"}
        />
      )}

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

      {vacante && <Formulario vacante={vacante?.title} />}

      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const locale = context.locale
  const slug = context.params.vacante
  try {
    const res = await axios.get(
      `${baseUrl}/api/vacantes?locale=${locale}&single=true&slug=${slug}`
    )
    const vacante = res.data

    return {
      props: {
        vacante,
      },
    }
  } catch (err) {
    console.error(`Error fetching data  ${err.message}`)
    return {
      props: {
        vacante: null,
      },
    }
  }
}

export async function getStaticPaths() {
  const res = await axios.get(`${baseUrl}/api/vacantes?locale=es`)
  const vacantes = res.data

  const paths = vacantes?.map((vacante) => ({
    params: { vacante: vacante["path-url"] },
  }))
  return {
    paths: paths,
    fallback: true, // Set to true if you want to fallback to SSR or client-side rendering for paths that aren't generated at build time
  }
}

export default Vacante
