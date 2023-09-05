import React from "react";
import NavigationCard from "../../Common/NavigationCard";
import useTranslation from "next-translate/useTranslation";
const NavigationCardSection = () => {
  const { t } = useTranslation("common");
  const cardsData = [
    "vidaEnCeiboCard",
    "carreraEnCeiboCard",
    "entrevistasCeiboCard",
  ].map((key) => t(key, {}, { returnObjects: true }));

  return (
    <div className="row justify-content-center mb-5 background-maroon">
      {cardsData?.map((card) => {
        return (
          <NavigationCard
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
