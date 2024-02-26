import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const SpecialistCrew = () => {
  const { t } = useTranslation("common");
  const suamteAlSpecialist = t("sumateAlSpecialist");
  const suamteAlSpecialistTxt = t("sumateAlSpecialistTxt");
  const uniteAlSpecialist = t("uniteAlSpecialist");

  return (
    <section className="pt-50 mb-5 pb-60">
  
      {/*  CONTENT */}
      <section className="container">
        <article className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 overview-text-wrapper">
          <h2 className="text-red-ceibo text-center mb-4">{suamteAlSpecialist}</h2>

            <p className="overview-cul-text overview-responsive-text">
              {suamteAlSpecialistTxt}
            </p>
            <div className="container btn-two-container overview-cul-button overview-responsive">
              <Link href="/sumate-al-equipo/vida-en-ceibo">
                <a className="default-btn-two" title="Cultura en Ceibo">
                  {uniteAlSpecialist}
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Image
              src="/images-ceibo/sumatealequipo/overview/specialist-crew.png"
              width={600}
              height={400}
              layout="intrinsic"
              alt="nuestra cultura"
            />
          </div>
        </article>
      </section>
    </section>
  );
};

export default SpecialistCrew;
