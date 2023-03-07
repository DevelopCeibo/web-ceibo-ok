import React from "react"

const PageBanner = ({ pageTitle, BGImage, bgcolor, textcenter, subtitle }) => {
  return (
    <>
      <div
        className={`${
          BGImage ? "page-title-area-backdrop-justText" : "page-title-area"
        } ${textcenter ? "text-center" : null}`}
        style={{ backgroundImage: `url(${BGImage})`, backgroundColor: bgcolor }}
      >
        <div className="d-table ">
          <div className="d-table-cell ">
            <div className="container main-banner-content p-2">
              <h1>{pageTitle}</h1>
              {subtitle && <h2>{subtitle}</h2>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageBanner
