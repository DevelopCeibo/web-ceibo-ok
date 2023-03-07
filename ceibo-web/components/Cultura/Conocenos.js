import React from "react"
import Link from "next/link"
import Image from "next/image"

import integrantes from "../../utils/integrantesCeibo.json"
import useTranslation from "next-translate/useTranslation"

const Conocenos = () => {
  const { t } = useTranslation("common")
  const conocenos = t("conocenos")

  return (
    <div className="pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h3 className="red-tittle">{conocenos}</h3>
        </div>
        <div className="row justify-content-center align-items-center conocenos-container ">
          {integrantes.map((persona) => (
            <article
              className="col-6 col-sm-4 col-md-3 col-lg-2 pb-2 persona-container "
              key={persona.nombre}
            >
              <section className="img-container">
                <Image
                  src={persona.src}
                  className="img-persona"
                  width={200}
                  height={200}
                  layout="intrinsic"
                  // style={{ width: "100%" }}
                />
                {/* <img src={persona.src} className="img-persona" /> */}
              </section>
              <section>
                <a
                  href={persona.linkedinurl}
                  className="linkedinurl"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <p className="name">{persona.nombre}</p>
                <p className="position">{persona.posicion}</p>
              </section>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Conocenos
