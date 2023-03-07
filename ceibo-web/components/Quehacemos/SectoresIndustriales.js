import React from "react"
import Image from "next/image"

import useTranslation from "next-translate/useTranslation"

const SectoresIndustriales = () => {
  const { t } = useTranslation("common")
  const sectoresIndustriales = t("sectoresIndustriales")
  const sectoresFinancieros = t("sectoresFinancieros")
  const agro = t("agro")
  const industria = t("industria")
  const logistica = t("logistica")
  const consumoMasivo = t("consumoMasivo")
  const media = t("media")
  const mineria = t("mineria")
  const retail = t("retail")
  const salud = t("salud")
  const tech = t("tech")

  return (
    <section className="case-studies-area mt-5 pb-70">
      <div className="container sectores-industriales">
        <div className="section-title">
          <h2>{sectoresIndustriales}</h2>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-wrap ">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/financieros2.png"
            />
            <h6>{sectoresFinancieros}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/agro.png"
            />
            <h6>{agro}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/industria.png"
            />
            <h6>{industria}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/logisticas.png"
            />
            <h6>{logistica}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/masivo.png"
            />
            <h6>{consumoMasivo}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/media.png"
            />
            <h6>{media}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/mineria.png"
            />
            <h6>{mineria}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/retail.png"
            />
            <h6>{retail}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/salud.png"
            />
            <h6>{salud}</h6>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center mt-5">
            <Image
              width={90}
              height={90}
              layout="fixed"
              src="/images-ceibo/sectores/tecnologia.png"
            />
            <h6>{tech}</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectoresIndustriales
