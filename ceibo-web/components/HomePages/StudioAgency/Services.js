import React from "react"
import Link from "next/link"

const Services = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Qué hacemos</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="service-card-one white-bg border">
                <i className="pe-7s-rocket bg-13c4a1"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Estrategia</a>
                  </Link>
                </h3>
                <p>
                  Estudiamos con el cliente la evolución sustentable hacia el
                  negocio digital, diseñamos la forma de alcanzarla y
                  coordinamos a la operación para que la implemente.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="service-card-one white-bg border">
                <i className="pe-7s-diamond bg-6610f2"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Excelencia Operacional</a>
                  </Link>
                </h3>
                <p>
                  Buscamos desarrollar e instalar una manera diferencial de
                  trabajar para lograr los resultados de un negocio digital; en
                  los tiempos, costos y calidad planificados.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="service-card-one white-bg border">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="service-card-one white-bg border">
                <i className="pe-7s-target bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Creative Conceptions</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="service-card-one white-bg border">
                <i className="pe-7s-film bg-00d280"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Motion Graphics</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="service-card-one white-bg border">
                <i className="pe-7s-users bg-ff612f"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Workshops</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
