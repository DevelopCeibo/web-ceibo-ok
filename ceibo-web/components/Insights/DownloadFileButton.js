import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

function DownloadFileButton({ link }) {
  const { t } = useTranslation("common");
  const download = t("fullDownload");
  const downloadNote = t("fullDownloadNote");
  const pdfLink = link;
  return (
    <div className="download-button">
      <div className="container btn-two-container">
        <Link href={`#`}>
          <a
            className="default-btn-two anchor-download"
            href={pdfLink}
            target={"_blank"}
          >
            {download}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default DownloadFileButton;
