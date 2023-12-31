import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

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
					<div className="single-blog-item">
						<div className="blog-image">
							<Link href={`/${urlFragment}/${publi["path-url"]}`}>
								<a>
									<Image
										src={publi.img}
										alt="insight card image"
										layout="fill"
										objectFit="cover"
									/>
								</a>
							</Link>
						</div>
						<div
							className={`blog-post-content ${
								locale == "es" ? "blog" : null
							} insight-card`}
						>
							<h3>
								<a className="insight-core">
									{locale == "en"
										? `${publi.themeEN} ${publi?.articleEN}`
										: `${publi.theme} ${publi?.article}`}
								</a>
							</h3>
							<span className="date">
								{locale == "es"
									? publi?.metadata?.date.toUpperCase()
									: publi?.metadata?.dateEN.toUpperCase()}
							</span>
							<h3 className="insight-card-title">
								<Link
									href={`/${urlFragment}/${publi["path-url"]}`}
								>
									<a>
										{locale == "en"
											? publi.titleEN
											: publi.title}
									</a>
								</Link>
							</h3>
							<p className="desc-insight">
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
			) : (
				// PUBLICACIONES
				<div className="col-lg-4 col-md-6">
					<div className="single-blog-item ">
						<div className="blog-image">
							<Link href={`/${urlFragment}/${publi["path-url"]}`}>
								<a style={{ overflow: "hidden" }}>
									<Image
										src={publi.img}
										alt="newsroom card image"
										layout="fill"
										objectFit="cover"
									/>
								</a>
							</Link>
						</div>
						<div
							className={`blog-post-content ${
								locale == "es" ? "blog" : null
							}`}
						>
							<span className="date">
								{locale == "es"
									? publi?.metadata.date.toUpperCase()
									: publi?.metadata.dateEN.toUpperCase()}
							</span>
							<h3>
								<Link
									href={`/${urlFragment}/${publi["path-url"]}`}
								>
									<a>
										{locale == "en"
											? publi.titleEN
											: publi.title}
									</a>
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
