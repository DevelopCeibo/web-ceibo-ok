import React from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import uniqid from "uniqid";

const EventNavCard = ({ title, description, date, imagePath, href }) => {
	const { locale } = useRouter();
	const { t } = useTranslation("common");
	const verMas = t("vermas");
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-blog-item ">
				<div className="blog-image">
					<Link href={href}>
						<a>
							<img src={imagePath} alt="ceibo" />
						</a>
					</Link>
				</div>

				<div className="blog-post-content blog">
					<span className="date">{date.toUpperCase()}</span>
					<Link href={href}>
						<a>
							<h6>{title}</h6>
						</a>
					</Link>

					<p>{description}</p>

					{locale == "en" && (
						<span className="date">
							This webinar was held in spanish *
						</span>
					)}
					<Link href={href}>
						<a className="read-more-btn">
							{locale == "en" ? "Watch webinar" : "Ver webinar"}
							<i className="fa-solid fa-angles-right"></i>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventNavCard;
