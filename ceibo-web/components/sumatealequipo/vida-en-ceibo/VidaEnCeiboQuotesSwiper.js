import React from "react";
import uniqid from "uniqid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import useTranslation from "next-translate/useTranslation";

const VidaEnCeiboQuotesSwiper = () => {
  const { t } = useTranslation("common");
  const title = t("vidaEnCeiboQuotesTitle");
  const quotes = t("vidaEnCeiboQuotes", {}, { returnObjects: true });

  return (
    <div className="background-grey py-3 mt-5">
      <div className="container">
        <div className="section-title mb-4">
          <h3 className="ceibo-green">{title}</h3>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="feedback-slides"
        >
          {quotes.map((quote) => {
            return (
              <SwiperSlide key={uniqid()}>
                <div className="row align-items-center justify-content-center">
                  <div className="col-12">
                    <div>
                      <p className="vida-en-ceibo-quote">{quote.text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default VidaEnCeiboQuotesSwiper;
