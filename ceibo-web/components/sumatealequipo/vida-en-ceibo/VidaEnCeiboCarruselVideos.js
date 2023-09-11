import React from "react";
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
    <div className="pt-5 pb-60">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={2}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="feedback-slides"
        >
          {videoContentArray.map((video) => {
            return (
              <SwiperSlide>
                <div className="row align-items-center justify-content-center">
                  <div className="col-12 col-lg-12 col-md-12">
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
