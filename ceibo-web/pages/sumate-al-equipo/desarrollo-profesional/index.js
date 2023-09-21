import React from "react";
import Head from "next/head";
import NavbarFive from "../../../components/Layouts/NavbarFive";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import CarreraEnCeibo from "../../../components/sumatealequipo/desarrollo-profesional/CarreraEnCeibo";
import Especializaciones from "../../../components/sumatealequipo/desarrollo-profesional/Especializaciones";
import ComoNosOrganizamos from "../../../components/Cultura/ComoNosOrganizamos";
import NavigationCardSection from "../../../components/sumatealequipo/posiciones-abiertas/NavigationCardSection";
import useTranslation from "next-translate/useTranslation";
const index = () => {
  const { t } = useTranslation("common");
  const h1 = t("carreraEnCeiboH1");
  const h2 = t("carreraEnCeiboH2");
  const metaDescription = t("carreraEnCeiboMetaDescription");
  const navigationCardSectionContentKeys = [
    "vidaEnCeiboCard",
    "entrevistasCeiboCard",
    "busquedasCeiboCard",
  ];

  return (
    <>
      <Head>
        <title>{h1}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={h1}
        subtitle={h2}
        BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
      />

      <CarreraEnCeibo />
      <Especializaciones />
      <ComoNosOrganizamos />
      <NavigationCardSection
        contentKeysArray={navigationCardSectionContentKeys}
      />
      <Footer />
    </>
  );
};

export default index;
