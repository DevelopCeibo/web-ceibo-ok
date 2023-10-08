import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import ceibersJson from "../../../utils/integrantesCeibo.json";
import { useRouter } from "next/router";
function CardsEpicCamp() {
	const { locale } = useRouter();
	const titleCase = (str) => {
		return str
			.toLowerCase()
			.split(" ")
			.map(function (word) {
				return word.replace(word[0], word[0].toUpperCase());
			})
			.join(" ");
	};

	const ceibers = ceibersJson.filter(
		(ceiber) =>
			ceiber.nombre === "AYELÉN RICHARD" ||
			ceiber.nombre === "ALINA IBAÑEZ" ||
			ceiber.nombre === "FACUNDO YVORRA"
	);
	return (
		<section className="my-5 py-4 people-worth">
			<Swiper
				pagination={{
					clickable: true,
				}}
				spaceBetween={30}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
				}}
				modules={[Pagination]}
				className="blog-slides"
			>
				{ceibers.map((ceiber, i) => (
					<SwiperSlide key={i}>
						<div className="people-worth-bc">
							<div className="people-worth-img">
								<Image
									src={ceiber?.globalTalent.img}
									width={200}
									height={180}
									layout="intrinsic"
									alt="ceiber"
								/>
							</div>
							<div className="people-worth-quote">
								<p>
									{locale === "es"
										? ceiber.globalTalent.quote
										: ceiber.globalTalent.quoteEN}
								</p>
							</div>

							<div className="people-worth-card-footer">
								<div className="row people-worth-responsive">
									<div className="col-12 ms-3">
										<p className="people-worth-ceiber">{`${titleCase(
											ceiber?.nombre
										)}, ${titleCase(ceiber?.posicion)}`}</p>
									</div>

									<div className="col-12">
										<p className="ms-3">
											Epic Camp,{" "}
											{locale === "es"
												? ceiber.globalTalent.edition
												: ceiber.globalTalent.editionEN}
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default CardsEpicCamp;
