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
          <h2 className="text-blue-ceibo text-center mb-4">{suamteAlSpecialist}</h2>

            <p className="overview-cul-text overview-responsive-text">
              {suamteAlSpecialistTxt}
            </p>
            <div className="container btn-two-container overview-cul-button overview-responsive">
              <Link href="/sumate-al-equipo/busquedas-vigentes?modality=specialist-crew">
                <a className="default-btn-two" title="Cultura en Ceibo">
                  {uniteAlSpecialist}
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-none d-md-flex justify-content-center">
            <Image
              src="/images-ceibo/sumatealequipo/overview/specialist-crew.png"
              width={500}
              height={333}
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
