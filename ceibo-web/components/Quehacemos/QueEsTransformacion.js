import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import useTranslation from "next-translate/useTranslation"

const QueEsTransformacion = () => {
  const [toggler, setToggler] = useState(false)

  const { t } = useTranslation("common")
  const queEsTransformacion = t("queEsTransformacion")
  const queEsSubtitle = t("queEsSubtitle")
  const nuevoEscenarioSubt = t("nuevoEscenarioSubt")
  const nuevoEscenarioText = t("nuevoEscenarioText")
  const nuevasDemandasSubt = t("nuevasDemandasSubt")
  const nuevasDemandasText = t("nuevasDemandasText")
  const nuevasTecsSubt = t("nuevasTecsSubt")
  const nuevasTecsText = t("nuevasTecsText")

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=5DbtMwwlEIY"]}
      />

      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center que-hacemos-wrapper">
            <div className="col-lg-5 col-md-12">
              <h3>{queEsTransformacion}</h3>
              <h4>{queEsSubtitle}</h4>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h5>{nuevoEscenarioSubt}</h5>
                  <p>{nuevoEscenarioText}</p>
                  <br />
                  <h5>{nuevasDemandasSubt}</h5>
                  <p>{nuevasDemandasText}</p>
                  <br />

                  <h5>{nuevasTecsSubt}</h5>
                  <p>{nuevasTecsText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QueEsTransformacion
