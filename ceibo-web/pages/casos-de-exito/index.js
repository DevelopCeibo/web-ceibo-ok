import React, { useState, useEffect } from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/Footer"
import Link from "next/link"

import casosES from "../../utils/casos-de-exito.json"
import casosEN from "../../utils/casos-de-exito-EN.json"

import Head from "next/head"
import generateUrl from "../../utils/generateUrl"
import Image from "next/image"
import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation"

const CasosDeExito = () => {
  const { t } = useTranslation("common")
  const casosExitoSubt = t("casosExitoSubt")

  const casosh1 = t("casosh1")
  const casosh2 = t("casosh2")
  const casosTitleTag = t("casosTitleTag")
  const casosMetaDesc = t("casosMetaDesc")

  const { locale } = useRouter()
  const [casos, setcasos] = useState(casosES)

  useEffect(() => {
    if (locale == "en") {
      setcasos(casosEN)
    } else {
      setcasos(casosES)
    }
  }, [locale])

  return (
    <>
      <Head>
        <title>{casosTitleTag}</title>
        <meta name="description" content={casosMetaDesc} />{" "}
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={casosh1}
        subtitle={casosh2}
        BGImage={"/images-ceibo/Banner-seccion-casos-de-exito.jpg"}
        // bgcolor="#b72837"
      />
      <div className="bg-fcfbfb pt-100 pb-70 casos-de-exito">
        <div className="container ">
          <section className="row justify-content-center">
            {casos &&
              casos.map((caso, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                      <Link href={`/casos-de-exito/${caso.id}`}>
                        <a>
                          <Image
                            src={caso?.metadata.image}
                            alt={caso?.metadata.cliente}
                            className="bg-img"
                            layout="fill"
                          />
                        </a>
                      </Link>
                      <img
                        src={caso.clientimg}
                        alt="cliente"
                        className="cliente-img-absolute"
                        style={{
                          position: "absolute",
                          width:
                            caso.metadata.clientimgType == "horizontal"
                              ? "120px"
                              : "100px",
                          height:
                            caso.metadata.clientimgType == "horizontal"
                              ? "80px"
                              : "90px",
                          zIndex: "100",
                          bottom: "10px",
                        }}
                      />
                    </div>

                    <div className="blog-post-content">
                      <span className="date">
                        {caso.metadata.tags.map((tag, index) => (
                          <Link href={`/#`} key={index}>
                            {/* <Link href={`/category/${tag}`} key={index}> */}
                            <>
                              <a>{tag}</a>
                              {index !== caso.metadata.tags.length - 1 && " | "}
                            </>
                          </Link>
                        ))}
                      </span>
                      {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                      <Link href={`/casos-de-exito/${caso.id}`}>
                        <h6>
                          <a>{caso.content[0].text}</a>
                        </h6>
                      </Link>

                      {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                      <Link href={`/casos-de-exito/${caso.id}`}>
                        <a className="read-more-btn">
                          {locale == "en"
                            ? "Read success storie"
                            : "Leer caso de éxito"}
                          <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CasosDeExito
