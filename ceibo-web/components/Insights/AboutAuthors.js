import React from "react";
import { Typography } from "@mui/material";
import { marked } from "marked";
import useTranslation from "next-translate/useTranslation";

function AboutAuthors({about}) {
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
      {about && renderAuthors(about)}
    </div>
  );
}

export default AboutAuthors;
