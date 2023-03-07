import React from "react"
import useTranslation from "next-translate/useTranslation"

const CaseInterviews = () => {
  const { t } = useTranslation("common")
  const prepCases = t("prepCases")

  return (
    <div className=" ">
      <div className="container ">
        <div className="section-title sumatealequipo">
          <h3>{prepCases}</h3>
        </div>

        <section className="d-flex flex-column gap-3 align-items-center justify-content-center">
          <a
            href="https://ceibo.digital/wp-content/uploads/2021/04/Make-Your-Case-Wall-Street-Oasis.pdf"
            target={"_blank"}
            className="btn-lightblue"
          >
            Make Your Case - Wall Street Oasis
          </a>
          <a
            href="https://ceibo.digital/wp-content/uploads/2021/04/1653_McCombs_Case_Book_2008_1.pdf"
            target={"_blank"}
            className="btn-lightblue"
          >
            McCombs Casebook
          </a>
          <a
            href="https://ceibo.digital/wp-content/uploads/2021/04/2015_Illinois_Gies_Case_Book.pdf"
            target={"_blank"}
            className="btn-lightblue"
          >
            Illinois Consulting Academic Casebook
          </a>
        </section>
      </div>
    </div>
  )
}

export default CaseInterviews
