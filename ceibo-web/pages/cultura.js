import React from "react";
import Link from "next/link";
import NavbarFive from "../components/Layouts/NavbarFive";
import PageBanner from "../components/Common/PageBanner";
import GptwCultura from "../components/About/GptwCultura";
import GptwCultura2 from '../components/About/GptwCultura2'
import CompetenciasCore from "../components/Cultura/CompetenciasCore";
import Footer from "../components/Layouts/Footer";
import Conocenos from "../components/Cultura/Conocenos";
import PorQueNaceCeibo from "../components/Cultura/PorQueNaceCeibo";
import QueNosHaceDiferentes from "../components/Cultura/QueNosHaceDiferentes/index";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import FooterCeiboGrowth from "../components/Layouts/FooterCeiboGrowth";

const Aabout = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");
  const culturaTitle = t("culturaTitle");
  const contactanos = t("contactanos");
  const culturah1 = t("culturah1");
  const culturah2 = t("culturah2");
  const culturaTitleTag = t("culturaTitleTag");
  const culturaMetaDesc = t("culturaMetaDesc");
  return (
    <>
      <Head>
        <title>{culturaTitleTag}</title>
        <meta name="description" content={culturaMetaDesc} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={culturah1}
        subtitle={culturah2}
        BGImage="/images-ceibo/Cultura-cultura-digital.jpeg"
        textcenter={true}
      />
      <PorQueNaceCeibo />
      <QueNosHaceDiferentes />
      {/* <GptwCultura /> */}
      <GptwCultura2 />
      {/* <Feedback /> */}
      <CompetenciasCore />

      <Conocenos />
      <div className="container btn-two-container mb-5">
        <Link href="/contacto/">
          <a className="default-btn-two">{contactanos}</a>
        </Link>
      </div>
      <FooterCeiboGrowth />
    </>
  );
};

export default Aabout;
