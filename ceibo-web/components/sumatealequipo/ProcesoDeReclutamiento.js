import useTranslation from "next-translate/useTranslation"
import React from "react"

const ProcesoDeReclutamiento = () => {
  const { t } = useTranslation("common")
  const proceso = t("proceso")
  const procesoTxt1 = t("procesoTxt1")
  const procesoTxt2 = t("procesoTxt2")
  const resolver = t("resolver")
  const comunicacion = t("comunicacion")
  const trabajoequipo = t("trabajoequipo")
  const desarrollo = t("desarrollo")

  return (
    <div className="pt-50 pb-0 mb-3 ">
      <div className="container">
        <div className="section-title">
          <h2>{proceso}</h2>
        </div>
        <p className="mt-5 text-center">
          {procesoTxt1}
          <br />
          <br />
          {procesoTxt2}
        </p>

        <section className="row justify-content-center mt-5">
          <article className="col-6 col-sm-4 col-lg-3">
            <div className="ccore-card">
              <img
                src="/images-ceibo/sumatealequipo/problemas.png"
                alt="image"
                width={120}
              />

              <div className="content">
                <h6>{resolver}</h6>
              </div>
            </div>
          </article>

          <article className="col-6 col-sm-4 col-lg-3 ">
            <div className="ccore-card">
              <img
                src="/images-ceibo/sumatealequipo/comunicacion.png"
                alt="image"
                width={120}
              />

              <div className="content">
                <h6>{comunicacion}</h6>
              </div>
            </div>
          </article>

          <article className="col-6 col-sm-4 col-lg-3">
            <div className="ccore-card">
              <img
                src="/images-ceibo/sumatealequipo/trabajo-equipo.png"
                alt="image"
                width={120}
              />

              <div className="content">
                <h6>{trabajoequipo}</h6>
              </div>
            </div>
          </article>

          <article className="col-6 col-sm-4 col-lg-3">
            <div className="ccore-card">
              <img
                src="/images-ceibo/sumatealequipo/desarrollo.png"
                alt="image"
                width={120}
              />

              <div className="content">
                <h6>{desarrollo}</h6>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default ProcesoDeReclutamiento
