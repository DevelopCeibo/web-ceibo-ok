import React from "react";
import QueNosHaceDiferentesCard from "./QueNosHaceDiferentesCard.js";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";

const QueNosHaceDiferentesCardGroup = () => {
  const { t } = useTranslation("common");
  const baseImageSource = "/images/cultura/diferentes/";
  const imageSources = [
    "icon-building-blocks.png",
    "icon-ideacion.png",
    "icon-team-group.png",
  ].map((source) => baseImageSource + source);

  const cardsContent = t(
    "queNosHaceDiferentesCards",
    {},
    { returnObjects: true }
  );

  return (
    <div className="row justify-content-center competencias-core">
      {cardsContent?.map((card, index) => {
        return (
          <div className="col-12 col-sm-12 col-md-4" key={uniqid()}>
            <QueNosHaceDiferentesCard
              src={imageSources[index]}
              title={card.title}
              text={card.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QueNosHaceDiferentesCardGroup;
