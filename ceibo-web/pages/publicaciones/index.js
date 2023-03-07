import React from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/Footer"
import Link from "next/link"
import BlogGridThree from "../../components/Blog/BlogGridThree"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"

const Publicaciones = () => {
  const { t } = useTranslation("common")
  const publicacionesh1 = t("publicacionesh1")
  const publicacionesh2 = t("publicacionesh2")
  const publicacionesTitleTag = t("publicacionesTitleTag")
  const publicacionesMetaDesc = t("publicacionesMetaDesc")

  return (
    <>
      <Head>
        <title>{publicacionesTitleTag}</title>
        <meta name="description" content={publicacionesMetaDesc} />{" "}
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={publicacionesh1}
        subtitle={publicacionesh2}
        BGImage={"/images-ceibo/Banner-publicaciones.jpg"}
        // bgcolor="#b72837"
      />
      <div className="bg-fcfbfb pt-100 pb-70 casos-de-exito">
        {/* <div className="container ">asd</div> */}
        <BlogGridThree />
      </div>
      <Footer />
    </>
  )
}

export default Publicaciones
