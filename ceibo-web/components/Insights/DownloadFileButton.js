import React from "react";
import Link from "next/link";

function DownloadFileButton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: '5%'
      }}
    >
      <div className="container btn-two-container">
        <Link href={`#`}>
          <a className="default-btn-two" style={{width: '50%'}}>
            {"Descargar artículo completo"}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default DownloadFileButton;
