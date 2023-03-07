import React from "react"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

const TecnologiasQueUsamos = () => {
  const { t } = useTranslation("common")
  const tecnologiasUsamos = t("tecnologiasUsamos")

  return (
    <section className="case-studies-area mt-5 pb-70">
      <div className="container sectores-industriales">
        <div className="section-title">
          <h2>{tecnologiasUsamos}</h2>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-10">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/IMG_3583.PNG"
              alt="Acoustic"
              width={140}
              height={"100%"}
              // layout="intrinsic"
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/metlwater.PNG"
              width={140}
              height={"100%"}
              alt="Meltwater"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/adobe.PNG"
              alt="Adobe"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/amazon.PNG"
              alt="Amazon"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/pipefy.PNG"
              alt="Pipefy"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/Bizagi.png"
              alt="Bizagi"
              width={100}
              height={50}
              // height={"100%"}
              layout="intrinsic"
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/cloudera.JPG"
              alt="Cloudera"
              width={220}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/monday.PNG"
              alt="Monday"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/drupal.PNG
            "
              alt="Drupal"
              width={160}
              // height={60}
              // height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/google.JPG"
              alt="Google"
              width={160}
              // height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/hootsuite.PNG"
              alt="Hootsuite"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/hubspot.PNG"
              alt="Hubspot"
              width={140}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/ibm.JPG"
              alt="Ibm"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/infobip.PNG"
              alt="Infobip"
              width={140}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <Image
              src="/images-ceibo/tecnologias/microsoft.JPG"
              alt="Microsoft"
              width={300}
              height={"100%"}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/micros.PNG"
              alt="MicroStrategy"
              width={180}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/oracle.JPG"
              alt="Oracle"
              width={140}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/salesforce.PNG"
              alt="Salesforce"
              width={140}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/sap.PNG"
              alt="Sap"
              width={140}
              className="img-grey"
            />
          </div>{" "}
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/sas.png"
              alt="Sas"
              width={140}
              className="img-grey"
            />
          </div>{" "}
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/sugarcrm.PNG"
              alt="Sugar CRM"
              width={250}
              className="img-grey"
            />
          </div>{" "}
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/tableau.PNG"
              alt="Tableau"
              width={200}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/teradata.PNG"
              alt="Teradata"
              width={140}
              className="img-grey"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center mt-5">
            <img
              src="/images-ceibo/tecnologias/IMG_3586.PNG"
              alt="Twilio"
              width={140}
              className="img-grey"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TecnologiasQueUsamos
