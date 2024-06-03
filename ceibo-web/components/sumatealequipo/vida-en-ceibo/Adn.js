import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import adnImageSpa from "../../../public/images-ceibo/sumatealequipo/vidaEnCeibo/adn-spa.png";
import adnImageEng from "../../../public/images-ceibo/sumatealequipo/vidaEnCeibo/adn-eng.png";
function Adn() {
  const { t } = useTranslation("common");
  const adnTitle = t("adnTitle");
  const adnText = t("adnText");
  const pertenenciaTitle = t("pertenenciaTitle");
  const pertenenciaText = t("pertenenciaText");
  const empatiaTitle = t("empatiaTitle");
  const empatiaText = t("empatiaText");
  const wellbeingTitle = t("wellbeingTitle");
  const wellbeingText = t("wellbeingText");
  const reconocimientoTitle = t("reconocimientoTitle");
  const reconocimientoText = t("reconocimientoText");
  const { locale } = useRouter();

  return (
    <section className="pt-70 mb-3">
      {/* TITULO */}
      <div className="section-title adn-title">
        <h2> {adnTitle}</h2>
        <h5 className="adn-subtitle adn-responsive">{adnText}</h5>
      </div>

      {/*  CONTENT */}
      <section className="container">
        <div className="row pt-3">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <article className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/pertenencia.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="sentido de pertenencia"
                />
              </div>
              <div
                className="col-lg-10 col-md-10 col-sm-12 adn-responsive"
                /* style={{
                position: 'relative',
                left: '10rem',
                overflow: 'visible'
              }} */
              >
                <h4>{pertenenciaTitle}</h4>
                <p>{pertenenciaText}</p>
              </div>
            </article>
            <article className="row pt-5 adn-reverse">
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{empatiaTitle}</h4>
                <p>{empatiaText}</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/empatia.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="empatia y confianza"
                />
              </div>
            </article>
            <article className="row pt-5">
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/wellbeing.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="wellbeing"
                />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{wellbeingTitle}</h4>
                <p>{wellbeingText}</p>
              </div>
            </article>
            <article className="row pt-5 adn-reverse">
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{reconocimientoTitle}</h4>
                <p>{reconocimientoText}</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/reconocimiento.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="reconocimiento"
                />
              </div>
            </article>
          </div>
          <div
            className="col-lg-5 col-md-5 col-sm-12"
            // style={{zIndex: '-1'}}
          >
            <Image
              src={locale == "es" ? adnImageSpa : adnImageEng}
              width={1080}
              height={1920}
              // layout="intrinsic"
              alt="adn ceibo"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Adn;
