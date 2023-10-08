import React from "react";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";
import EpicCampButton from "./EpicCampButton";
const EpicCampIntro = () => {
	const { t } = useTranslation("common");
	const title = t("epicCamp");
	const paragraphs = t("epicCampParagraphs", {}, { returnObjects: true });
	return (
		<div className="my-5 py-4">
			<div className="section-title">
				<h2>{title}</h2>
			</div>
			{paragraphs?.map((p) => (
				<p className="text-center" key={uniqid()}>
					{p.text}
				</p>
			))}

			<EpicCampButton />
		</div>
	);
};

export default EpicCampIntro;
