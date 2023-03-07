import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import useTranslation from "next-translate/useTranslation"

const Partner = () => {
  const { t } = useTranslation("common")
  const clientes = t("clientes")

  return (
    <>
      <div className="partner-area pt-5 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>{clientes}</h2>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000 }}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/0036_galicia.png"
                      alt="galicia"
                      className="img-grey"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/0029_ingram.png"
                      alt="Ingram"
                      className="img-grey"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/0031_scotiabank.png"
                      alt="scotiabank"
                      className="img-grey"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/0044_zurich.png"
                      alt="zurich"
                      className="img-grey"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/banco-valores.png"
                      alt="banco de valores"
                      className="img-grey"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/upl.png"
                      alt="UPL"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/wom.png"
                      alt="WOM"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/0037_lenovo.png"
                      alt="Lenovo"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/0010_prosegur.png"
                      alt="prosegur"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/fraccionate.png"
                      alt="fraccionate"
                      className="img-grey"
                    />
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/CIE-Logo.png"
                      alt="CIE"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Dominus-logo.png"
                      alt="Dominus"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Ebiw-logo.jpeg"
                      alt="Ebiw"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Farmacenter-logo.png"
                      alt="Farmacenter"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Gador-logo.jpeg"
                      alt="Gador"
                      className="img-grey"
                    />
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/id-logistics-logo.png"
                      alt="id-logistics"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/logo-invera.png"
                      alt="invera"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Negofin-logo.png"
                      alt="Negofin"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Teengo-logo.jpeg"
                      alt="Teengo"
                      className="img-grey"
                    />
                  </div>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <div className="single-partner">
                    <img
                      src="/images-ceibo/clientes-iconos/Telecom_logo_2021.svg.png"
                      alt="Telecom_logo_2021"
                      className="img-grey"
                    />
                  </div>
                </div>{" "}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Partner
