import React from "react";
import QueNosHaceDiferentesCard from "../Cultura/QueNosHaceDiferentes/QueNosHaceDiferentesCard";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";
const PorQueCeibo = () => {
  const { t } = useTranslation("common");
  const cardsContent = t("porQueCeiboCards", {}, { returnObjects: true });
  const title = t("porQueCeiboDigitalTitle");
  const description = t("porQueCeiboDigitalParagraph");
  return (
    <div className="container mt-5 pt-5">
      <div className="section-title">
        <h2 className="mb-5">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
      <div className="row">
        {cardsContent.map((card) => {
          return (
            <div className="col-12 col-md-6 col-lg-3 mt-4" key={uniqid()}>
              <QueNosHaceDiferentesCard
                src={card.imagePath}
                title={card.title}
                text={card.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PorQueCeibo;
