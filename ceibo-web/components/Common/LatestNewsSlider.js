import React from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import publications from "../../utils/publicaciones.json"
import insights from '../../utils/insights.json'
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const LatestNewsSlider = ({type}) => {
  const { t } = useTranslation("common")
  let publicacionesTitle;
  let vermas;
  let verpublis;
  let seccion;
  let publicaciones;
  let bc;
  if (type === 'publicaciones') {
    publicacionesTitle = t("publicacionesTitle")
    vermas = t("vermas");
    verpublis = t("verpublis")
    seccion = 'publicaciones'
    publicaciones = publications
  } else { // insights
    publicacionesTitle = t("leeInsights")
    vermas = t("leerArt");
    verpublis = t("verInsighs")
    seccion = 'insights'
    publicaciones = insights
    bc = {backgroundColor: '#E6E6E6'}
  }


  const { locale } = useRouter()
  // si locale == en, los titulos de publicaciones van en ingles

  return (
    <>
      <div className="blog-area ptb-100" style={bc}>
        <div className="container" >
          <div className="section-title">
            <h2 style={{}}>{publicacionesTitle}</h2>
          </div>

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
                <div className="single-blog-item">
                  <div className="blog-image">
                    <Link href={`/${seccion}/${publi["path-url"]}`}>
                      <a>
                        <img
                          src={publi.img}
                          // src="/images-ceibo/publicaciones/IAE-600x403.png"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>

                  <div
                    className={`blog-post-content ${
                      locale == "es" ? "blog" : ""
                    }`}
                  >
                    {/* <span className="date">Feb 15, 2022</span> */}
                    <h3>
                      <Link href={`/${seccion}/${publi["path-url"]}`}>
                        <a>{locale == "en" ? publi.titleEN : publi.title}</a>
                      </Link>
                    </h3>

                    <p>
                      {locale == "es"
                        ? publi.desc
                        : "*This article is written in Spanish"}
                    </p>
                    <Link href={`/${seccion}/${publi["path-url"]}`}>
                      <a className="read-more-btn">
                        {vermas} <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="container btn-two-container">
            <Link href={`/${seccion}/`}>
              <a className="default-btn-two">
                {verpublis}
                <i className="fas fa-chevron-right"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNewsSlider
