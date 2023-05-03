import React from "react"
import AOS from "aos"
import "../node_modules/aos/dist/aos.css"
import "../styles/bootstrap.min.css"
import "../styles/animate.min.css"
import "animate.css"
import "../styles/all.min.css"
import "../styles/pe-icon-7-stroke.css"
import "react-accessible-accordion/dist/fancy-example.css"
import "swiper/css"
import "swiper/css/bundle"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/transformaciondigital.scss"
import "../styles/software-home-page.css"
import "../styles/app-home-page.css"
import "../styles/business-consulting-home-page.css"
import "../styles/style.css"
import "../styles/responsive.css"

import Head from "next/head"
import GoTop from "../components/Layouts/GoTop"

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Transformación digital para tu empresa</title>
      </Head>

      <Component {...pageProps} />

      <GoTop />
    </>
  )
}

export default MyApp
