import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Especializaciones = () => {
  const { t } = useTranslation("common");
  const espacializacionTitle = 'Especializaciones' // t("espacializacionTitle");
  const especializacionText = 'En Ceibo, creemos en forjar un camino profesional único y lleno de posibilidades para cada colaborador. Y es por eso que los consultores tienen la oportunidad de especializarse en tres verticales distintas: datos, growth marketing y desarrollo. Estas especializaciones se pueden dar a través de capacitaciones específicas, experiencia práctica en proyectos relacionados, y trainings tanto dentro de la empresa como en colaboración con instituciones académica. La oportunidad de especializarse permite a los Ceibers fortalecer sus habilidades técnicas, adquirir experiencia práctica y convertirse en líderes en el campo de especialización elegido.'
  return (
    <section className="pt-70 mb-3">
      {/* TITULO */}
      <div className="section-title esp-title">
        <h2> {espacializacionTitle}</h2>
        <h5 className="esp-subtitle esp-responsive">{especializacionText}</h5>
      </div>
    </section>
  )
};

export default Especializaciones;
