import React from "react";
import EpicCampButton from "./EpicCampButton";
const BeneficiosEpicCamp = () => {
	return (
		<div className="my-5 py-4">
			<div className="section-title">
				<h2>¿Por qué Epic Camp va a cambiar tu vida ? </h2>
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
							alt="estrategia"
						/>
						<h5>{"Tu carrera va a despegar"}</h5>
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
						<h5>{"Tu CV se va a diferenciar del resto"}</h5>
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
						<h5>
							{
								"Adquirirás un Mindset Global que te llevará muy lejos"
							}
						</h5>
					</div>
				</div>

				<div
					className="col-lg-4 col-sm-6"
					data-aos="fade-up"
					data-aos-duration="1200"
					data-aos-delay="400"
				>
					<div className="service-card-one">
						{/* <i className="pe-7s-phone bg-fc3549"></i> */}
						<img
							src="/images-ceibo/sumatealequipo/talento-global/eng.png"
							alt="Innovación"
						/>
						<h5>{"Consolidarás tu inglés para siempre"}</h5>
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
						<h5>{"Vivirás experiencias épicas e inolvidables "}</h5>
					</div>
				</div>

				<EpicCampButton />
			</div>
		</div>
	);
};

export default BeneficiosEpicCamp;
