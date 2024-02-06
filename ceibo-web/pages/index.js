import React from "react"
import NavbarFive from "../components/Layouts/NavbarFive"
import MainBanner from "../components/HomePages/StudioAgency/MainBanner"
import Services from "../components/HomePages/DefaultHome/Services"
import Partner from "../components/Common/Partner"
import Footer from "../components/Layouts/Footer"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"
import QuienesSomos from "../components/HomePages/DefaultHome/QuienesSomos"
import ComoAyudamosANuestrosClientes from "../components/HomePages/DefaultHome/ComoAyudamosANuestrosClientes"
import Contacto from "../components/HomePages/DefaultHome/Contacto"
import TrendingInsights from "../components/HomePages/DefaultHome/TrendingInsights"
import Publicacion from "../components/HomePages/DefaultHome/Publicacion"
import QuienesHacenEstoPosible from "../components/HomePages/DefaultHome/QuienesHacenEstoPosible"
import BusquedasAbiertas from "../components/HomePages/DefaultHome/BusquedasAbiertas"
import Webinar from "../components/HomePages/DefaultHome/Webinar"
import DondeEstamos from "../components/HomePages/DefaultHome/DondeEstamos"

const Index = () => {

  const { t } = useTranslation("common")
  const homeTitle = t("homeTitle")
  const homeMetaDesc = t("homeMetaDesc")

  return (
    <>
      <Head>
        <title>{homeTitle}</title>
        <meta name="description" content={homeMetaDesc} />
      </Head>
      <NavbarFive />
      <MainBanner />
      <QuienesSomos />
      <Services />
      <ComoAyudamosANuestrosClientes />
      {/* <Partner /> */}
      <Contacto />
      <TrendingInsights />
      {/* <Publicacion /> */}
      <QuienesHacenEstoPosible />
      <BusquedasAbiertas />
      {/* <Webinar /> */}
      <DondeEstamos />
      <Footer />
    </>
  )
}

export default Index
