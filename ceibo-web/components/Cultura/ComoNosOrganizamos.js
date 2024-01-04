import React, { useState } from "react";
import ResponsiveIFrame from "../Common/ResponsiveIFrame"
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link"

const ComoNosOrganizamos = () => {
  const { t } = useTranslation("common");
  const organizacion = t("organizacion");
  const organizacionSubt = t("organizacionSubt");
  const consultants = t("consultants")
  const specialists = t("specialists")
  const specialistsDesc = t("specialistCrew")
  const consultingTeamDesc = t("consultingTeam")
  const joinSpecialist = t("joinSpecialistCrew")
  const joinConsultant = t("joinConsultingTeam")

  const [roleType, setRoleType] = useState('consultant')

  return (

    <div className="about-area pb-100">
      <div className="container">
        <div className="section-title">
          <h2>{organizacion}</h2>
        </div>
          <p className="text-center">{organizacionSubt}</p>
        <ResponsiveIFrame videoSrc={"https://www.youtube.com/embed/HSOW3apOffc"} />
        <div className="bottom-line my-4">
          <button className={roleType === 'consultant' ? 'selected-item me-4' : 'unselected-item me-4'} onClick={() => setRoleType('consultant')}>{consultants}</button>
          <button className={roleType === 'specialist' ? 'selected-item' : 'unselected-item'} onClick={() => setRoleType('specialist')} >{specialists}</button>
        </div>
        <div className="row">
          {roleType === 'consultant' ?
            <>
              <div className="col-12 col-lg-8 d-flex flex-column">
                <p className="text-justify">
                  {consultingTeamDesc}
                </p>
                <div className="mt-auto d-flex justify-content-center justify-content-lg-start">
                  <Link href={"/sumate-al-equipo/busquedas-vigentes/#roles-consultores"}>
                    <button className="btn btn-primary text-transform-none">{joinConsultant}</button>
                  </Link>
                </div>

              </div>
              <div className="col-12 col-lg-4 d-none d-lg-block">
                <Image src={"/images-ceibo/sumatealequipo/desarrollo/image-consultants.png"} height={250} width={325} ></Image>
              </div>
            </>
            :
            <>
              <div className="col-12 col-lg-8 d-flex flex-column">
                <p className="text-justify">
                  {specialistsDesc}
                </p>
                <div className="mt-auto d-flex justify-content-center justify-content-lg-start">
                  <Link href={"/sumate-al-equipo/busquedas-vigentes/#roles-especialistas"}>
                    <button className="btn btn-primary text-transform-none">{joinSpecialist}</button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-4 d-none d-lg-block">
                <Image src={"/images-ceibo/sumatealequipo/desarrollo/image-specialists.png"} height={250} width={325} ></Image>
              </div>
            </>
          }
        </div>
        <></>
      </div>
    </div>
  );
};

export default ComoNosOrganizamos;
