import React from "react";
import useTranslation from "next-translate/useTranslation";
import integrantes from "../../utils/integrantesCeibo.json";
import { EmailShareButton } from "next-share";

const getAuthorsData = (authors) => {
  const authorsData = authors?.map((author) => {
    const authorData = integrantes.filter(
      (integrante) => integrante.nombre === author.toUpperCase()
    );
    return authorData[0];
  });
  return authorsData;
};

const AuthorSidebar = ({ publicacion }) => {
  const { t } = useTranslation("common");
  const autores = t("autores");
  const authors = getAuthorsData(publicacion?.metadata?.author);
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb">
          <h3
            className="share-title author-share mobile-author"
            style={{ paddingTop: "3rem" }}
          >
            {autores}
          </h3>
          {authors?.length >= 1 &&
            authors?.map((author, i) => {
              return (
                <div key={i} className="author-sidebar">
                  <div>
                    <img src={author.src} alt={author.nombre} width="200px" />
                    <h6 className="author-name">{author.nombre}</h6>
                    <p className="author-position">{author.posicion}</p>
                  </div>
                  <div className="author-share">
                    <a href={author.linkedinurl} target="blank">
                      <i className="fa-brands fa-linkedin fa-xl insight-icon author-share-button"></i>
                    </a>

                    <EmailShareButton url={author.email}>
                      <i className="fa-regular fa-envelope fa-xl insight-icon author-share-button"></i>
                    </EmailShareButton>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AuthorSidebar;
