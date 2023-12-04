import React from "react";
import Head from "next/head";
import NavbarFive from "../../../components/Layouts/NavbarFive";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import PasosParaElProceso from "../../../components/sumatealequipo/PasosParaElProceso";
import NuestroProceso from "../../../components/sumatealequipo/proceso-de-reclutamiento/NuestroProceso";
import ComoPrepararse from "../../../components/sumatealequipo/proceso-de-reclutamiento/ComoPrepararse/index";
import useTranslation from "next-translate/useTranslation";
import { RoleTypeProvider } from "../../context/roleType";
const index = () => {
  const { t } = useTranslation("common");
  const h1 = t("proceso");
  const h2 = t("sumateh2");
  const metaDescription = t("carreraEnCeiboMetaDescription");

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
      <RoleTypeProvider>

        <NuestroProceso />
        <PasosParaElProceso />
        <ComoPrepararse />

      </RoleTypeProvider>
      <Footer />
    </>
  );
};

export default index;
