import React from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import NavbarFive from "../../components/Layouts/NavbarFive"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/Footer"
import Link from "next/link"
import BlogGridThree from "../../components/Blog/BlogGridThree"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"
import FooterCeiboGrowth from "../../components/Layouts/FooterCeiboGrowth"

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
      <NavbarFive />
      <PageBanner
        pageTitle={publicacionesh1}
        subtitle={publicacionesh2}
        BGImage={"/images-ceibo/Banner-publicaciones.jpg"}
        // bgcolor="#10113E"
      />
      <div className="bg-fcfbfb pt-100 pb-70 casos-de-exito">
        {/* <div className="container ">asd</div> */}
        <BlogGridThree section={'publicaciones'}/>
      </div>
      <FooterCeiboGrowth />
    </>
  )
}

export default Publicaciones
