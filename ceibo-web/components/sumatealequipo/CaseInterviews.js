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
            href="/case-interviews/Make-Your-Case-Wall-Street-Oasis.pdf"
            target={"_blank"}
            className="btn-lightblue"
          >
            Make Your Case - Wall Street Oasis
          </a>
          <a
            href="/case-interviews/McCombs_Case_Book_2008.pdf"
            target={"_blank"}
            className="btn-lightblue"
          >
            McCombs Casebook
          </a>
          <a
            href="/case-interviews/Illinois Consulting Academy 2015-2016 Case Book.pdf"
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
