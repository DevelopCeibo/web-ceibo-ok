import React from "react";
import NavigationCard from "../../Common/NavigationCard";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";

const NavigationCardSection = () => {
  const { t } = useTranslation("common");
  const cardsData = [
    "vidaEnCeiboCard",
    "carreraEnCeiboCard",
    "entrevistasCeiboCard",
  ].map((key) => t(key, {}, { returnObjects: true }));

  return (
    <div className="row justify-content-center mb-5 pt-3 pb-3 background-maroon">
      {cardsData?.map((card) => {
        return (
          <NavigationCard
            key={uniqid()}
            title={card.title}
            description={card.description}
            imagePath={card.imagePath}
            href={card.href}
          />
        );
      })}
    </div>
  );
};

export default NavigationCardSection;
