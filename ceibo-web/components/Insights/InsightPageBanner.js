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
          backgroundImage: `url(${BGImage ?? BGImage})`,
          backgroundColor: bgcolor,
          paddingBottom: "0px",
        }}
      >
        <div className="insight-banner">
            <div className="container main-banner-content bc-w">
              <div className="banner-core">
                <h2 className="core-concept">{theme ?? theme}</h2>
                <h2 className="core-article">{article ?? article}</h2>
              </div>
              <h1 className="article-title">{pageTitle}</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default InsightPageBanner;
