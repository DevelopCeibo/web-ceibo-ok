import React from "react"
import publicaciones from "../../utils/publicaciones.json"
import insights from "../../utils/insights.json"
import BlogCard from './BlogCard';

const BlogGrid = ({section}) => {

  const data = section === 'insights' ? insights : publicaciones;
  const style = section === "insights" ? { paddingTop: 30 } : {};

  return (
    <>
      <div className="blog-area ptb-100" style={style}>
        <div className="container">
          <div className="row justify-content-center">
            {data.map((publi, i) => (
              <BlogCard section={section} publi={publi}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogGrid
