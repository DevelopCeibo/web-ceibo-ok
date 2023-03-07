import React from "react"
import NavbarTwo from "../components/Layouts/NavbarTwo"
import PageBanner from "../components/Common/PageBanner"
import Feedback from "../components/Common/Feedback"
import Footer from "../components/Layouts/Footer"
import QueEsTransformacion from "../components/Quehacemos/QueEsTransformacion"
import SectoresIndustriales from "../components/Quehacemos/SectoresIndustriales"
import TecnologiasQueUsamos from "../components/Quehacemos/Tecnologias"
import ExperienciasRelevantes from "../components/Quehacemos/Experiencias"
import AreasDeServicio from "../components/Quehacemos/AreasDeServicio"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"

const QueHacemos = () => {
  const { t } = useTranslation("common")
  const contactanos = t("contactanos")

  const quehacemosh1 = t("quehacemosh1")
  const quehacemosh2 = t("quehacemosh2")
  const quehacemosTitleTag = t("quehacemosTitleTag")
  const quehacemosMetaDesc = t("quehacemosMetaDesc")

  return (
    <>
      <Head>
        <title>{quehacemosTitleTag}</title>
        <meta name="description" content={quehacemosMetaDesc} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={quehacemosh1}
        subtitle={quehacemosh2}
        BGImage="/images/page-banner2.jpg"
        textcenter={true}
      />
      <QueEsTransformacion />

      {/* <Feedback /> */}
      <AreasDeServicio />
      <SectoresIndustriales />
      <TecnologiasQueUsamos />
      <ExperienciasRelevantes />
      <div className="container btn-two-container mb-5">
        <a className="default-btn-two" href="/contacto">
          {contactanos}
        </a>
      </div>
      <Footer />
    </>
  )
}

export default QueHacemos
