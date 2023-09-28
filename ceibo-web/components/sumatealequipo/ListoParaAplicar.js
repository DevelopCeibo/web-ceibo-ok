import React from "react";
import useTranslation from "next-translate/useTranslation";

const ListoParaAplicar = () => {
  const { t } = useTranslation("common");
  const title = t("listoParaAplicarTitle");
  const description = t("listoParaAplicarDescription");

  return (
    <div className="my-5 pb-100">
      <div className="d-flex flex-column align-items-center background-maroon listo-para-aplicar">
        <h2 className="bold text-white my-4">{title}</h2>
        <a href="/sumate-al-equipo/proceso-de-reclutamiento">
          <h6 className="bold mb-4 px-4 py-3 text-center">{description}</h6>
        </a>
      </div>
    </div>
  );
};

export default ListoParaAplicar;
