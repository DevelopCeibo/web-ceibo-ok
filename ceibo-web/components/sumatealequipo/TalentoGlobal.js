import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const TalentoGlobal = () => {
	const { t } = useTranslation("common");
	const title = t("talentoGlobal");
	const paragraph = t("talentoGlobalOverviewText");
	const buttonText = t("conoceMas");

	return (
		<section className="pt-50 mb-5 pb-60">
			{/* TITLE */}
			<section className="section-title esp-title">
				<h2> {title}</h2>
			</section>

			{/*  CONTENT */}
			<section className="container">
				<article className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 d-md-flex justify-content-center">
						<Image
							src="/images-ceibo/sumatealequipo/overview/talento-global.png"
							width={500}
							height={277}
							layout="intrinsic"
							alt="Talento Global"
						/>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12 overview-text-wrapper">
						<p className="overview-cul-text overview-responsive-text">
							{paragraph}
						</p>
						<div className="container btn-two-container overview-cul-button overview-responsive">
							<Link href="/sumate-al-equipo/talento-global">
								<a
									className="default-btn-two"
									title="Cultura en Ceibo"
								>
									{buttonText}
								</a>
							</Link>
						</div>
					</div>
				</article>
			</section>
		</section>
	);
};

export default TalentoGlobal;
