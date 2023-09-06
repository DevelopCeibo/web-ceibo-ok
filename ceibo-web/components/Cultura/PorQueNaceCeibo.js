import React from "react";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";

const PorQueNaceCeibo = () => {
  const { t } = useTranslation("common");

  const title = t("porQueNaceCeiboTitle");
  const paragraphs = t(
    "porQueNaceCeiboParagraphs",
    {},
    { returnObjects: true }
  );

  return (
    <div className="pt-70 pb-100 mb-3 mt-4">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <div style={{ textAlign: "center" }}>
          {paragraphs?.map((p, index) => (
            <p className={index === 0 ? "bold" : ""} key={uniqid()}>
              {p.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PorQueNaceCeibo;
