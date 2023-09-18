import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";

import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ExploreOurCareerPathSwiper = () => {
  const { t } = useTranslation("common");
  const [selectedPathLevel, setSelectedPathLevel] = useState(0);
  const title2 = t("careerPathLevelsTitle");
  const content = t("careerPathLevels", {}, { returnObjects: true });
  return (
    <>
      <section className="d-flex row mt-5">
        <article className="col-12 col-sm-12 col-md-4 pasos pt-4">
          <h2>{title2}</h2>
          <h4> {content[selectedPathLevel]?.subtitle}</h4>
        </article>
        <article className="col-12 col-sm-12 col-md-8 pt-4">
          <p>{content[selectedPathLevel]?.description}</p>
        </article>
      </section>
      <div className="d-flex row mt-4 align-items-center justify-content-center">
        <IconButton
          style={{ width: "fit-content", color: "#b72837" }}
          onClick={() =>
            setSelectedPathLevel((previousPathLevel) =>
              previousPathLevel === 0 ? 6 : previousPathLevel - 1
            )
          }
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          style={{ width: "fit-content", color: "#b72837" }}
          onClick={() =>
            setSelectedPathLevel((previousPathLevel) =>
              previousPathLevel === content.length - 1
                ? 0
                : previousPathLevel + 1
            )
          }
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ExploreOurCareerPathSwiper;
