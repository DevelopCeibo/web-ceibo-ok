import React from "react";
import EpicCampButton from "./EpicCampButton";
import useTranslation from "next-translate/useTranslation";
const OutroEpicCamp = () => {
	const { t } = useTranslation("common");
	const paragraph = t("epicCampOutro");
	return (
		<div className="mb-5 pb-4">
			<p className="bold text-center">{paragraph}</p>
			<EpicCampButton />
		</div>
	);
};

export default OutroEpicCamp;
