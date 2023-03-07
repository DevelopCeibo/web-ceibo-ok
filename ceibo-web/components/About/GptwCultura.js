import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import Link from "next/link"
import Image from "next/image"

//image
import gptwImage from "../../public/images-ceibo/Screen-Shot-GPTW.png"
import gptwStatsImage from "../../public/images-ceibo/gtpw-1536x694.png"
import gptwStatsEng from "../../public/images-ceibo/gptw-ingles.png"

import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const GptwCultura = () => {
  const [toggler, setToggler] = useState(false)
  const { locale } = useRouter()

  const { t } = useTranslation("common")
  const gptw1 = t("gptw1")
  const gptw2 = t("gptw2")
  const masGptw = t("masGptw")

  return (
    <>
      <div className="about-area">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-lg-3 col-6">
              <div className="about-image">
                <Image
                  src={gptwImage}
                  alt="image"
                  className="rounded-10"
                  width={1}
                  height={1}
                  layout="responsive"
                />

                {/* <div className="container btn-two-container">
                  <a
                    className="default-btn-two"
                    href="https://certificaciones.greatplacetowork.com.ar/ceibo-digital"
                    target="_blank"
                  >
                    Conoce más sobre la certificación de Ceibo en Great Place To
                    Work
                  </a>
                </div> */}
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>Great Place to Work</h2>
                </div>
                <p>{gptw1}</p>
                <blockquote>{gptw2}</blockquote>
              </div>
              <Image
                src={locale == "es" ? gptwStatsImage : gptwStatsEng}
                alt="ceibo great place to work"
                width={2}
                height={1}
                layout="responsive"
              />
            </div>
            <div className="container btn-two-container">
              <a
                // className="btn btn-primary"
                className="default-btn-two"
                href="https://certificaciones.greatplacetowork.com.ar/ceibo-digital"
                target="_blank"
              >
                {masGptw}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GptwCultura
