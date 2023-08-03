import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

function BlogCard({ section, publi }) {
  const { locale } = useRouter();
  const urlFragment = section === "insights" ? "insights" : "publicaciones";
  const { t } = useTranslation("common");
  const vermas = t("vermas");
  return (
    <>
      {section === "insights" ? (
        // INSIGHTS
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item ">
            <div className="blog-image">
              <Link href={`/${urlFragment}/${publi["path-url"]}`}>
                <a>
                  <img src={publi.img} alt="image" />
                </a>
              </Link>
            </div>
            <div
              className={`blog-post-content ${locale == "es" ? "blog" : null} insight-card`}
            >
              <h3>
                <a className='insight-core'>{locale == "en" ? publi.themeEN : publi.theme}</a>
              </h3>
              <h3>
                <Link href={`/${urlFragment}/${publi["path-url"]}`}>
                  <a>{locale == "en" ? publi.titleEN : publi.title}</a>
                </Link>
              </h3>
              <span className="date">
                {locale == "es"
                  ? `${publi?.metadata.date} ${publi?.article}`
                  : `${publi?.metadata.dateEN} ${publi?.articleEN}`}
              </span>
              <Link href={`/${urlFragment}/${publi["path-url"]}`}>
                <a className="read-more-btn">
                  {vermas}
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // PUBLICACIONES
        <div className="col-lg-4 col-md-6">
          <div className="single-blog-item ">
            <div className="blog-image">
              <Link href={`/${urlFragment}/${publi["path-url"]}`}>
                <a>
                  <img src={publi.img} alt="image" />
                </a>
              </Link>
            </div>
            <div
              className={`blog-post-content ${locale == "es" ? "blog" : null}`}
            >
              <span className="date">
                {locale == "es" ? publi?.metadata.date : publi?.metadata.dateEN}
              </span>
              <h3>
                <Link href={`/${urlFragment}/${publi["path-url"]}`}>
                  <a>{locale == "en" ? publi.titleEN : publi.title}</a>
                </Link>
              </h3>
              <p>
                {locale == "es"
                  ? publi.desc
                  : "*This article is written in Spanish"}
              </p>
              <Link href={`/${urlFragment}/${publi["path-url"]}`}>
                <a className="read-more-btn">
                  {vermas}
                  <i className="fa-solid fa-angles-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogCard;
