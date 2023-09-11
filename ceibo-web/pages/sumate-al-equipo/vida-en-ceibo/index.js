import React from "react";
import Head from "next/head";
import NavbarFive from '../../../components/Layouts/NavbarFive';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/Layouts/Footer';
import GptwCultura2 from '../../../components/About/GptwCultura2';
import CompetenciasCore from "../../../components/Cultura/CompetenciasCore";
import VidaEnCeiboQuotesSwiper from '../../../components/sumatealequipo/vida-en-ceibo/VidaEnCeiboQuotesSwiper';
import Adn from '../../../components/sumatealequipo/vida-en-ceibo/Adn';
import VidaEnCeiboCarruselVideos from '../../../components/sumatealequipo/vida-en-ceibo/VidaEnCeiboCarruselVideos';
import PeopleWorth from '../../../components/sumatealequipo/vida-en-ceibo/PeopleWorth';
import useTranslation from "next-translate/useTranslation";

const index = () => {
  const { t } = useTranslation("common");
  const sumateTitleTag = t("sumateTitleTag");
  const sumateMetaDesc = t("sumateMetaDesc");
   const sumateh1 = t("sumateh1");
  const sumateh2 = t("sumateh2");
  
  return (
    <>
      <Head>
        <title>{sumateTitleTag}</title>
        <meta name="description" content={sumateMetaDesc} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={sumateh1}
        subtitle={sumateh2}
        BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
      />
      <GptwCultura2 />
      <VidaEnCeiboQuotesSwiper />
      <Adn />
      <VidaEnCeiboCarruselVideos />
      <CompetenciasCore />
      <PeopleWorth />

      {/* componente de redes sociales */}

      <Footer />
    </>
  );
};

export default index;
