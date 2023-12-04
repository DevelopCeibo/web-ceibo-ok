import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRoleTypeContext } from "../../pages/context/roleType";

const PasosParaElProceso = () => {
  const { locale } = useRouter();
  const [roleType, setRoleType] = useRoleTypeContext()

  const { t } = useTranslation("common");
  const consultants = t("consultants")
  const specialists = t("specialists")
  const pasosproceso = t("pasosproceso");
  const paso1Subt = t("paso1Subt");
  const paso1Txt = t("paso1Txt");
  const paso2Subt = t("paso2Subt");
  const paso2Txt = t("paso2Txt");
  const paso3Subt = t("paso3Subt");
  const paso3Txt = t("paso3Txt");
  const paso4Subt = t("paso4Subt");
  const paso4Txt = t("paso4Txt");
  const paso5Subt = t("paso5Subt");
  const paso5Txt = t("paso5Txt");
  const paso6Subt = t("paso6Subt");
  const paso6Txt = t("paso6Txt");


  const pasosData = [

    {
      id: 1,
      title: paso1Subt,
      subtitle: `${locale == "es" ? "Paso" : "Step"} 1`,
      detail: paso1Txt,
    },
    {
      id: 2,
      title: paso2Subt,
      subtitle: `${locale == "es" ? "Paso" : "Step"} 2`,
      detail: paso2Txt,
    },
    {
      id: 3,
      title: paso3Subt,
      subtitle: `${locale == "es" ? "Paso" : "Step"} 3`,
      detail: paso3Txt,
    },
    {
      id: 4,
      title: paso4Subt,
      subtitle: `${locale == "es" ? "Paso" : "Step"} 4`,
      detail: paso4Txt,
    },
    {
      id: 5,
      title: paso5Subt,
      subtitle: `${locale == "es" ? "Paso" : "Step"} 5`,
      detail: paso5Txt,
    },
    {
      id: 6,
      title: paso6Subt,
      subtitle: `${locale == "es" ? "Paso" : "Step"} 6`,
      detail: paso6Txt,
    },
  ];

  const [pasosContent, setpasosContent] = React.useState(pasosData[0]);

  const handleChangePasos = (id) => {
    const pasoSel = pasosData.find((obj) => obj.id === id);
    setpasosContent(pasoSel);
  };

  return (
    <div className="pb-100 mb-1 mt-3">\

      <div className="container ">
        <div className="bottom-line mb-5">
          <button className={roleType === 'consultant' ? 'selected-item me-4' : 'unselected-item me-4'} onClick={() => setRoleType('consultant')}>{consultants}</button>
          <button className={roleType === 'specialist' ? 'selected-item' : 'unselected-item'} onClick={() => setRoleType('specialist')} >{specialists}</button>
        </div>
        <div className="section-title sumatealequipo">
          <h2>{pasosproceso}</h2>
        </div>
        <div className="row justify-content-center mt-5">

          {pasosData.map((paso) => {
            return (<div className="col-6 col-md-4 col-sm-3 col-lg-2">
              <div className="ccore-card" onClick={() => handleChangePasos(paso.id)}>
                <img
                  src={`/images-ceibo/sumatealequipo/paso-0${paso.id}.png`}
                  alt="image"
                  width={140}
                />

                <div className="content">
                  <h6>{locale == "es" ? "Paso" : "Step"} {paso.id}</h6>
                </div>
              </div>
            </div>)

          })}

          <section className="d-flex row mt-5">
            <article className="col-12 col-sm-12 col-md-4 pasos">
              <h4> {pasosContent?.subtitle}</h4>
              <h2>{pasosContent?.title}</h2>
            </article>
            <article className="col-12 col-sm-12 col-md-8 pt-4">
              <p>{pasosContent?.detail}</p>
            </article>
          </section>
          <div className="d-flex row mt-4 align-items-center justify-content-center">
            <IconButton
              style={{ width: "fit-content", color: "#b72837" }}
              onClick={() =>
                handleChangePasos(
                  pasosContent.id == 1 ? 6 : pasosContent.id - 1
                )
              }
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              style={{ width: "fit-content", color: "#b72837" }}
              onClick={() =>
                handleChangePasos(
                  pasosContent.id == 6 ? 1 : pasosContent.id + 1
                )
              }
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasosParaElProceso;
