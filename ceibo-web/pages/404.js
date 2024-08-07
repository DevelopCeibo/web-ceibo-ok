import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import NavbarFive from "../components/Layouts/NavbarFive"
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";
import FooterCeiboGrowth from "../components/Layouts/FooterCeiboGrowth";

const Error = () => {
  return (
    <>
      <NavbarFive />

      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

      <ErrorContent />

      <FooterCeiboGrowth />
    </>
  );
};

export default Error;
