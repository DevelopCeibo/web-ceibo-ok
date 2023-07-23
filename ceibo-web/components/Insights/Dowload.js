import React from "react";
import useTranslation from "next-translate/useTranslation"
import baseUrl from "../../utils/baseUrl";

const Download = ({ publicacion }) => {
  const { t } = useTranslation("common")
  const download = 'Descargar' // t("compartir")
  
  const handleDownload = () => {
    navigator.clipboard.writeText(`${baseUrl}/insights/${publicacion["path-url"]}`)
  };

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb">
          <h3 className="share-title" style={{ textAlign: "center" }}>
            {download}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "30px",
              alignItems: 'center'
            }}
          >
              <i 
              className="fa-solid fa-download fa-xl"
              style={{ color: "#b72837" }}
              ></i>{' '}
              <p style={{ color: "#b72837" }}>{'Artículo completo'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;