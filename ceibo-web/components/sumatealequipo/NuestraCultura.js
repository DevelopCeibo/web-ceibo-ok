import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const NuestraCultura = () => {
  const { t } = useTranslation("common");
  const overviewCulturaTitle = t("overviewCulturaTitle");
  const overviewCulturaText = t("overviewCulturaText");
  const knowMore = t("knowMore");

  return (
    <section className="pt-50 mb-5">
      {/* TITLE */}
      <section className="section-title esp-title">
        <h2> {overviewCulturaTitle}</h2>
      </section>

      {/*  CONTENT */}
      <section className="container">
        <article className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Image
              src="/images-ceibo/sumatealequipo/overview/nuestra-cultura.png"
              width={1101}
              height={610}
              layout="intrinsic"
              alt="nuestra cultura"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 overview-text-wrapper">
            <p className='overview-cul-text overview-responsive-text'>{overviewCulturaText}</p>
            <div className="container btn-two-container overview-cul-button overview-responsive">
              <Link href="/sumate-al-equipo/vida-en-ceibo">
                <a className="default-btn-two" title="Cultura en Ceibo">
                  {knowMore}
                </a>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default NuestraCultura;
