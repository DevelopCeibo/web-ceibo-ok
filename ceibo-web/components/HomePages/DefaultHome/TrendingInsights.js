import React from "react";
import Link from "next/link";
import insights from "../../../utils/insights.json";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Hightlight = ({ includeTitle }) => {
    const { t } = useTranslation("common");
    const title = t("trendingInsights");
    const vermas = t("leerArt");
    const viewAll = t("viewAllInsights");
    const seccion = "insights";
    const publicaciones = [insights[0], insights[1]]; // TODO: show hightlight insights
    const { locale } = useRouter();
    return (
        <div className="blog-area pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
                <div className="row hightlight">
                    {publicaciones.map((publi, i) => (
                        <div className="single-blog-item col-lg-6 col-md-6" key={i}>
                            <div className="blog-image">
                                <Link href={`/${seccion}/${publi["path-url"]}`}>
                                    <a>
                                        <img src={publi.img} alt="image" />
                                    </a>
                                </Link>
                            </div>
                            <div
                                className={`blog-post-content ${locale == "es" ? "blog" : ""
                                    } insight-card featured`}
                            >
                                <h3>
                                    <a className="insight-core">
                                        {locale == "en"
                                            ? `${publi.themeEN} ${publi?.articleEN}`
                                            : `${publi.theme} ${publi?.article}`}
                                    </a>
                                </h3>
                                <h3>
                                    <Link href={`/${seccion}/${publi["path-url"]}`}>
                                        <a>{locale == "en" ? publi.titleEN : publi.title}</a>
                                    </Link>
                                </h3>

                                {locale == "es" ? (
                                    <p>{publi.desc}</p>
                                ) : (
                                    <p className="spanish-note-text">
                                        *This article is written in Spanish{" "}
                                    </p>
                                )}

                                <Link href={`/${seccion}/${publi["path-url"]}`}>
                                    <a className="read-more-btn-high hightlight-read">{vermas}</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <Link href={'/insights/'}>
                        <a className="default-btn-two"> {viewAll}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hightlight;
