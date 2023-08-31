import React from "react";
import useTranslation from "next-translate/useTranslation";
import QueNosHaceDiferentesCard from "./QueNosHaceDiferentesCard";
import QueNosHaceDiferentesCardGroup from "./QueNosHaceDiferentesCardGroup";

const QueNosHaceDiferentes = () => {
  const { t } = useTranslation("common");

  const title = t("queNosHaceDiferentesTitle");

  return (
    <div className="pb-100 mb-3">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <QueNosHaceDiferentesCardGroup />
      </div>
    </div>
  );
};

export default QueNosHaceDiferentes;
