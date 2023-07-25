import React from "react";
import { Typography } from "@mui/material";
import { marked } from "marked";

const content = [{ type: 'p', text: "**Ayelén Richard** es Project Leader en Ceibo; **Martín Romanelli** es Consultant en Ceibo. Además, ambos forman parte del equipo de **Research**, cuyo objetivo...."}];

function AboutAuthors() {
  const renderAuthors = (content) => {
    return content.map((el, i) => {
      switch (el.type) {
        case "p":
          return (<Typography
            component="div"
            sx={{ pb: 2 }}
            dangerouslySetInnerHTML={{ __html: marked(el.text) }}
          ></Typography>)
        default:
          return null;
      }
    })
  };
  return (
    <div >
      <h3 className="share-title" style={{ textAlign: "center" }}>
        {"Acerca de los autores"}
      </h3>
      {renderAuthors(content)}
    </div>
  );
}

export default AboutAuthors;
