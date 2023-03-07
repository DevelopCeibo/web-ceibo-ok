import React from "react"
import NavbarTwo from "../components/Layouts/NavbarTwo"
import MainBanner from "../components/HomePages/StudioAgency/MainBanner"
import Services from "../components/HomePages/DefaultHome/Services"
import LatestNewsSlider from "../components/Common/LatestNewsSlider"
import Vacantes from "../components/HomePages/BusinessConsulting/Vacantes"
import Partner from "../components/Common/Partner"
import Footer from "../components/Layouts/Footer"
import OurWorks from "../components/HomePages/DefaultHomeTwo/OurWorks"
import Link from "next/link"

import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import Head from "next/head"

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
      <NavbarTwo />
      <MainBanner />
      <OurWorks />
      <Services />
      <Vacantes />
      <Partner />
      <LatestNewsSlider />

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

      <Footer />
    </>
  )
}

export default Index
