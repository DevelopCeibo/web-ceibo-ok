import React from "react";

const InsightPageBanner = ({
  pageTitle,
  BGImage,
  bgcolor,
  textcenter,
  subtitle,
}) => {
  return (
    <>
      <div
        className={`${
          BGImage ? "page-title-area-backdrop-justText" : "page-title-area"
        } ${textcenter ? "text-center" : null}`}
        style={{
          backgroundImage: `url(${BGImage})`,
          backgroundColor: bgcolor,
          paddingBottom: "0px",
        }}
      >
        <div
          className="d-table "
          style={{
            width: "65%",
            marginLeft: "10%",
          }}
        >
          <div /* className="d-table-cell " */>
            <div
              className="container main-banner-content p-2"
              style={{ backgroundColor: "#FFF"}}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h2 style={{ color: "#b72837", marginRight: "1px" }}>
                  {"Customer Experience"}
                </h2>
                <h2 style={{ color: "grey" }}>{"| Articulo"}</h2>
              </div>
              <h1 style={{ color: "black" }}>{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightPageBanner;
