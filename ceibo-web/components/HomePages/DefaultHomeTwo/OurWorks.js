import React from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"

const OurWorks = () => {
  const { t } = useTranslation("common")
  const transformdig = t("transformdig")
  const quienesSomos = t("quienesSomos")
  const quienesSomosTxt = t("quienesSomosTxt")
  const masInfo = t("masInfo")
  const competenciasCore = t("competenciasCore")
  const inspirar = t("inspirar")
  const inspirarTxt = t("inspirarTxt")
  const emprender = t("emprender")
  const emprenderTxt = t("emprenderTxt")
  const ganar = t("ganar")
  const ganarTxt = t("ganarTxt")
  const transformar = t("transformar")
  const transformarTxt = t("transformarTxt")
  const equipo = t("equipo")
  const equipoTxt = t("equipoTxt")

  return (
    <>
      <section className="case-studies-area ptb-100 ">
        <div className="container">
          <div className="section-title">
            <h2>{transformdig}</h2>
          </div>

          <div className="row justify-content-center">
            <section className="">
              <div className="container py-2">
                {/* <div className="h1 text-center text-dark" id="pageHeaderTitle">
                  My Cards Light
                </div> */}

                {/* <article className="postcard light red"> */}
                <article className="postcard aqua">
                  <a className="postcard__img_link" href="#">
                    <Image
                      width={700}
                      height={400}
                      layout="intrinsic"
                      className="postcard__img"
                      src="/images-ceibo/Inicio-quienes somos.jpeg"
                      alt="Image Title"
                    />
                  </a>
                  <div className="postcard__text t-dark aqua">
                    <h1 className="postcard__title blue">
                      {/* <a
                        href="/cultura"
                        title="Leer más sobre nuestra sección de cultura"
                      > */}
                      {quienesSomos}
                      {/* </a> */}
                    </h1>

                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">
                      {quienesSomosTxt}
                    </div>
                    <ul className="postcard__tagbox">
                      <Link
                        href="/cultura"
                        title="Leer más sobre nuestra sección de cultura"
                      >
                        <a
                          className="btn btn btn-primary-transparent"
                          title="Leer más sobre nuestra sección de cultura"
                        >
                          {masInfo}{" "}
                        </a>
                      </Link>
                    </ul>
                  </div>
                </article>
                <article className="postcard light red">
                  <a className="postcard__img_link" href="#">
                    <Image
                      width={700}
                      height={400}
                      layout="intrinsic"
                      className="postcard__img"
                      src="/images-ceibo/Inicio-competencias core.jpeg"
                      alt="Image Title"
                    />
                  </a>
                  <div className="postcard__text t-dark purple">
                    <h1 className="postcard__title red">{competenciasCore}</h1>

                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">
                      <ul className="competencias-core-text">
                        <li>
                          <b>{inspirar}:</b> {inspirarTxt}
                        </li>
                        <li>
                          <b>{emprender}:</b> {emprenderTxt}
                        </li>
                        <li>
                          <b>{ganar}:</b> {ganarTxt}
                        </li>
                        <li>
                          <b>{transformar}:</b> {transformarTxt}
                        </li>
                      </ul>
                    </div>
                    <ul className="postcard__tagbox">
                      <Link href="/cultura">
                        <a
                          className="btn btn btn-primary-transparent"
                          title="Leer más sobre nuestra sección de cultura"
                        >
                          {masInfo}{" "}
                        </a>
                      </Link>
                    </ul>
                  </div>
                </article>
                <article className="postcard light red">
                  <a className="postcard__img_link" href="#">
                    <Image
                      width={700}
                      height={400}
                      layout="intrinsic"
                      className="postcard__img"
                      src="/images-ceibo/Inicio-equipo.jpeg"
                      alt="Image Title"
                    />
                  </a>
                  <div className="postcard__text t-dark aqua">
                    <h1 className="postcard__title green">{equipo}</h1>
                    <div className="postcard__bar"></div>
                    <div className="postcard__preview-txt">{equipoTxt}</div>
                    <ul className="postcard__tagbox">
                      <Link href="#sumatealequipo">
                        <a
                          className="btn btn-primary-transparent"
                          title="Sumate al equipo"
                        >
                          {masInfo}{" "}
                        </a>
                      </Link>
                    </ul>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurWorks
