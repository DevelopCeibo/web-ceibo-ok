import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const BusquedasVigentesIndividual = ({ arregloDeVacantes }) => {
  const { t } = useTranslation("common");
  const postularse = t("postularse");
  const dataScientist = t("dataScientist");
  const manager = t("manager");
  const consultant = t("consultant");
  const associate = t("associate");
  const developer = t("developer");
  const marketingAutomation = t("marketing-automation");
  const seniorPaidMedia = t("senior-paid-media");

  return (
    <div className="row justify-content-center">
      {arregloDeVacantes.map((vac) => {
        return (
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="bc-post-item card-vacantes">
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(
                ${vac.image}
              )`,
                }}
              ></div>

              <div className="post-content">
                <div className="post-text">
                  <h6>{vac.title}</h6>
                  <p>{vac.id == "1" && dataScientist}</p>
                  <p>{vac.id == "2" && manager}</p>
                  <p>{vac.id == "3" && consultant}</p>
                  <p>{vac.id == "4" && associate}</p>
                  <p>{vac.id == "5" && developer}</p>
                  <p>{vac.id == "6" && marketingAutomation}</p>
                  <p>{vac.id == "7" && seniorPaidMedia}</p>
                </div>
                <Link href={`/sumate-al-equipo/${vac["path-url"]}`}>
                  <a className="read-more-btn">
                    {postularse} <i className="fa-solid fa-angles-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusquedasVigentesIndividual;
