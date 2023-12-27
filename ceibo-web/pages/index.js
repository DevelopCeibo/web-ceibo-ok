import React from "react"
import NavbarFive from "../components/Layouts/NavbarFive"
import MainBanner from "../components/HomePages/StudioAgency/MainBanner"
import Services from "../components/HomePages/DefaultHome/Services"
import LatestNewsSlider from "../components/Common/LatestNewsSlider"
import SuccessStoriesSlider from "../components/Common/SuccessStoriesSlider"
import Vacantes from "../components/HomePages/BusinessConsulting/Vacantes"
import Partner from "../components/Common/Partner"
import Footer from "../components/Layouts/Footer"
import OurWorks from "../components/HomePages/DefaultHomeTwo/OurWorks"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import Head from "next/head"
import QuienesSomos from "../components/HomePages/DefaultHome/QuienesSomos"
import QueHacemos from "../components/HomePages/DefaultHome/QueHacemos"
import ComoAyudamosANuestrosClientes from "../components/HomePages/DefaultHome/ComoAyudamosANuestrosClientes"
import Contacto from "../components/HomePages/DefaultHome/Contacto"
import TrendingInsights from "../components/HomePages/DefaultHome/TrendingInsights"
import Publicacion from "../components/HomePages/DefaultHome/Publicacion"
import QuienesHacenEstoPosible from "../components/HomePages/DefaultHome/QuienesHacenEstoPosible"
import BusquedasAbiertas from "../components/HomePages/DefaultHome/BusquedasAbiertas"
import Webinar from "../components/HomePages/DefaultHome/Webinar"
import DondeEstamos from "../components/HomePages/DefaultHome/DondeEstamos"
import Hightlight from "../components/Insights/Highlight"


const Index = () => {
  const { locale, locales, push } = useRouter()

  const { t } = useTranslation("common")
  const donde = t("donde-estamos")
  const contactanos = t("contactanos")
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
      <Partner />
      <Contacto />
      <TrendingInsights />
      <Publicacion />
      <QuienesHacenEstoPosible />
      <BusquedasAbiertas />
      <Webinar />
      <DondeEstamos />
      {/*
      <Partner />
      <SuccessStoriesSlider />
      <LatestNewsSlider type={'publicaciones'} />
      <Vacantes />
      
      <div className="pb-70">
      <div className="container">
      <div className="section-title">
      <h2>{donde}</h2>
      </div>
      
      <img
      // src="/images-ceibo/mapa-ubicacion@2x.png"
      src={
        locale == "es"
        ? "/images-ceibo/mapa-ubicacion@2x.png"
        : "/images-ceibo/Dondeestamos_ingle.png"
      }
      alt="ubicación de las oficinas de ceibo"
      />
      </div>
      <div className="container btn-two-container">
      <Link href="/contacto/">
      <a className="default-btn-two">
      {contactanos} <i className="fas fa-chevron-down"></i>
      </a>
      </Link>
      </div>
      </div>
      */
        <Footer />}
    </>
  )
}

export default Index
