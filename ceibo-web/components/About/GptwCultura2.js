import React, { useState } from "react";
import Image from "next/image";

//image
import gptwImage from "../../public/images-ceibo/gtpw/gtpw_certificado.png";
import gptwStatsImage from "../../public/images-ceibo/gtpw/gtpw_es_23.png";
import gptwStatsEng from "../../public/images-ceibo/gtpw/gtpw_en_23.png";

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const GptwCultura = () => {
  const { locale } = useRouter();

  const { t } = useTranslation("common");
  const gptw1 = t("gptw1");
  const gptwTitle = t("gptwTitle");

  return (
    <div className="pt-70 mb-3">
      <div className="section-title gptw-title">
        <h2>{gptwTitle}</h2>
        <h5 className="gptw-subtitle">{gptw1}</h5>
      </div>
      <div className="gptw-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3 col-lg-3 col-6  gptw-image-banner">
            <Image
              src={gptwImage}
              alt="image"
              className="rounded-10"
              width={0.5}
              height={0.6}
              layout="responsive"
            />
          </div>
          <div className="col-lg-9 col-md-9 col-12 gptw-image">
            <Image
              src={locale == "es" ? gptwStatsImage : gptwStatsEng}
              alt="ceibo great place to work"
              width={2}
              height={1}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="gptw-awards">
        <Image
          src="/images-ceibo/gtpw/gtpw_certificado_milennial_22.png"
          width={160}
          height={160}
          alt="Great place to work para Millenials Argentina "
        />
        <Image
          src="/images-ceibo/gtpw/gtpw_certificado_cuidan_22.png"
          alt="Aregntina empresas que cuidan"
          width={160}
          height={160}
        />
        <Image
          src="/images-ceibo/gtpw/gtpw_certificado_22.png"
          width={160}
          height={160}
          alt="Great place to work Argentina"
        />
        <Image
          src="/images-ceibo/2022-Best-Workplaces-Latin-America-Logo_ENG.png"
          alt="Best Workplaces Latin America Logo"
          width={180}
          height={160}
        />
      </div>
    </div>
  );
};

export default GptwCultura;
