import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Especializaciones = () => {
  const { t } = useTranslation("common");
  const espacializacionTitle = t("espacializacionTitle");
  const especializacionText = t("especializacionText");
  const dataTitle = t("dataTitle");
  const dataText = t("dataText");
  const growthTitle = t("growthTitle");
  const growthText = t("growthText");
  const developerTitle = t("developerTitle");
  const developerText = t("developerText");
  const operationalExcellenceTitle = t("operationalExcellence")
  const operationalExcellenceText = t("operationalExcellenceText")


  return (
    <section className="pt-50 mb-5">
      {/* TITLE */}
      <div className="section-title esp-title">
        <h2> {espacializacionTitle}</h2>
        <p className="esp-subtitle esp-responsive">{especializacionText}</p>
      </div>
      
      {/*  CONTENT */}
      <section className="container">
        <article className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/datos.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="data specialist"
            />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive"
          >
            <h4 className='esp-card-title'>{dataTitle}</h4>
            <p>{dataText}</p>
          </div>
        </article>
        <article className="row pt-3 esp-reverse">
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive esp-ra">
            <h4 className='esp-card-title'>{growthTitle}</h4>
            <p>{growthText}</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/growth-mkt.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="growth marketing"
            />
          </div>
        </article>
        <article className="row pt-3">
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/desarrollo.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="developer"
            />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive"
          >
            <h4 className='esp-card-title'>{developerTitle}</h4>
            <p>{developerText}</p>
          </div>
        </article>
        <article className="row pt-3 esp-reverse">
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive esp-ra">
            <h4 className='esp-card-title'>{operationalExcellenceTitle}</h4>
            <p>{operationalExcellenceText}</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/excelencia-operacional.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="growth marketing"
            />
          </div>
        </article>
      </section>

    </section>
  )
};

export default Especializaciones;
