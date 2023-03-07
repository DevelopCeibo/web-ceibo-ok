import React from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

const Services = () => {
  const { t } = useTranslation("common")
  const quehacemos = t("quehacemos")
  const estrategia = t("estrategia")
  const estrategiaTxt = t("estrategiaTxt")
  const excelencia = t("excelencia")
  const excelenciaTxt = t("excelenciaTxt")
  const org = t("org")
  const orgTxt = t("orgTxt")
  const innovacion = t("innovacion")
  const innovacionTxt = t("innovacionTxt")
  const customereng = t("customereng")
  const customerengTxt = t("customerengTxt")
  const conocermas = t("conocermas")

  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>{quehacemos}</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="service-card-one">
                <img src="/images-ceibo/estrategia@2x.png" alt="estrategia" />
                <h3>{estrategia}</h3>
                <p>{estrategiaTxt}</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="service-card-one">
                <img
                  src="/images-ceibo/excelencia-operacional@2x.png"
                  alt="Excelencia Operacional"
                />
                <h3>{excelencia}</h3>
                <p>{excelenciaTxt}</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="service-card-one">
                {/* <i className="pe-7s-light bg-ffb700"></i> */}
                <img
                  src="/images-ceibo/organizacion@2x.png"
                  alt="Organización"
                />
                <h3>{org}</h3>
                <p>{orgTxt}</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="service-card-one">
                {/* <i className="pe-7s-phone bg-fc3549"></i> */}
                <img src="/images-ceibo/innovacion@2x.png" alt="Innovación" />
                <h3>{innovacion}</h3>
                <p>{innovacionTxt}</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="service-card-one">
                {/* <i className="pe-7s-cart bg-00d280"></i> */}
                <img
                  src="/images-ceibo/customer-engagement@2x.png"
                  alt="Customer Engagement
"
                />
                <h3>{customereng}</h3>
                <p>{customerengTxt}</p>
              </div>
            </div>

            <div className="container btn-two-container">
              <Link href="/que-hacemos/">
                <a
                  className="default-btn-two"
                  title="Leer más sobre nuestra sección Qué hacemos"
                >
                  {conocermas} <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
