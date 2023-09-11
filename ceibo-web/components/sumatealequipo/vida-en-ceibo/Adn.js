import React from "react";
import Image from "next/image";

function Adn() {
  const adnTitle = "ADN Ceibo Digital";
  const adnText =
    "El ADN de nuestra cultura está compuesto por 4 pilares que se complementan buscando que la experiencia de los Ceibers dentro de la compañia no sólo sea work hard sino también play hard.";
  const pertenenciaTitle = "Sentido de pertenencia";
  const pertenenciaText =
    "A través de actividades recreativas, eventos y presencialidad, buscamos que cada colaborador se sienta una parte clave de Ceibo, fomentando así el trabajo en equipo, el compañerismo y el buen clima laboral.";
  const empatiaTitle = "Empatía y confianza";
  const empatiaText =
    "Creamos espacios distendidos y entretenidos donde nuestros colaboradores puedan relacionarse de manera personal, favoreciendo la empatía y la confianza para así fomentar el compañerismo y el team building.";
  const wellbeingTitle = "Wellbeing";
  const wellbeingText =
    "Promovemos el work-life balance y el bienestar general de nuestros colaboradores a través de actividades deportivas, yoga, tips de salud, charlas con especialistas y un buen balance.";
  const reconocimientoTitle = "Reconocimiento";
  const reconocimientoText =
    "Buscamos reconocer las acciones y actitudes que se alinean a los valores que nos identifican, celebrando a quienes los representen. Dos veces al año, se reconocen a los “embajadores” que encarnan los valores de las Competencias Core (inspirar, ganar, emprender, transformar).";
  return (
    <section className="pt-70 mb-3">
      {/* TITULO */}
      <div className="section-title adn-title">
        <h2> {adnTitle}</h2>
        <h5 className="adn-subtitle adn-responsive">{adnText}</h5>
      </div>

      {/*  CONTENT */}
      <section className="container">
        <div className="row pt-3">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <article className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/pertenencia.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="sentido de pertenencia"
                />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{pertenenciaTitle}</h4>
                <p>{pertenenciaText}</p>
              </div>
            </article>
            <article className="row pt-3">
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{empatiaTitle}</h4>
                <p>{empatiaText}</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/empatia.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="empatia y confianza"
                />
              </div>
            </article>
            <article className="row pt-3">
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/wellbeing.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="wellbeing"
                />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{wellbeingTitle}</h4>
                <p>{wellbeingText}</p>
              </div>
            </article>
            <article className="row pt-3">
              <div className="col-lg-10 col-md-10 col-sm-12 adn-responsive">
                <h4>{reconocimientoTitle}</h4>
                <p>{reconocimientoText}</p>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 adn-responsive">
                <Image
                  src="/images-ceibo/sumatealequipo/vidaEnCeibo/reconocimiento.png"
                  width={100}
                  height={100}
                  layout="intrinsic"
                  alt="reconocimiento"
                />
              </div>
            </article>
          </div>
          <div
            className="col-lg-5 col-md-5 col-sm-12"
          >
            <Image
              src="/images-ceibo/sumatealequipo/vidaEnCeibo/adn.png"
              width={1572}
              height={1850}
              layout="intrinsic"
              alt="adn ceibo"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Adn;
