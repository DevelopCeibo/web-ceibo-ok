import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const ConsultingTeam = () => {
  const { t } = useTranslation("common");
  const title = t("sumateAlEquipo");
  const sumateConsulting = t("sumateAlConsulting");
  const sumateConsultingTxt = t("sumateAlConsultingTxt");
  const uniteAlConsulting = t("uniteAlConsulting");

  return (
    <section className="pt-50 mb-5 pb-60">
      {/* TITLE */}
      <section className="section-title esp-title">
        <h2> {title}</h2>
      </section>

      {/*  CONTENT */}
      <section className="container">
        <article className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <Image
              src="/images-ceibo/sumatealequipo/overview/consulting-team.png"
              width={600}
              height={400}
              layout="intrinsic"
              alt="nuestra cultura"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 overview-text-wrapper">
          <h2 className="text-red-ceibo text-center mb-4">{sumateConsulting}</h2>

            <p className="overview-cul-text overview-responsive-text">
              {sumateConsultingTxt}
            </p>
            <div className="container btn-two-container overview-cul-button overview-responsive">
              <Link href="/sumate-al-equipo/vida-en-ceibo">
                <a className="default-btn-two" title="Cultura en Ceibo">
                  {uniteAlConsulting}
                </a>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default ConsultingTeam;
