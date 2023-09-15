import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import ceibersJson from "../../../utils/integrantesCeibo.json";
import useTranslation from "next-translate/useTranslation";

function PeopleWorth() {
  const { t } = useTranslation("common");
  const peopleWorthTitle = t("peopleWorthTitle");
  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" ");
  };

  // TODO
  const ceibers = ceibersJson.filter(
    (ceiber) =>
      ceiber.nombre === "VICTORIA SELVA" ||
      ceiber.nombre === "BELTRÁN GANDOLFO" ||
      ceiber.nombre === "SOFÍA RONCHI RIVARA" ||
      ceiber.nombre === "SANTIAGO SIN" ||
      ceiber.nombre === "MARTÍN IUVARO"
  );

  return (
    <section className="pt-70 mb-3 people-worth">
      {/* TITULO */}
      <div className="section-title adn-title">
        <h2> {peopleWorthTitle}</h2>
      </div>

      {/*  CONTENT */}
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
                  src={ceiber?.ceiber?.img}
                  width={200}
                  height={200}
                  layout="intrinsic"
                  alt="ceiber"
                />
              </div>
              <div className="people-worth-quote">
                <p>{ceiber.ceiber.quote}</p>
              </div>

              <div className="people-worth-card-footer">
                <div className="people-worth-card-question-wrapper">
                  <p className="people-worth-card-question">{`¿Cómo describe ${ceiber?.ceiber?.nikname} su día en Ceibo?`}</p>
                </div>
                <div className="people-worth-card-tag-wrapper">
                  <ul className="people-worth-card-tag">
                    {ceiber?.ceiber?.tags?.map((tag, i) => (
                      <li key={i}>
                        <a href="#">{tag}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="row people-worth-responsive">
                  <div className="col-3 col-sm-4 people-worth-linkedin-wrapper people-worth-linkedin-wrapper-responsive">
                    <a href={ceiber?.linkedinurl} target="blank">
                      <i className="fa-brands fa-linkedin fa-xl people-worth-linkedin"></i>
                    </a>
                  </div>
                  <div className="col-9 col-sm-8 people-worth-ceiber-wrapper">
                    <p className="people-worth-ceiber">{`${titleCase(
                      ceiber?.nombre
                    )}, ${titleCase(ceiber?.posicion)}`}</p>
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

export default PeopleWorth;
