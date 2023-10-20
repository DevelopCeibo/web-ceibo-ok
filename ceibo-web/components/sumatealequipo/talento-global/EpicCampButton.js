import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
const EpicCampButton = () => {
	const { t } = useTranslation("common");
	const buttonText = t("quieroSerParte");
	return (
		<div className="btn-two-container">
			<Link href="/sumate-al-equipo/associate?utm_campaign=talento-global&utm_medium=landing-talento-global&utm_source=web-ceibo&utm_content=button1">
				<a
					className="default-btn-two"
					href="/sumate-al-equipo/associate"
				>
					{buttonText} <i className="fas fa-chevron-right"></i>
				</a>
			</Link>
		</div>
	);
};

export default EpicCampButton;
