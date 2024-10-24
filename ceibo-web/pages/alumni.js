import React from "react"
import NavbarTwo from "../components/Layouts/NavbarTwo"
import NavbarFive from "../components/Layouts/NavbarFive"
import Footer from "../components/Layouts/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Input, FormControl, InputLabel, Stack } from "@mui/material"
import Head from "next/head"
import FooterCeiboGrowth from "../components/Layouts/FooterCeiboGrowth"

const alumni = () => {
  const handleSubmit = () => {
    console.log("")
  }

  return (
    <>
      <Head>
        <title>Alumni - Ceibo Digital</title>
        <meta name="googlebot" content="noindex" />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle="Alumni"
        BGImage={null}
        bgcolor="#10113E"
        // subtitle={"Descubre cómo generamos valor para nuestros clientes"}
      />
      <div className="bg-fcfbfb pt-100 pb-70 casos-de-exito">
        <div className="container ">
          <Stack component="form">
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" />
            </FormControl>
            <FormControl sx={{ my: 2 }}>
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <Input id="password" type="password" />
            </FormControl>

            <div
              className="container btn-two-container mb-1"
              onClick={handleSubmit}
            >
              <a className="default-btn-two">Iniciar sesión</a>
            </div>
          </Stack>
        </div>
      </div>
      <FooterCeiboGrowth />
    </>
  )
}

export default alumni
