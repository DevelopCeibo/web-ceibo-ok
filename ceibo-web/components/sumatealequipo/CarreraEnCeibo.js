import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
const CarreraEnCeibo = () => {
  const { t } = useTranslation("common");
  const carrera = t("carrera");
  const carreraTxt1 = t("carreraTxt1");
  const carreraTxt2 = t("carreraTxt2");
  const carreraTxt3 = t("carreraTxt3");
  const buttonText = t("knowMoreCareers");

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));

  const { locale } = useRouter();
  return (
    <div className="pt-70 pb-5 mb-5 mt-4">
      <div className="container">
        <div className="section-title">
          <h2>{carrera}</h2>
        </div>
        <p className="mt-5 text-center mb-5">
          <strong>{carreraTxt1}</strong> {carreraTxt2}
          <br />
          <br />
          {carreraTxt3}
        </p>
        {/* large screen image */}
        <div className="d-none d-md-block d-lg-block">
          <Image
            src={`/images-ceibo/sumatealequipo/${
              locale == "es"
                ? "carrera-en-ceibo-español.png"
                : "Career-Path-inglés_1-11.png"
            }`}
            alt="carrera en ceibo"
            width={5}
            height={3}
            layout="responsive"
          />
        </div>
        {/*mobile screen image */}
        <div className="d-md-none d-lg-none">
          <Image
            src={`/images-ceibo/sumatealequipo/${
              locale == "es"
                ? "career-path-español-mobile.png"
                : "career-path-mobile-ENG.png"
            }`}
            alt="carrera en ceibo"
            width={5}
            height={5}
            layout="responsive"
          />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Link href="/sumate-al-equipo/desarrollo-profesional">
            <a className="default-btn-two" title="Desarrollo profesional">
              {buttonText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarreraEnCeibo;
