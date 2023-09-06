import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";
const CompetenciasCore = () => {
  const { t } = useTranslation("common");
  const competenciasCore = t("competenciasCore");
  const competenciasCoreSubt = t("competenciasCoreSubt");

  const competenciasCoreArr = ["inspirar", "emprender", "ganar", "transformar"];
  const baseImageSource = "/images/cultura/competencias-core/";
  const imageExtension = ".png";
  const competenciasCoreArrTranslated = competenciasCoreArr.map((competency) =>
    t(competency)
  );
  const competenciasCoreTitleBack = competenciasCoreArr.map((competency) =>
    t(`${competency}TitleBack`)
  );
  const competenciasCoreTextBack = competenciasCoreArr.map((competency) =>
    t(`${competency}TxtImage`)
  );
  const competenciasCoreQuotes = competenciasCoreArr.map((competency) =>
    t(`${competency}Txt`)
  );
  const imageSources = competenciasCoreArr.map(
    (competency) => baseImageSource + competency + imageExtension
  );
  const imageLogoSources = competenciasCoreArr.map(
    (competency) => baseImageSource + competency + "-logo" + imageExtension
  );
  const imageBackSources = competenciasCoreArr.map(
    (competency) => baseImageSource + competency + "-back" + imageExtension
  );

  return (
    <div className="pt-70 mb-3 mt-4">
      <div className="container">
        <div className="section-title" style={{ maxWidth: "none" }}>
          <h2>{competenciasCore}</h2>
          <h5>{competenciasCoreSubt}</h5>
        </div>
        <div className="row core-competence-section">
          {competenciasCoreArrTranslated.map((quote, index) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-6 core-competence-container"
                key={uniqid()}
              >
                <div className="core-competence-card">
                  <div
                    className="card-front"
                    style={{ backgroundImage: `url(${imageSources[index]})` }}
                  >
                    <img
                      className="core-competence-logo"
                      src={imageLogoSources[index]}
                      alt="Logo"
                    />
                    <h3 className="core-competence-title bold">{quote}</h3>
                    <h4 className="core-competence-quote">
                      {competenciasCoreQuotes[index]}
                    </h4>
                  </div>
                  <div
                    className="card-back"
                    style={{
                      backgroundImage: `url(${imageBackSources[index]})`,
                    }}
                  >
                    <h3 className="core-competence-title bold">
                      {competenciasCoreTitleBack[index]}
                    </h3>
                    <h5 style={{ color: "white" }}>
                      {competenciasCoreTextBack[index]}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompetenciasCore;
