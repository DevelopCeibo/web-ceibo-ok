import React from "react";
import Head from "next/head";
import NavbarFive from "../../../components/Layouts/NavbarFive";

import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import CarreraEnCeibo from "../../../components/sumatealequipo/desarrollo-profesional/CarreraEnCeibo";
import Especializaciones from "../../../components/sumatealequipo/desarrollo-profesional/Especializaciones";
import ComoNosOrganizamos from "../../../components/Cultura/ComoNosOrganizamos";
import NavigationCardSection from "../../../components/sumatealequipo/posiciones-abiertas/NavigationCardSection";

const index = () => {
  return (
    <>
      <Head>
        <title>{"sumateTitleTag"}</title>
        <meta name="description" content={"sumateMetaDesc"} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={"sumateh1"}
        subtitle={"sumateh2"}
        BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
      />

      <CarreraEnCeibo />
      <Especializaciones />
      <ComoNosOrganizamos />
      <NavigationCardSection />
      <Footer />
    </>
  );
};

export default index;
