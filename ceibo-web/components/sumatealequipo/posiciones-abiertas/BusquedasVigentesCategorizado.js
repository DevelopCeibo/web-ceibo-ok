import React from "react";
import useTranslation from "next-translate/useTranslation";
import vacantes from "../../../utils/vacantes.utils";
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
        <BusquedasVigentesIndividual arregloDeVacantes={vacantes} />
    </div>
  );
};

export default BusquedasVigentes;
