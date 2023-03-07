import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const SwiperFeedback = () => {
  const { locale } = useRouter()

  const { t } = useTranslation("common")
  const quote1 = t("quote1")
  const quote2 = t("quote2")
  const quote3 = t("quote3")
  const quote4 = t("quote4")
  const quote5 = t("quote5")
  const quote6 = t("quote6")

  return (
    <>
      <div className="feedback-area pt-100 pb-100">
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
                  <p>"{quote1}"</p>
                  <span>Senior Associate</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>"{quote2}"</p>

                  <span>Partner</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>"{quote3}"</p>
                  <span>Senior Associate</span>
                </div>
              </SwiperSlide>
              {locale == "es" && (
                <>
                  {" "}
                  <SwiperSlide>
                    <div className="single-feedback">
                      <p>"{quote4}"</p>
                      <span>Partner</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-feedback">
                      <p>"{quote5}"</p>
                      <span>Manager</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-feedback">
                      <p>"{quote6}"</p>
                      <span>Senior Associate</span>
                    </div>
                  </SwiperSlide>
                </>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default SwiperFeedback
