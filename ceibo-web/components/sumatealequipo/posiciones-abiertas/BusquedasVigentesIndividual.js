import React from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import vacantes, { filterVacantes } from "../../../utils/vacantes.utils";

const BusquedasVigentesIndividual = ({ arregloDeVacantes }) => {
  const { t } = useTranslation("common");
  const postularse = t("postularse");
  const dataScientist = t("dataScientist");
  const manager = t("manager");
  const consultant = t("consultant");
  const associate = t("associate");
  const developer = t("developer");
  const marketingAutomation = t("marketing-automation");
  const seniorPaidMedia = t("senior-paid-media");
  const dataAnalyst = t("data-analyst");
  const noResultFound = t("noResultFound");

  const router = useRouter()
  const [filteredVacantes, setFilteredVacantes] = useState(vacantes)

  useEffect(() => {
    const updatedFilteredVacantes = filterVacantes(router.query, vacantes)
    setFilteredVacantes(updatedFilteredVacantes)
  }, [router.query])


  return (
    <>

      <SearchBar />

      {filteredVacantes.length  ?
        <div className="row px-md-5">
          {filteredVacantes.map((vac) => {
            return (
              <>
                <div className="col-xl-3 col-lg-4 col-md-4 col-12 card-vacantes px-0 shadow-lg mb-0 mb-md-3">
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url(
                ${vac.image}
              )`,
                    }}
                  ></div>
                  {/* <img src={vac.image} style={{objectFit:'cover'}}/> */}
                </div>

                <div className="col-xl-9 col-lg-8 col-md-8 col-12 d-flex align-items-center shadow-lg mb-4 mb-md-3">
                  <div className="post-content py-4 py-md-0 ps-2">
                    <div className="post-text">
                      <h6>{vac.title}</h6>
                      <p>{vac.id == "1" && dataScientist}</p>
                      <p>{vac.id == "2" && manager}</p>
                      <p>{vac.id == "3" && consultant}</p>
                      <p>{vac.id == "4" && associate}</p>
                      <p>{vac.id == "5" && developer}</p>
                      <p>{vac.id == "6" && marketingAutomation}</p>
                      <p>{vac.id == "7" && seniorPaidMedia}</p>
                      <p>{vac.id == "8" && dataAnalyst}</p>
                    </div>
                    <Link href={vac["path-url"].length ? `/sumate-al-equipo/busquedas-vigentes/${vac["path-url"]}` : vac.href}>
                      <a className="read-more-btn" target={vac.href? "_blank" : '_self'}>
                        {postularse} <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div> : 
          <p className="text-center">{noResultFound}</p>
      }


    </>
  );
};

export default BusquedasVigentesIndividual;
