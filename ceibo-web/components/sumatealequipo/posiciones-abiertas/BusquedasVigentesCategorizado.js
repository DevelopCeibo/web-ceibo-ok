import React from "react";
import useTranslation from "next-translate/useTranslation";
import vacantes from "../../../utils/vacantes.json";
import BusquedasVigentesIndividual from "./BusquedasVigentesIndividual";

const BusquedasVigentes = () => {
  const { t } = useTranslation("common");
  const rolesParaConsultores = t("rolesParaConsultores");
  const rolesParaEspecialistas = t("rolesParaEspecialistas");

  const vacantesConsultores = vacantes.filter(
    (vac) => vac.roleType === "consultant"
  );
  const vacantesEspecialistas = vacantes.filter(
    (vac) => vac.roleType === "specialist"
  );

  return (
    <div className="pt-70 pb-60 mb-3 mt-4">
      <div className="container">
        <div className="section-title " id="busquedas-vigentes">
          <h2>{rolesParaConsultores}</h2>
        </div>

        <BusquedasVigentesIndividual arregloDeVacantes={vacantesConsultores} />

        <div className="container mt-6">
          <div className="section-title " id="busquedas-vigentes">
            <h2>{rolesParaEspecialistas}</h2>
          </div>

          <BusquedasVigentesIndividual
            arregloDeVacantes={vacantesEspecialistas}
          />
        </div>
      </div>
    </div>
  );
};

export default BusquedasVigentes;
