import React from "react";

const CasebooksButtons = ({ buttonsClassname }) => {
  return (
    <section className="d-flex flex-column gap-3 align-items-center justify-content-center">
      <a
        href="/case-interviews/Make-Your-Case-Wall-Street-Oasis.pdf"
        target={"_blank"}
        className={buttonsClassname ? buttonsClassname : "btn-lightblue"}
      >
        Make Your Case - Wall Street Oasis
      </a>
      <a
        href="/case-interviews/McCombs_Case_Book_2008.pdf"
        target={"_blank"}
        className={buttonsClassname ? buttonsClassname : "btn-lightblue"}
      >
        McCombs Casebook
      </a>
      <a
        href="/case-interviews/Illinois Consulting Academy 2015-2016 Case Book.pdf"
        target={"_blank"}
        className={buttonsClassname ? buttonsClassname : "btn-lightblue"}
      >
        Illinois Consulting Academic Casebook
      </a>
    </section>
  );
};

export default CasebooksButtons;
