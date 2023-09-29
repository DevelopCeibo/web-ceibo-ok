import React from "react";
import Head from "next/head";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import GptwCultura2 from "../../../components/About/GptwCultura2";
import CompetenciasCore from "../../../components/Cultura/CompetenciasCore";
import VidaEnCeiboQuotesSwiper from "../../../components/sumatealequipo/vida-en-ceibo/VidaEnCeiboQuotesSwiper";
import Adn from "../../../components/sumatealequipo/vida-en-ceibo/Adn";
import VidaEnCeiboCarruselVideos from "../../../components/sumatealequipo/vida-en-ceibo/VidaEnCeiboCarruselVideos";
import PeopleWorth from "../../../components/sumatealequipo/vida-en-ceibo/PeopleWorth";
import useTranslation from "next-translate/useTranslation";
import VidaEnCeiboInstagramFeed from "../../../components/sumatealequipo/vida-en-ceibo/VidaEnCeiboInstagramFeed";
const index = () => {
  const { t } = useTranslation("common");
  const sumateMetaDesc = t("sumateMetaDesc");
  const h1 = t("vidaEnCeibo");
  const h2 = t("vidaEnCeiboh2");

  return (
    <>
      <Head>
        <title>{h1}</title>
        <meta name="description" content={sumateMetaDesc} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={h1}
        subtitle={h2}
        BGImage="/images-ceibo/Banner-vida-en-ceibo.jpg"
      />
      <GptwCultura2 />
      <VidaEnCeiboQuotesSwiper />
      <Adn />
      <VidaEnCeiboCarruselVideos />
      <CompetenciasCore />
      <PeopleWorth />
      <VidaEnCeiboInstagramFeed />
      <Footer />
    </>
  );
};

export default index;
