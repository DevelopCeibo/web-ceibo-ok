import React from "react";
import useTranslation from "next-translate/useTranslation";

const Download = ({ publicacion }) => {
  const { t } = useTranslation("common");
  const download = t("download");
  const fullArticle = t("fullArticle");
  const pdfLink = // agregar al json de la publicación
    "https://drive.google.com/file/d/1KqYKN4PTtY7GXiyNRqGfIRg7KwejA43O/view?usp=sharing";
  return (
    <div className="widget-area" id="secondary">
      <div className="widget widget_posts_thumb">
        <h3 className="share-title author-share">{download}</h3>
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
