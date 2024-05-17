import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import BusquedasVigentesCategorizado from "../../../components/sumatealequipo/posiciones-abiertas/BusquedasVigentesCategorizado";
import Head from "next/head";
import PageBanner from "../../../components/Common/PageBanner";
import useTranslation from "next-translate/useTranslation";
import NavigationCardSection from "../../../components/sumatealequipo/posiciones-abiertas/NavigationCardSection";
import FooterCeiboGrowth from "../../../components/Layouts/FooterCeiboGrowth";

const index = () => {
  const { t } = useTranslation("common");

  const h1 = t("busquedasVigentesh1");
  const h2 = t("busquedasVigentesh2");
  const busquedasAbiertas = t("busquedasAbiertas");
  const navigationCardSectionContentKeys = [
    "vidaEnCeiboCard",
    "carreraEnCeiboCard",
    "entrevistasCeiboCard",
  ];

  return (
    <>
      <Head>
        <title>{busquedasAbiertas}</title>
        <meta name="description" content={h2} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={h1}
        subtitle={h2}
        BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
      />
      <BusquedasVigentesCategorizado />
      <NavigationCardSection
        contentKeysArray={navigationCardSectionContentKeys}
      />
      <FooterCeiboGrowth />
    </>
  );
};

export default index;
