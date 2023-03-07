import React from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import PageBanner from "../../components/Common/PageBanner"
import Sumate from "../../components/sumatealequipo/Sumate"
import CarreraEnCeibo from "../../components/sumatealequipo/CarreraEnCeibo"
import FeedbackSumate from "../../components/sumatealequipo/FeedbackSumate"
import ProcesoDeReclutamiento from "../../components/sumatealequipo/ProcesoDeReclutamiento"
import PasosParaElProceso from "../../components/sumatealequipo/PasosParaElProceso"
import CaseInterviews from "../../components/sumatealequipo/CaseInterviews"
import Footer from "../../components/Layouts/Footer"
import BusquedasVigentes from "../../components/sumatealequipo/BusquedasVigentes"
import Head from "next/head"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

const sumatealequipo = () => {
  const { t } = useTranslation("common")
  const quebuscamos = t("quebuscamos")
  const sumateAlEquipo = t("sumateAlEquipo")
  const quebuscamosTxt = t("quebuscamosTxt")
  const queofrecemos = t("queofrecemos")
  const queofrecemosTxt = t("queofrecemosTxt")

  const sumateh1 = t("sumateh1")
  const sumateh2 = t("sumateh2")
  const sumateTitleTag = t("sumateTitleTag")
  const sumateMetaDesc = t("sumateMetaDesc")

  return (
    <>
      <Head>
        <title>{sumateTitleTag}</title>
        <meta name="description" content={sumateMetaDesc} />
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={sumateh1}
        subtitle={sumateh2}
        BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
      />
      <div className="sumatealequipo">
        <Sumate />

        <section className="container mt-5 pt-5">
          <article className="d-flex row align-items-center justify-content-between">
            <div className="col-12 col-md-8 col-sm-8">
              <h2>{quebuscamos}</h2>
              <p>{quebuscamosTxt}</p>
            </div>
            <div
              className="col-12 col-md-4 col-sm-4 d-flex pt-3 sm-justify-content-between"
              // style={{ padding: "20px 0 0 20px" }}
            >
              <Image
                src="/images-ceibo/sumatealequipo/ofertas-de-empleo-en-tecnologia.jpg"
                width={250}
                height={250}
                layout="intrinsic"
                alt="imagen del equipo de ceibo"
              />
            </div>
          </article>

          <article className="d-flex flex-column-reverse flex-sm-row align-items-center justify-content-between ">
            <div
              className="col-12 col-md-4 col-sm-4 mr-4  d-flex pt-3 "
              // style={{ padding: "20px 20px 0 0" }}
            >
              <Image
                src="/images-ceibo/sumatealequipo/Trabaja-en-Ceibo-digital.jpg"
                width={250}
                height={250}
                layout="intrinsic"
                alt="imagen del equipo de ceibo"
              />
            </div>
            <div className="col-12 col-md-8 col-sm-8">
              <h2>{queofrecemos}</h2>
              <p>{queofrecemosTxt}</p>
            </div>
          </article>
        </section>
      </div>

      <CarreraEnCeibo />
      <ProcesoDeReclutamiento />
      <PasosParaElProceso />
      <CaseInterviews />
      <BusquedasVigentes />
      <Footer />
    </>
  )
}

export default sumatealequipo
