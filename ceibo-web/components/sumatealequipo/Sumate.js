import React from "react"
import useTranslation from "next-translate/useTranslation"

const Sumate = () => {
  const { t } = useTranslation("common")
  const sumateTxt = t("sumateTxt")
  const sumateaceibo = t("sumateaceibo")

  return (
    <div className="pt-70 pb-50  mt-4">
      <div className="container">
        <div className="section-title">
          <h2> {sumateaceibo}</h2>
          <h5 className="mt-5">
            {/* <strong> */}
            {sumateTxt}
            {/* </strong> */}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Sumate
