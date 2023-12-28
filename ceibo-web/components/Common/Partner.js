import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Mousewheel } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import "swiper/css/mousewheel"
import useTranslation from "next-translate/useTranslation"
import Image from "next/image"

const Partner = () => {
  const { t } = useTranslation("common")
  const clientes = t("clientes")

  const partnerImages = [
    { src: "/images-ceibo/clientes-iconos/0036_galicia.png", width: 200, alt: "Galicia" },
    { src: "/images-ceibo/clientes-iconos/0029_ingram.png", width: 200, alt: "Ingram" },
    { src: "/images-ceibo/clientes-iconos/0031_scotiabank.png", width: 200, alt: "Scotiabank" },
    { src: "/images-ceibo/clientes-iconos/0044_zurich.png", width: 200, alt: "Zurich" },
    { src: "/images-ceibo/clientes-iconos/banco-valores.png", width: 200, alt: "Banco de Valores" },
    { src: "/images-ceibo/clientes-iconos/upl.png", width: 200, alt: "UPL" },
    { src: "/images-ceibo/clientes-iconos/wom.png", width: 200, alt: "WOM" },
    { src: "/images-ceibo/clientes-iconos/0037_lenovo.png", width: 200, alt: "Lenovo" },
    { src: "/images-ceibo/clientes-iconos/0010_prosegur.png", width: 200, alt: "Prosegur" },
    { src: "/images-ceibo/clientes-iconos/fraccionate.png", width: 200, alt: "Fraccionate" },
    { src: "/images-ceibo/clientes-iconos/CIE-Logo.png", width: 140, alt: "CIE" },
    { src: "/images-ceibo/clientes-iconos/Dominus-logo.png", width: 120, alt: "Dominus" },
    { src: "/images-ceibo/clientes-iconos/Ebiw-logo.jpeg", width: 140, alt: "Ebiw" },
    { src: "/images-ceibo/clientes-iconos/Farmacenter-logo.png", width: 140, alt: "Farmacenter" },
    { src: "/images-ceibo/clientes-iconos/Gador-logo.jpeg", width: 140, alt: "Gador" },
    { src: "/images-ceibo/clientes-iconos/id-logistics-logo.png", width: 200, alt: "ID Logistics" },
    { src: "/images-ceibo/clientes-iconos/logo-invera.png", width: 200, alt: "Invera" },
    { src: "/images-ceibo/clientes-iconos/Negofin-logo.png", width: 200, alt: "Negofin" },
    { src: "/images-ceibo/clientes-iconos/Teengo-logo.jpeg", width: 200, alt: "Teengo" },
    { src: "/images-ceibo/clientes-iconos/Telecom_logo_2021.svg.png", width: 200, alt: "Telecom Logo 2021" },
  ];
  
  

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
            spaceBetween={0}
            slidesPerView={2}
            slidesPerGroup={2}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup:3
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup:4

              },
              // when window width is >= 640px
              1200: {
                slidesPerView: 5,
                spaceBetween: 40,
                slidesPerGroup:5

              }}}
            mousewheel={true}
            modules={[Pagination, Autoplay, Mousewheel]}
            autoplay={{ delay: 4000 }}
            className="feedback-slides"
          >

            {partnerImages.map((image,i)=>{
              return (
              <SwiperSlide>
                {/* <div className="row align-items-center justify-content-center" key={i}> */}
                  {/* <div className="col-lg-2 col-6 col-sm-4"> */}
                    {/* <div className="single-partner"> */}
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-grey"
                        width={image.width}
                      />
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
              </SwiperSlide>)
            })}
            </Swiper>

        </div>
      </div>
    </>
  )
}

export default Partner
