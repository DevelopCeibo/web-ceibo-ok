import React from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

const Vacantes = () => {
  const { t } = useTranslation("common")
  const sumateAlEquipo = t("sumateAlEquipo")
  const dataScientist = t("dataScientist")
  const manager = t("manager")
  const consultant = t("consultant")
  const vermas = t("vermas")
  const mirarbusquedas = t("mirarbusquedas")
  const uniteaceibo = t("uniteaceibo")
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container" id="sumatealequipo">
          <div className="section-title">
            <h2>{sumateAlEquipo}</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="bc-post-item card-vacantes">
                <Link href="/sumate-al-equipo/data-scientist/">
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url(
                        /images-ceibo/ceibo-team-2.jpg
                      )`,
                    }}
                  >
                    {/* <a className="d-block">
                      <img src="/images-ceibo/ceibo-team-2.jpg" alt="image" />
                    </a> */}
                  </div>
                </Link>

                <div className="post-content">
                  <div className="post-text">
                    <h3>Data scientist</h3>
                    <p>{dataScientist}</p>
                  </div>
                  <Link href="/sumate-al-equipo/data-scientist/">
                    <a className="link-btn link-btn-vacantes">
                      {vermas} <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="bc-post-item card-vacantes">
                <div
                  className="post-image"
                  style={{
                    backgroundImage: `url(
                        /images-ceibo/manager-1.jpg
                      )`,
                  }}
                ></div>
                <div className="post-content">
                  <div className="post-text">
                    <h3>Manager</h3>
                    <p>{manager}</p>
                  </div>
                  <Link href="/sumate-al-equipo/manager/">
                    <a className="link-btn link-btn-vacantes">
                      {vermas} <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="bc-post-item card-vacantes">
                <div
                  className="post-image"
                  style={{
                    backgroundImage: `url(
                        /images-ceibo/senior-consultant.jpeg
                      )`,
                  }}
                ></div>
                <div className="post-content">
                  <div className="post-text">
                    <h3>Consultant - Project Leader</h3>
                    <p>{consultant}</p>
                  </div>
                  <Link href="/sumate-al-equipo/senior-consultant/">
                    <a className="link-btn link-btn-vacantes">
                      {vermas}
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="bc-post-item card-vacantes card-vacantes-verbusquedas">
                <Link href="/sumate-al-equipo/#busquedas-vigentes">
                  <div className="post-content">
                    <h2>{mirarbusquedas}</h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="container btn-two-container">
              <Link href="/sumate-al-equipo/">
                <a className="default-btn-two" title="Vacantes en Ceibo">
                  {uniteaceibo} <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vacantes
