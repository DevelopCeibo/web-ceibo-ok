import React from "react";
import Link from "next/link";

const InsigthSidebar = ({ publicacion }) => {
  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Popular posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title" style={{ textAlign: "center" }}>
            Autores
          </h3>
          {publicacion?.metadata?.author?.length >= 1 &&
          publicacion.metadata.author[0] ? (
            <div style={{ marginTop: "20px", alignContent: "center" }}>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <img
                  src={publicacion?.metadata.authorImg}
                  alt={publicacion?.metadata.author}
                  width="200px"
                />
                <h6 style={{ marginTop: "20px" }}>
                  {publicacion?.metadata?.author}
                </h6>
              </div>
              <div  style={{textAlign: 'center', backgroundColor: 'red'}} >
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InsigthSidebar;
