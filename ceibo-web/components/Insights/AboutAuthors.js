import React from 'react'
import { marked } from "marked";

function AboutAuthors() {

  const text = `**${'Ayelén Richard'}** es Project Leader en Ceibo; **${'Martín Romanelli'}** es Consultant en Ceibo. Además, ambos forman parte del equipo de **${'Research'}**, cuyo objetivo....`;
  return (
    <div className="widget widget_posts_thumb" style={{}}>
        <h3 className="share-title" style={{ textAlign: "center" }}>{'Acerca de los autores'}</h3>
        <p dangerouslySetInnerHTML={{ __html: marked(text) }}>{}</p>
    </div>
  )
}

export default AboutAuthors