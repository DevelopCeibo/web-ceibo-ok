import React from "react";
import useTranslation from "next-translate/useTranslation";

const Download = ({ link }) => {
  const { t } = useTranslation("common");
  const download = t("download");
  const fullArticle = t("fullArticle");
  const pdfLink = link;
  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget_posts_thumb">
        <h3
          className="share-title author-share"
          style={{ marginBottom: "0.5rem" }}
        >
          {download}
        </h3>
        <div className="share-download">
          <i className="fa-solid fa-download fa-xl insight-icon"></i>{" "}
          <a className="insight-icon" href={pdfLink} target={"_blank"}>
            {fullArticle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;
