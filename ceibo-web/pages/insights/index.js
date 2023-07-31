import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import BlogGridThree from "../../components/Blog/BlogGridThree";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Hightlight from "../../components/Insights/Highlight";

const Insights = () => {
  const { t } = useTranslation("common");
  const insightsh1 = t("insightsh1");
  const insightsh2 = t("insightsh2");
  const insightsTitleTag = t("insightsTitleTag");
  const insightsMetaDesc = t("insightsMetaDesc");
  const lastInsights = t("lastInsights");

  return (
    <>
      <Head>
        <title>{insightsTitleTag}</title>
        <meta name="description" content={insightsMetaDesc} />{" "}
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={insightsh1}
        subtitle={insightsh2}
        BGImage={"/images-ceibo/Banner-insights.jpeg"}
      />
      <Hightlight />
      <div className="container">
        <h2 className="insights">{lastInsights}</h2>
      </div>
      <div className="pb-70 casos-de-exito">
        <BlogGridThree section={"insights"} />
      </div>
      <Footer />
    </>
  );
};

export default Insights;
