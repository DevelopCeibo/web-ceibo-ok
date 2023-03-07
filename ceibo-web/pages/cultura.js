import React from "react"
import NavbarTwo from "../components/Layouts/NavbarTwo"
import PageBanner from "../components/Common/PageBanner"
import AboutContent from "../components/About/AboutContent"
import GptwCultura from "../components/About/GptwCultura"
import CompetenciasCore from "../components/Cultura/CompetenciasCore"
import ComoNosOrganizamos from "../components/Cultura/ComoNosOrganizamos"
import Feedback from "../components/Common/Feedback"
import Footer from "../components/Layouts/Footer"
import Conocenos from "../components/Cultura/Conocenos"
import SwiperFeedback from "../components/Cultura/swiperfeedback"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const Aabout = () => {
  const { locale } = useRouter()

  const { t } = useTranslation("common")
  const culturaTitle = t("culturaTitle")
  const contactanos = t("contactanos")
  const culturah1 = t("culturah1")
  const culturah2 = t("culturah2")
  const culturaTitleTag = t("culturaTitleTag")
  const culturaMetaDesc = t("culturaMetaDesc")
  return (
    <>
      <Head>
        <title>{culturaTitleTag}</title>
        <meta name="description" content={culturaMetaDesc} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={culturah1}
        subtitle={culturah2}
        BGImage="/images-ceibo/Cultura-cultura-digital.jpeg"
        textcenter={true}
      />
      <AboutContent />
      <GptwCultura />
      {/* <Feedback /> */}
      <CompetenciasCore />
      <ComoNosOrganizamos />
      <SwiperFeedback />
      <Conocenos />
      <div className="container btn-two-container mb-5">
        <a
          className="default-btn-two"
          href={`/${locale == "en" && "en/"}contacto`}
        >
          {contactanos}
        </a>
      </div>
      <Footer />
    </>
  )
}

export default Aabout
