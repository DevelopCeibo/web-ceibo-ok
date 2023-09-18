import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Especializaciones = () => {
  const { t } = useTranslation("common");
  const espacializacionTitle = 'Especializaciones' // t("espacializacionTitle");
  const especializacionText = 'En Ceibo, creemos en forjar un camino profesional único y lleno de posibilidades para cada colaborador. Y es por eso que los consultores tienen la oportunidad de especializarse en tres verticales distintas: datos, growth marketing y desarrollo. Estas especializaciones se pueden dar a través de capacitaciones específicas, experiencia práctica en proyectos relacionados, y trainings tanto dentro de la empresa como en colaboración con instituciones académica. La oportunidad de especializarse permite a los Ceibers fortalecer sus habilidades técnicas, adquirir experiencia práctica y convertirse en líderes en el campo de especialización elegido.'
  const dataTitle = 'Datos'
  const dataText = 'En un mundo impulsando por la información, nuestros Especialistas en Datos son los encargados de extraer de ella significado y valor. Su dominio de herramientas y técnicas analíticas les permite explorar conjuntos de datos con precisión, identificando patrones y tendencias que sustentan decisiones estratégicas.'
  const growthTitle = "Growth Marketing"
  const growthText = 'Nuestros expertos en Growth Marketing ayudan a impulsar el crecimiento de nuestros clientes  mediante estrategias de marketing efectivas. No solo entienden las métricas, sino que también saben cómo traducirlas en estrategias innovadoras y experimentos que generan un impacto medible y escalable.'
  const developerTitle = 'Desarrollo'
  const developerText = 'Nuestros especialistas en desarrollo son los creadores de las aplicaciones, sistemas y programas que transforman ideas en soluciones concretas. Combinando su ingenio creativo con habilidades técnicas sólidas, estos expertos trabajan en la intersección entre la creatividad y la funcionalidad, asegurando que cada línea de código sea una puerta abierta hacia experiencias digitales intuitivas y fluidas.'
  return (
    <section className="pt-70 mb-5">
      {/* TITULO */}
      <div className="section-title esp-title">
        <h2> {espacializacionTitle}</h2>
        <p className="esp-subtitle esp-responsive">{especializacionText}</p>
      </div>
      
      {/*  CONTENT */}
      <section className="container">
        <article className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/datos.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="data specialist"
            />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive"
          >
            <h4 className='esp-card-title'>{dataTitle}</h4>
            <p>{dataText}</p>
          </div>
        </article>
        <article className="row pt-3 esp-reverse">
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive esp-ra">
            <h4 className='esp-card-title'>{growthTitle}</h4>
            <p>{growthText}</p>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/growth-mkt.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="growth marketing"
            />
          </div>
        </article>
        <article className="row pt-3">
          <div className="col-lg-2 col-md-2 col-sm-12 esp-responsive">
            <Image
              src="/images-ceibo/sumatealequipo/desarrollo/desarrollo.png"
              width={200}
              height={200}
              layout="intrinsic"
              alt="developer"
            />
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 esp-card-text-wrapper esp-responsive"
          >
            <h4 className='esp-card-title'>{developerTitle}</h4>
            <p>{developerText}</p>
          </div>
        </article>
      </section>

    </section>
  )
};

export default Especializaciones;
