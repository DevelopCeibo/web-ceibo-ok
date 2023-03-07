import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const FeedbackSumate = () => {
  return (
    <>
      <div className="feedback-area ptb-70 ">
        <div className="container">
          <div className="feedback-list">
            <Swiper
              pagination={{
                clickable: true,
              }}
              spaceBetween={30}
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 6000 }}
              className="feedback-slides"
            >
              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    "El equipo humano tiene muy buenos valores y siempre está
                    dispuesto a ayudar cuando otro lo necesita… hay un gran
                    compañerismo y trabajo en equipo"
                  </p>
                  <span>Manager</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    "Desde el primer día que entré a la empresa sentí que
                    depositaban confianza en mi"
                  </p>

                  <span>Associate</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackSumate
