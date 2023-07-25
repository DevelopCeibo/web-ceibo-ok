import React from "react";

const InsightPageBanner = ({
  pageTitle,
  BGImage,
  bgcolor,
  textcenter,
  subtitle,
  article,
  theme,
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
              style={{ backgroundColor: "#FFF" }}
            >
              <div style={{ display: "flex", flexDirection: "row", gap: '1%'}}>
                <h2 style={{ color: "#b72837", marginRight: "1px" }}>
                  {theme ?? theme}
                </h2>
                <h2 style={{ color: "grey" }}>{article ?? article}</h2>
              </div>
              <h1 style={{ color: "black", padding: "2rem" }}>{pageTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightPageBanner;
