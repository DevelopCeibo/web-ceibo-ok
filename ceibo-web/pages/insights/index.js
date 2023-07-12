import React from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import PageBanner from "../../components/Common/PageBanner"
import Footer from "../../components/Layouts/Footer"
import Link from "next/link"
import BlogGridThree from "../../components/Blog/BlogGridThree"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"
import Hightlight from '../../components/Insights/Highlight'

const Insights = () => {
  const { t } = useTranslation("common")
  const insightsh1 = t("insightsh1")
  const insightsh2 = t("insightsh2")
  const insightsTitleTag = t("insightsTitleTag")
  const insightsMetaDesc = t("insightsMetaDesc")

  return (
    <>
      <Head>
        <title>{insightsTitleTag}</title>
        <meta name="description" content={insightsMetaDesc} />{" "}
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={insightsh1}
        subtitle={insightsh2}
        BGImage={"/images-ceibo/insights/insight-bg.jpg"}
        // bgcolor="#b72837"
      />
      <Hightlight />
      <div className="container">
        <h2 style={{marginTop: '5%', paddingLeft: '2%', color: '#b72837', fontWeight: '600', fontSize: '25px'}}>{'Ultimas publicaciones'}</h2>
        </div>
      <div className="pb-70 casos-de-exito">
        {/* <div className="container ">asd</div> */}
        <BlogGridThree section={'insights'}/>
      </div>
      <Footer />
    </>
  )
}

export default Insights