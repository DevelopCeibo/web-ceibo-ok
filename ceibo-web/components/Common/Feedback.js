import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const Feedback = () => {
  return (
    <>
      <div className="feedback-area ptb-70 mt-5">
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
                    "El concepto de liderazgo es cross a lo largo de Ceibo, no
                    solo se pretende que ciertos roles lideren, sino que todos
                    los miembros seamos capaces de liderar y aportar desde
                    cualquier rol"
                  </p>
                  <span>Senior Associate</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    "Ceibo es una empresa en donde crecés constantemente, cada
                    proyecto es un nuevo desafío y es algo que me encanta."
                  </p>

                  <span>Manager</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    La cultura en Ceibo se ejemplifica claramente con dos
                    conceptos: compromiso y cooperación. El compromiso de todos
                    los miembros para llevar adelante los proyectos y la
                    cooperación dentro del equipo para estar siempre dispuesto a
                    dar una mano
                  </p>
                  <span>Senior Associate</span>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    "Siendo miembro de Comunidad Ceibo el orden es muy
                    importante, siempre planificamos nuestro mes y encontramos
                    un equilibrio que mejor se ajuste a las dos partes. Pero
                    siempre con el objetivo de cumplir las metas."
                  </p>
                  <span>Senior Specialist</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="single-feedback">
                  <p>
                    "En Ceibo no tenemos sorpresas con la gente, durante el
                    proceso de recruiting medimos las mismas capacidades que se
                    miden después en nuestros proyectos. Si a un candidato le va
                    bien en el recruiting, le va bien en Ceibo."
                  </p>
                  <span>Partner</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback
