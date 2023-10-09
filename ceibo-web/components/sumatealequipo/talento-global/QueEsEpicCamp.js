import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
const QueEsEpicCamp = () => {
	const { t } = useTranslation("common");
	const potenciaTuCarrera = t("potenciaTuCarrera");
	const potenciaTuCarreraTxt = t("potenciaTuCarreraTxt");
	const desarrollaInteligencia = t("desarrollaInteligenciaCultural");
	const desarrollaInteligenciaTxt = t("desarrollaInteligenciaCulturalTxt");
	const apostamosTalento = t("apostamosPorNuestroTalento");
	const apostamosTalentoTxt = t("apostamosPorNuestroTalentoTxt");

	return (
		<div className="mt-5 py-4">
			<article className="postcard aqua">
				<a className="postcard__img_link">
					<Image
						width={700}
						height={400}
						layout="intrinsic"
						className="postcard__img"
						src="/images-ceibo/sumatealequipo/talento-global/ceiber-balcony.png"
						alt="Image Title"
					/>
				</a>
				<div className="postcard__text t-dark aqua">
					<h1 className="postcard__title blue">
						{potenciaTuCarrera}
					</h1>

					<div className="postcard__bar"></div>
					<div className="postcard__preview-txt">
						{potenciaTuCarreraTxt}
					</div>
				</div>
			</article>
			<article className="postcard light red">
				<a className="postcard__img_link">
					<Image
						width={700}
						height={400}
						layout="intrinsic"
						className="postcard__img"
						src="/images-ceibo/sumatealequipo/talento-global/ceibers-beach.png"
						alt="Image Title"
					/>
				</a>
				<div className="postcard__text t-dark purple">
					<h1 className="postcard__title red">
						{desarrollaInteligencia}
					</h1>

					<div className="postcard__bar"></div>
					<div className="postcard__preview-txt">
						{desarrollaInteligenciaTxt}
					</div>
				</div>
			</article>
			<article className="postcard aqua">
				<a className="postcard__img_link">
					<Image
						width={700}
						height={400}
						layout="intrinsic"
						className="postcard__img"
						src="/images-ceibo/sumatealequipo/talento-global/ceibers-working.png"
						alt="Image Title"
					/>
				</a>
				<div className="postcard__text t-dark aqua">
					<h1 className="postcard__title blue">{apostamosTalento}</h1>

					<div className="postcard__bar"></div>
					<div className="postcard__preview-txt">
						{apostamosTalentoTxt}
					</div>
				</div>
			</article>
		</div>
	);
};

export default QueEsEpicCamp;
