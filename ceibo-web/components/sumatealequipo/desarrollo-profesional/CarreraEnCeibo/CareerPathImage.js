import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Image from "next/image";
const CareerPathImage = () => {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  return (
    <>
      <div className="d-none d-md-block d-lg-block">
        <Image
          src={`/images-ceibo/sumatealequipo/${
            locale == "es"
              ? "carrera-en-ceibo-español.jpg"
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
    </>
  );
};

export default CareerPathImage;
