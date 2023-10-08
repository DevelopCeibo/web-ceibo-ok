import React from "react";
import EpicCampButton from "./EpicCampButton";
import useTranslation from "next-translate/useTranslation";
const BeneficiosEpicCamp = () => {
	const { t } = useTranslation("common");
	const title = t("porQueEpicCamp");
	const epicCampBenefits = t(
		"beneficiosEpicCamp",
		{},
		{ returnObjects: true }
	);
	return (
		<div className="my-5 py-4">
			<div className="section-title">
				<h2>{title}</h2>
			</div>
			<div className="row justify-content-center">
				<div
					className="col-lg-4 col-sm-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="100"
				>
					<div className="service-card-one">
						<img
							src="/images-ceibo/sumatealequipo/talento-global/take-off.png"
							alt="Icono de un avion despegando"
						/>
						<h5>{epicCampBenefits[0].text}</h5>
					</div>
				</div>

				<div
					className="col-lg-4 col-sm-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="200"
				>
					<div className="service-card-one">
						<img
							src="/images-ceibo/sumatealequipo/talento-global/curriculum.png"
							alt="Excelencia Operacional"
						/>
						<h5>{epicCampBenefits[1].text}</h5>
					</div>
				</div>

				<div
					className="col-lg-4 col-sm-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="300"
				>
					<div className="service-card-one">
						<img
							src="/images-ceibo/sumatealequipo/talento-global/global-mindset.png"
							alt="Organización"
						/>
						<h5>{epicCampBenefits[2].text}</h5>
					</div>
				</div>

				<div
					className="col-lg-4 col-sm-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="400"
				>
					<div className="service-card-one">
						<img
							src="/images-ceibo/sumatealequipo/talento-global/eng.png"
							alt="Innovación"
						/>
						<h5>{epicCampBenefits[3].text}</h5>
					</div>
				</div>

				<div
					className="col-lg-4 col-sm-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="500"
				>
					<div className="service-card-one">
						{/* <i className="pe-7s-cart bg-00d280"></i> */}
						<img
							src="/images-ceibo/sumatealequipo/talento-global/experience.png"
							alt="Customer Engagement"
						/>
						<h5>{epicCampBenefits[4].text}</h5>
					</div>
				</div>

				<EpicCampButton />
			</div>
		</div>
	);
};

export default BeneficiosEpicCamp;
