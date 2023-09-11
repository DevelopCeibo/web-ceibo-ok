import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import publicaciones from "../../../utils/publicaciones.json";

import LatestNewsSlider from "../../../components/Common/LatestNewsSlider";

function PeopleWorth() {
  const seccion = "publicaciones";
  const vermas = "Ver más";

  const adnTitle = "¿Qué es lo que nuestra gente más valora?";
  const quote =
    "Ceibo me da la oportunidad de trabajar con gente que busca como uno encontrar su mejor versión constantemente y aprender de personas que tienen su expertise en diferentes áreas de conocimiento que me interesan, cómo pueden ser tecnología y desarrollo.";
  const question = '¿Cómo describe Corcho de su día en Ceibo?';

  const { locale } = useRouter();
  // si locale == en, los titulos de publicaciones van en ingles

  return (
    <section className="pt-70 mb-3">
      {/* TITULO */}
      <div className="section-title adn-title">
        <h2> {adnTitle}</h2>
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
        {publicaciones.map((publi, i) => (
          <SwiperSlide key={i}>
            <div className="people-worth-bc">
                <div className="people-worth-img">
                  <Image
                    src="/images-ceibo/sumatealequipo/vidaEnCeibo/people-worth/beltran.png"
                    width={200}
                    height={200}
                    layout="intrinsic"
                    alt="ceiber"
                  />
                </div>
                <div className="people-worth-quote">
                  <p>{quote}</p>
                </div>
              <div className='people-worth-card-footer'>
                <div className='people-worth-card-question-wrapper'>
                  <p className='people-worth-card-question'>{question}</p>
                </div>
                <div className='people-worth-card-tag-wrapper'>
                  <ul className='people-worth-card-tag'>
                    <li>
                      <a href='#'>{'dinamico'}</a>
                    </li>
                    <li>
                      <a href='#'>{'aprendizaje'}</a>
                    </li>
                    <li>
                      <a href='#'>{'autonomia'}</a>
                    </li>
                  </ul>
                </div>
                <div className='row people-worth-responsive'>
                  <div className='col-lg-2 people-worth-linkedin-wrapper people-worth-linkedin-wrapper-responsive'>
                    <a href={"https://www.google.com/"} target="blank">
                      <i className="fa-brands fa-linkedin fa-xl people-worth-linkedin"></i>
                    </a>
                  </div>
                  <div className='col-lg-10 people-worth-ceiber-wrapper'>
                    <p className='people-worth-ceiber'>{'Beltrán Gandolfo Gahan, Senior Associate'}</p>
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
