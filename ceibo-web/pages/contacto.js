import React from "react"
import NavbarTwo from "../components/Layouts/NavbarTwo"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import Newsletter from "../components/Common/Newsletter"
import Footer from "../components/Layouts/Footer"
import Head from "next/head"
import useTranslation from "next-translate/useTranslation"

const Contact = () => {
  const { t } = useTranslation("common")
  const contacto = t("contacto")

  const contactoh1 = t("contactoh1")
  const contactoh2 = t("contactoh2")
  const contactoTitleTag = t("contactoTitleTag")
  const contactoMetaDesc = t("contactoMetaDesc")

  return (
    <>
      <Head>
        <title>{contactoTitleTag}</title>
        <meta name="description" content={contactoMetaDesc} />{" "}
      </Head>
      <NavbarTwo />

      <PageBanner
        pageTitle={contactoh1}
        subtitle={contactoh2}
        BGImage="/images-ceibo/Banner-seccion-contacto.jpeg"
      />

      {/* <ContactInfo /> */}

      <ContactForm />

      <div className="ptb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  )
}

export default Contact
