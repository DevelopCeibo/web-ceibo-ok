import React from "react";
import EpicCampIntro from "./EpicCampIntro";
import QueEsEpicCamp from "./QueEsEpicCamp";
import VideoEpicCamp from "./VideoEpicCamp";
import CardsEpicCamp from "./CardsEpicCamp";
import BeneficiosEpicCamp from "./BeneficiosEpicCamp";
import OutroEpicCamp from "./OutroEpicCamp";

const index = () => {
	return (
		<>
			<div className="container">
				<EpicCampIntro />
				<QueEsEpicCamp />
				<VideoEpicCamp />
				<BeneficiosEpicCamp />
			</div>
			<CardsEpicCamp />
			<div className="container">
				<OutroEpicCamp />
			</div>
		</>
	);
};

export default index;
