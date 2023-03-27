import React from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import vacantes from "../../../utils/vacantes.json"

const Vacantes = () => {
  const { t } = useTranslation("common")
  const sumateAlEquipo = t("sumateAlEquipo")
  const dataScientist = t("dataScientist")
  const manager = t("manager")
  const consultant = t("consultant")
  const vermas = t("vermas")
  const mirarbusquedas = t("mirarbusquedas")
  const uniteaceibo = t("uniteaceibo")

  let vacantesHome = vacantes.slice(0, 3)
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container" id="sumatealequipo">
          <div className="section-title">
            <h2>{sumateAlEquipo}</h2>
          </div>

          <div className="row justify-content-center">
            {vacantesHome.map((vac, i) => {
              return (
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={i}>
                  <div className="bc-post-item card-vacantes">
                    <div
                      className="post-image"
                      style={{
                        backgroundImage: `url(
                        ${vac.image}
                      )`,
                      }}
                    ></div>

                    <div className="post-content">
                      <div className="post-text">
                        <h6>{vac.title}</h6>
                        <p>{vac.id == "1" && dataScientist}</p>
                        <p>{vac.id == "2" && manager}</p>
                        <p>{vac.id == "3" && consultant}</p>
                      </div>
                      {/* <Link
                        href={`/sumate-al-equipo/${vac["path-url"]}`}
                        passHref
                      >
                        <a className="link-btn link-btn-vacantes">
                          {vermas} <i className="fas fa-chevron-right"></i>
                        </a>
                      </Link> */}
                      <Link href={`/sumate-al-equipo/${vac["path-url"]}`}>
                        <a className="read-more-btn">
                          {vermas} <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}

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
              <Link href="/sumate-al-equipo">
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
