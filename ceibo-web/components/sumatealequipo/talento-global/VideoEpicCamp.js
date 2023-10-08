import React from "react";
import ResponsiveIFrame from "../../Common/ResponsiveIFrame";
const VideoEpicCamp = () => {
	return (
		<div className="mb-5 pb-4">
			<p className="text-center mb-5">
				Epic Camp es una iniciativa de Talento Global, nuestro programa
				de aprendizaje y desarrollo profesional de Ceibo.  
			</p>
			<div className="d-flex flex-row justify-content-center">
				<ResponsiveIFrame
					videoSrc={
						"https://www.youtube.com/embed/t-9eizBymks?si=m9eZcyKJCVRP_VlI"
					}
				/>
			</div>
		</div>
	);
};

export default VideoEpicCamp;
