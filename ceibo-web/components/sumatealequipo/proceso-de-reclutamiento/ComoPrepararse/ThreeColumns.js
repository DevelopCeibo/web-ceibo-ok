import React from "react";
import useTranslation from "next-translate/useTranslation";
import CasebooksButtons from "../../../Common/CasebooksButtons";
const ThreeColumns = () => {
  const { t } = useTranslation("common");
  const intro = t("comoPrepararseColumnsIntro");
  const columnsContent = t(
    "comoPrepararseColumnsContent",
    {},
    { returnObjects: true }
  );
  return (
    <div className="row">
      <div className="col-12 col-sm-12 mt-4 mb-5">
        <p className="bold text-justify">{intro}</p>
      </div>
      {columnsContent?.map((content) => {
        return (
          <div className="col-12 col-md-4 px-4 mb-5">
            <h4 className="bold text-center mb-4">{content.title}</h4>
            <p className="text-justify">{content.text}</p>
            {content.casebooks ? (
              <CasebooksButtons buttonsClassname={"btn-red"} />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ThreeColumns;
