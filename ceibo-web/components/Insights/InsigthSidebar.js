import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import integrantes from '../../utils/integrantesCeibo.json';
import {
  LinkedinShareButton,
  EmailShareButton,
} from "next-share";

const getAuthorsData = (authors) => {
  const authorsData = authors?.map(author => {
    const authorData = integrantes.filter(integrante => integrante.nombre === author.toUpperCase())
    return authorData[0];
  });
  return authorsData;
}

const InsigthSidebar = ({ publicacion }) => {
  const { t } = useTranslation("common")
  const autores = t("autores")
  const authors = getAuthorsData(publicacion?.metadata?.author)
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb">
          <h3 className="share-title" style={{ textAlign: "center" }}>
            {autores}
          </h3>
          {authors?.length >= 1 &&
          authors.map((author, i) => {
            return (<div style={{ marginTop: "20px", alignContent: "center" }}>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <img
                src={author.src}
                alt={author.nombre}
                width="200px"
              />
              <h6 style={{ marginTop: "20px" }}>
                {author.nombre}
              </h6>
              <p style={{ marginBottom: "5px" }}>
                {author.posicion}
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <LinkedinShareButton url={author.linkedinurl}>
                <i
                  className="fa-brands fa-linkedin fa-xl"
                  style={{ color: "#b72837" }}
                ></i>
              </LinkedinShareButton>{" "}
              <EmailShareButton url={author.email}>
                <i
                  className="fa-regular fa-envelope fa-xl"
                  style={{ color: "#b72837" }}
                ></i>
              </EmailShareButton>
            </div>
          </div>)
          })}
        </div>
      </div>
    </>
  );
};

export default InsigthSidebar;
