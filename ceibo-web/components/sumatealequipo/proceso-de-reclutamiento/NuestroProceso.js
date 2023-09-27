import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const NuestroProceso = () => {
  const { t } = useTranslation("common");
  const resolver = t("resolver")
  const comunicacion = t("comunicacion")
  const trabajoequipo = t("trabajoequipo")
  const desarrollo = t("desarrollo")

  const procesoReclutamientoTitle = "Nuestro Proceso"; // t("procesoReclutamientoTitle");
  const procesoReclutamientoText =
    "En CEIBO, nuestro proceso de reclutamiento ha sido diseñado cuidadosamente para garantizar que los candidatos cumplan con todas las expectativas requeridas para nuestras búsquedas y estén alineados con nuestra cultura y valores. Durante este proceso, brindamos a los candidatos la oportunidad de sumergirse en la esencia de CEIBO, interactuando con diversos colaboradores que provienen de distintos perfiles y experiencias.";
  const procesoReclutamientoEvaluacionTitle = "¿Qué evaluamos?";
  const procesoReclutamientoEvaluacionText =
    "Durante todo el proceso nosotros evaluamos 4 dimensiones claves, que son las mismas con las que evaluamos a todos los colaboradores durante su carrera en Ceibo:";
  const procesoReclutamientoTextFinal = 'Al evaluar estas cuatro dimensiones clave durante el proceso de reclutamiento, podemos identificar a candidatos que poseen la capacidad de resolver problemas complejos, habilidades de comunicación efectivas, la disposición para colaborar en equipos y un deseo constante de desarrollo profesional. Estas cualidades son fundamentales para tener consultores altamente competentes y preparados, capaces de enfrentar los desafíos cambiantes del entorno empresarial y brindar soluciones innovadoras a los clientes.'

  return (
    <section className="pt-70 mb-5">
      <section className="container">
        <section className="row">
          <article className="col-lg-8 col-md-8 col-sm-12">
            {/* TITLE */}
            <div className="section-title esp-title">
              <h2> {procesoReclutamientoTitle}</h2>
              <p className="recruiting-title-text">
                {procesoReclutamientoText}
              </p>
            </div>
          </article>
          <article className="col-lg-4 col-md-4 col-sm-12">
            <Image
              src="/images-ceibo/sumatealequipo/recruiting/ofertas-de-empleo-en-tecnologia.jpg"
              width={300}
              height={300}
              layout="intrinsic"
              alt="oferta de empleo"
            />
          </article>
        </section>
        <section className="row pt-3">
          <article className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-title esp-title">
              <h3> {procesoReclutamientoEvaluacionTitle}</h3>
              <p className="recruiting-eva-text">
                {procesoReclutamientoEvaluacionText}
              </p>
            </div>
          </article>
          <section className="row justify-content-center">
            <article className="col-6 col-sm-4 col-lg-3">
              <div className="ccore-card">
                <img
                  src="/images-ceibo/sumatealequipo/problemas.png"
                  alt="image"
                  width={150}
                />
                <div className="content">
                  <h6>{resolver}</h6>
                </div>
              </div>
            </article>

            <article className="col-6 col-sm-4 col-lg-3 ">
              <div className="ccore-card">
                <img
                  src="/images-ceibo/sumatealequipo/comunicacion.png"
                  alt="image"
                  width={150}
                />
                <div className="content">
                  <h6>{comunicacion}</h6>
                </div>
              </div>
            </article>

            <article className="col-6 col-sm-4 col-lg-3">
              <div className="ccore-card">
                <img
                  src="/images-ceibo/sumatealequipo/trabajo-equipo.png"
                  alt="image"
                  width={150}
                />
                <div className="content">
                  <h6>{trabajoequipo}</h6>
                </div>
              </div>
            </article>

            <article className="col-6 col-sm-4 col-lg-3">
              <div className="ccore-card">
                <img
                  src="/images-ceibo/sumatealequipo/desarrollo.png"
                  alt="image"
                  width={150}
                />
                <div className="content">
                  <h6>{desarrollo}</h6>
                </div>
              </div>
            </article>
          </section>
          <article className="row pt-5">
            <div className="section-title esp-title">
              <p className="recruiting-eva-text recruiting-eva-text-final">
                {procesoReclutamientoTextFinal}
              </p>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
};

export default NuestroProceso;
