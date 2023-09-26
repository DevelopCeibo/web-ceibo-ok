import React from "react";
import useTranslation from "next-translate/useTranslation";
import CasebooksButtons from "../Common/CasebooksButtons";
const CaseInterviews = () => {
  const { t } = useTranslation("common");
  const prepCases = t("prepCases");

  return (
    <div className=" ">
      <div className="container ">
        <div className="section-title sumatealequipo">
          <h3>{prepCases}</h3>
        </div>

        <CasebooksButtons />
      </div>
    </div>
  );
};

export default CaseInterviews;
