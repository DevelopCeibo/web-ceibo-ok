import React from "react";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import BusquedasVigentesCategorizado from "../../../components/sumatealequipo/BusquedasVigentesCategorizado";
import Head from "next/head";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";

import useTranslation from "next-translate/useTranslation";
import BusquedasVigentes from "../../../components/sumatealequipo/BusquedasVigentesCategorizado";

const index = () => {
  const { t } = useTranslation("common");

  const h1 = t("busquedasVigentesh1");
  const h2 = t("busquedasVigentesh2");
  const posicionesAbiertas = t("posicionesAbiertas");

  return (
    <>
      <Head>
        <title>{posicionesAbiertas}</title>
        <meta name="description" content={h2} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={h1}
        subtitle={h2}
        BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
      />
      <BusquedasVigentesCategorizado />;
      <Footer />
    </>
  );
};

export default index;
