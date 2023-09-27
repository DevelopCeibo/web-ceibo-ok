import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import vacantes from "../../utils/vacantes.json";
import uniqid from "uniqid";

const BusquedasVigentes = () => {
  const { t } = useTranslation("common");
  const busquedasvigentes = t("busquedasvigentes");
  const dataScientist = t("dataScientist");
  const manager = t("manager");
  const consultant = t("consultant");
  const associate = t("associate");
  const developer = t("developer");
  const marketingAutomation = t("marketing-automation");
  const seniorPaidMedia = t("senior-paid-media");
  const vermas = t("vermas");
  const contactanos = t("contactanos");

  return (
    <div className="pt-70 pb-100 mb-3 mt-4">
      <div className="container ">
        <div className="section-title " id="busquedas-vigentes">
          <h2>{busquedasvigentes}</h2>
        </div>

        <div className="row justify-content-start">
          {vacantes.map((vac) => {
            return (
              <div key={uniqid()} className="col-lg-3 col-md-6 mb-4 mb-md-0">
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
                    {/* <Link
                      href={`/sumate-al-equipo/${vac["path-url"]}`}
                      passHref
                    >
                      <a className="link-btn link-btn-vacantes">
                        {vermas} <i className="fas fa-chevron-right"></i>
                      </a>
                    </Link> */}
                    <Link href={`/sumate-al-equipo/${vac["path-url"]}`}>
                      <a className="read-more-btn">
                        {vermas} <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container btn-two-container">
          <Link href="/contacto/">
            <a className="default-btn-two">
              {contactanos} <i className="fas fa-chevron-down "></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusquedasVigentes;
