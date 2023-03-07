import { Box } from "@mui/material"
import Image from "next/image"
import React from "react"

const BannerInfo = ({
  pageTitle,
  clientimg,
  bgcolor,
  textcenter,
  content,
  subcontent,
}) => {
  return (
    <>
      <div
        className={`${"page-title-area"} ${textcenter ? "text-center" : null}`}
        style={{ backgroundColor: bgcolor }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className=" d-flex row px-5 align-items-center justify-content-center">
                <section className="col-12 col-sm-12 col-md-4 mb-4">
                  <img
                    src={clientimg}
                    alt={pageTitle}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      marginBottom: "12px",
                      padding: "10px",
                      margin: "0 auto",
                    }}
                  />
                </section>
                <section className="col-12 col-sm-12 col-md-8">
                  <h2 className="mb-4">{pageTitle}</h2>
                  <Box sx={{ color: "#fff" }}>{content}</Box>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#d8d4d4bf",
        }}
      >
        <div
          style={{
            color: "black",
            padding: "16px 0",
          }}
          className="container"
        >
          <div className="d-flex row align-items-center justify-content-center">
            {subcontent}
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerInfo
