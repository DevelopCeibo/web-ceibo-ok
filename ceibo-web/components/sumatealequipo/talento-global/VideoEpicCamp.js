import React from "react";
import ResponsiveIFrame from "../../Common/ResponsiveIFrame";
import useTranslation from "next-translate/useTranslation";
const VideoEpicCamp = () => {
	const { t } = useTranslation("common");
	const paragraph = t("queEsEpicCamp");
	return (
		<div className="mb-5 pb-4">
			<p className="text-center mb-5">{paragraph}</p>
			<div className="d-flex flex-row justify-content-center">
				<ResponsiveIFrame
					videoSrc={"https://www.youtube.com/embed/zIoJmfLsy6o"}
				/>
			</div>
		</div>
	);
};

export default VideoEpicCamp;
