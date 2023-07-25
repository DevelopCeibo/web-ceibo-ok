import React from "react";
import Link from "next/link";
import insights from "../../utils/insights.json";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Hightlight = () => {
  const { t } = useTranslation("common");
  const publicacionesTitle = "FEATURED INSIGHTS"; // t("insightsTitle");
  const vermas = t("leerArt");
  const verpublis = t("verInsighs");
  const seccion = "insights";
  const publicaciones = [insights[0], insights[1]];

  const { locale } = useRouter();
  // si locale == en, los titulos de publicaciones van en ingles

  return (
    <>
      <div className="blog-area pt-100">
        <div
          className="container"
          style={{
            borderTop: "2px solid #b72837",
            borderBottom: "2px solid #b72837",
            paddingTop: "2%",
          }}
        >
          <h2
            style={{
              marginBottom: "2%",
              paddingLeft: "2%",
              color: "#b72837",
              fontWeight: "600",
              fontSize: "25px",
            }}
          >
            {publicacionesTitle}
          </h2>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {publicaciones.map((publi, i) => (
              <div className="single-blog-item" style={{ width: "45%" }}>
                <div className="blog-image">
                  <Link href={`/${seccion}/${publi["path-url"]}`}>
                    <a>
                      <img
                        src={publi.img}
                        // src="/images-ceibo/publicaciones/IAE-600x403.png"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>

                <div
                  className={`blog-post-content ${
                    locale == "es" ? "blog" : ""
                  }`}
                >
                  {/* <span className="date">Feb 15, 2022</span> */}
                  <h3>
                    <Link href={`/${seccion}/${publi["path-url"]}`}>
                      <a>{locale == "en" ? publi.titleEN : publi.title}</a>
                    </Link>
                  </h3>

                  <p>
                    {locale == "es"
                      ? publi.desc
                      : "*This article is written in Spanish"}
                  </p>
                  <Link href={`/${seccion}/${publi["path-url"]}`}>
                    <a
                      className="read-more-btn-high"
                      style={{
                        width: "25%",
                        borderRadius: "10px",
                        overflow: "hidden",
                        textAlign: 'center'
                      }}
                    >
                      {vermas}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hightlight;
