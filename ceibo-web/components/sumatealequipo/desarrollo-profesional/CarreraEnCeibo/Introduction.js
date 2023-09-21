import React from "react";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";
const Introduction = () => {
  const { t } = useTranslation("common");
  const title = t("careerPathTitle");
  const paragraphs = t("careerPathParagraphs", {}, { returnObjects: true });

  return (
    <>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      {paragraphs?.map((p) => (
        <p key={uniqid()} className="text-center">
          {p.text}
        </p>
      ))}
    </>
  );
};

export default Introduction;
