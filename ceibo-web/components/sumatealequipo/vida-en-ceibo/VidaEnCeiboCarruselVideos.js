import React from "react";
import uniqid from "uniqid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import useTranslation from "next-translate/useTranslation";
import CardWithVideo from "../../Common/CardWithVideo";

const VidaEnCeiboCarruselVideos = () => {
  const { t } = useTranslation("common");
  const title = t("comoEsTrabajarEnCeiboTitle");
  const videoContentArray = t(
    "comoEsTrabajarEnCeiboVideoContent",
    {},
    { returnObjects: true }
  );

  return (
    <div className="pt-5">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          // autoplay={{ delay: 4000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              // slidesPerGroup: 2,
            },
          }}
          className="feedback-slides"
        >
          {videoContentArray.map((video) => {
            return (
              <SwiperSlide key={uniqid()}>
                <div className="row align-items-center justify-content-center">
                  <div className="d-flex justify-content-center">
                    <CardWithVideo
                      title={video.title}
                      videoURL={video.videoURL}
                      text={video.text}
                    />
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

export default VidaEnCeiboCarruselVideos;
