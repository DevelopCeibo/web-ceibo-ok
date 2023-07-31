import React from "react";
import { Typography } from "@mui/material";
import { marked } from "marked";
import useTranslation from "next-translate/useTranslation";

// revisar
const content = [
  {
    type: "p",
    text: "**Ayelén Richard** es Project Leader en Ceibo; **Martín Romanelli** es Consultant en Ceibo. Además, ambos forman parte del equipo de Research, cuyo objetivo principal es difundir información sobre temas relacionados con el área de experiencia de Ceibo, como así también ampliar el horizonte de conocimiento de Ceibo y sus colaboradores.",
  },
];

function AboutAuthors() {
  const { t } = useTranslation("common");
  const aboutAuthors = t("aboutAuthors");
  const renderAuthors = (content) => {
    return content.map((el, i) => {
      switch (el.type) {
        case "p":
          return (
            <Typography
              component="div"
              sx={{ pb: 2 }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
              key={i}
            ></Typography>
          );
        default:
          return null;
      }
    });
  };
  return (
    <div className="about-authors">
      <h3 className="share-title author-share">{aboutAuthors}</h3>
      {renderAuthors(content)}
    </div>
  );
}

export default AboutAuthors;
