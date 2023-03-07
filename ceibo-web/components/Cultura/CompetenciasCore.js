import Image from "next/image"
import React from "react"
import useTranslation from "next-translate/useTranslation"

const CompetenciasCore = () => {
  const { t } = useTranslation("common")
  const competenciasCore = t("competenciasCore")
  const competenciasCoreSubt = t("competenciasCoreSubt")
  const inspirar = t("inspirar")
  const inspirarTxt = t("inspirarTxt")
  const emprender = t("emprender")
  const emprenderTxt = t("emprenderTxt")
  const ganar = t("ganar")
  const ganarTxt = t("ganarTxt")
  const transformar = t("transformar")
  const transformarTxt = t("transformarTxt")

  return (
    <div className="pt-70 pb-100 mb-3 mt-4">
      <div className="container">
        <div className="section-title">
          <h2>{competenciasCore}</h2>
          <h5>{competenciasCoreSubt}</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-lg-3">
            <div className="ccore-card">
              <img
                src={"/images-ceibo/inspirar.png"}
                alt="inspirar"
                width={120}
                // height={120}
                // layout="intrinsic"
              />

              <div className="content">
                <h3>{inspirar}</h3>
                <p>{inspirarTxt}</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-lg-3 ">
            <div className="ccore-card">
              <img
                src="/images-ceibo/emprender.png"
                alt="emprender"
                width={120}
              />

              <div className="content">
                <h3>{emprender}</h3>
                <p>{emprenderTxt}</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-lg-3">
            <div className="ccore-card">
              <img src="/images-ceibo/ganar-2.png" alt="image" width={120} />
              {/* <Image
                src="/images-ceibo/inspirar.png"
                width={120}
                height={120}
              /> */}
              <div className="content">
                <h3>{ganar}</h3>
                <p>{ganarTxt}</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-lg-3">
            <div className="ccore-card">
              <img
                src="/images-ceibo/transformar.png"
                alt="image"
                width={120}
              />
              {/* <Image
                src="/images-ceibo/transformar.png"
                width={120}
                height={120}
              /> */}
              <div className="content">
                <h3>{transformar}</h3>
                <p>{transformarTxt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetenciasCore
