import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"

// images
import culturaImg from "../../public/images-ceibo/cultura-digital.jpg"
// images

const AboutContent = () => {
  const [toggler, setToggler] = useState(false)

  const { t } = useTranslation("common")
  const expertos = t("expertos")
  const expertosFirstP = t("expertosFirstP")
  const expertosSecondP = t("expertosSecondP")
  const expertosThirdP = t("expertosThirdP")
  const expertosForthP = t("expertosForthP")
  const expertosFiveP = t("expertosFiveP")

  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=5DbtMwwlEIY"]}
      /> */}

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={culturaImg}
                  alt="image"
                  className="rounded-10"
                  width={1}
                  height={1}
                  layout="responsive"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h3>{expertos}</h3>
                  <br />

                  <p>
                    <b>{expertosFirstP}</b>
                    {expertosSecondP}
                  </p>
                  <br />
                  <p>
                    {expertosThirdP}
                    <b>{expertosForthP}</b> {expertosFiveP}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent
