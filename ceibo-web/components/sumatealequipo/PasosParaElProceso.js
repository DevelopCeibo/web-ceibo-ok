import React, { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRoleTypeContext } from "../../context/roleType";
import uniqid from 'uniqid'

const PasosParaElProceso = () => {
  const { locale } = useRouter();
  const [roleType, setRoleType] = useRoleTypeContext()
  const { t } = useTranslation("common");
  const consultants = t("consultants")
  const specialists = t("specialists")
  const pasosproceso = t("pasosproceso");
  const step = t("step")
  const steps = {
    consultant: t("consultantSteps", {}, { returnObjects: true }),
    specialist: t("specialistSteps", {}, { returnObjects: true })
  }
  const [selectedSteps, setSelectedSteps] = useState(steps[roleType])
  const [stepContent, setStepContent] = useState(selectedSteps[0]);

  const handleChangeStep = (id) => {
    const newStep = selectedSteps.find((obj) => obj.id === id);
    setStepContent(newStep);
  };

  useEffect(() => {
    setSelectedSteps(steps[roleType]);
    setStepContent(steps[roleType][0]);
  }, [roleType, locale]);



  return (
    <div className="pb-100 mb-2">

      <div className="container">
        <div className="section-title sumatealequipo">
          <h2>{pasosproceso}</h2>
        </div>

        <div className="row justify-content-center mt-5">

          <div className="row justify-content-center d-none d-md-flex">
            {selectedSteps.map((paso) => {
              return (<div className="col-6 col-md-4 col-sm-3 col-lg-2" key={uniqid()}>
                <div className="ccore-card" onClick={() => handleChangeStep(paso.id)}>
                  <img
                    src={`/images-ceibo/sumatealequipo/paso-0${paso.id}.png`}
                    alt="image"
                    width={140}
                  />

                  <div className="content">
                    <h6>{step} {paso.id}</h6>
                  </div>
                </div>
              </div>)

            })}

          </div>
          <div className="row justify-content-center d-md-none">

            <div className="col-6 col-md-4 col-sm-3 col-lg-2" key={uniqid()}>
              <div className="ccore-card" onClick={() => handleChangeStep(stepContent.id)}>
                <img
                  src={`/images-ceibo/sumatealequipo/paso-0${stepContent.id}.png`}
                  alt="image"
                  width={140}
                />

                <div className="content">
                  <h6>{step} {stepContent.id}</h6>
                </div>
              </div>
            </div>

          </div>




          <section className="d-flex row mt-5 step-content">
            <div className="bottom-line mb-5">
              <button className={roleType === 'consultant' ? 'selected-item me-4' : 'unselected-item me-4'} onClick={() => setRoleType('consultant')}>{consultants}</button>
              <button className={roleType === 'specialist' ? 'selected-item' : 'unselected-item'} onClick={() => setRoleType('specialist')} >{specialists}</button>
            </div>
            <article className="col-12 col-sm-12 col-md-4 pasos">
              <h4>{step} {stepContent.id}</h4>
              <h2>{stepContent?.title}</h2>
            </article>
            <article className="col-12 col-sm-12 col-md-8 pt-4">
              <p>{stepContent?.content}</p>
            </article>
          </section>
          <div className="d-flex row mt-4 align-items-center justify-content-center">
            <IconButton
              style={{ width: "fit-content", color: "#10113E" }}
              onClick={() =>
                handleChangeStep(
                  stepContent.id == 1 ? 6 : stepContent.id - 1
                )
              }
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              style={{ width: "fit-content", color: "#10113E" }}
              onClick={() =>
                handleChangeStep(
                  stepContent.id == 6 ? 1 : stepContent.id + 1
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