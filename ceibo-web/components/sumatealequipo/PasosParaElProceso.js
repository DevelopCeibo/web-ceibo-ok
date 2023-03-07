import React from "react"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const PasosParaElProceso = () => {
  const { locale } = useRouter()

  const { t } = useTranslation("common")
  const pasosproceso = t("pasosproceso")
  const paso1Subt = t("paso1Subt")
  const paso1Txt = t("paso1Txt")
  const paso2Subt = t("paso2Subt")
  const paso2Txt = t("paso2Txt")
  const paso3Subt = t("paso3Subt")
  const paso3Txt = t("paso3Txt")
  const paso4Subt = t("paso4Subt")
  const paso4Txt = t("paso4Txt")
  const paso5Subt = t("paso5Subt")
  const paso5Txt = t("paso5Txt")
  const paso6Subt = t("paso6Subt")
  const paso6Txt = t("paso6Txt")

  const [pasosContent, setpasosContent] = React.useState({
    title: paso1Subt,
    subtitle: `${locale == "es" ? "Paso" : "Step"} 1`,
    detail: paso1Txt,
  })

  return (
    <div className="pt-70 pb-100 mb-1 mt-4">
      <div className="container ">
        <div className="section-title sumatealequipo">
          <h3>{pasosproceso}</h3>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-6 col-md-4 col-sm-3 col-lg-2">
            <div
              className="ccore-card"
              onClick={() =>
                setpasosContent({
                  title: paso1Subt,
                  subtitle: `${locale == "es" ? "Paso" : "Step"} 1`,
                  detail: paso1Txt,
                })
              }
            >
              <img
                src="/images-ceibo/sumatealequipo/paso-01.png"
                alt="image"
                width={140}
              />

              <div className="content">
                <h6>{locale == "es" ? "Paso" : "Step"} 1</h6>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-sm-3 col-lg-2 ">
            <div
              className="ccore-card"
              onClick={() =>
                setpasosContent({
                  title: paso2Subt,
                  subtitle: `${locale == "es" ? "Paso" : "Step"} 2`,
                  detail: paso2Txt,
                })
              }
            >
              <img
                src="/images-ceibo/sumatealequipo/paso-02.png"
                alt="image"
                width={140}
              />

              <div className="content">
                <h6>{locale == "es" ? "Paso" : "Step"} 2</h6>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-sm-3 col-lg-2">
            <div
              className="ccore-card"
              onClick={() =>
                setpasosContent({
                  title: paso3Subt,
                  subtitle: `${locale == "es" ? "Paso" : "Step"} 3`,
                  detail: paso3Txt,
                })
              }
            >
              <img
                src="/images-ceibo/sumatealequipo/paso-03.png"
                alt="image"
                width={140}
              />

              <div className="content">
                <h6>{locale == "es" ? "Paso" : "Step"} 3</h6>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-sm-3 col-lg-2">
            <div
              className="ccore-card"
              onClick={() =>
                setpasosContent({
                  title: paso4Subt,
                  subtitle: `${locale == "es" ? "Paso" : "Step"} 4`,
                  detail: paso4Txt,
                })
              }
            >
              <img
                src="/images-ceibo/sumatealequipo/paso-04.png"
                alt="image"
                width={140}
              />

              <div className="content">
                <h6>{locale == "es" ? "Paso" : "Step"} 4</h6>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-sm-3 col-lg-2">
            <div
              className="ccore-card"
              onClick={() =>
                setpasosContent({
                  title: paso5Subt,
                  subtitle: `${locale == "es" ? "Paso" : "Step"} 5`,
                  detail: paso5Txt,
                })
              }
            >
              <img
                src="/images-ceibo/sumatealequipo/paso-05.png"
                alt="image"
                width={140}
              />

              <div className="content">
                <h6> {locale == "es" ? "Paso" : "Step"} 5</h6>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-sm-3 col-lg-2">
            <div
              className="ccore-card"
              onClick={() =>
                setpasosContent({
                  title: paso6Subt,
                  subtitle: `${locale == "es" ? "Paso" : "Step"} 6`,
                  detail: paso6Txt,
                })
              }
            >
              <img
                src="/images-ceibo/sumatealequipo/paso-06.png"
                alt="image"
                width={140}
              />

              <div className="content">
                <h6>{locale == "es" ? "Paso" : "Step"} 6</h6>
              </div>
            </div>
          </div>

          <section className="d-flex row mt-5">
            <article className="col-12 col-sm-12 col-md-4 pasos">
              <h4> {pasosContent.subtitle}</h4>
              <h2>{pasosContent.title}</h2>
            </article>
            <article className="col-12 col-sm-12 col-md-8 pt-4">
              <p>{pasosContent.detail}</p>
            </article>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PasosParaElProceso
