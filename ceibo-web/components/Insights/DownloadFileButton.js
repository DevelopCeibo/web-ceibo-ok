import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

function DownloadFileButton() {
  const { t } = useTranslation("common");
  const download = t("fullDownload");
  return (
    <div className="download-button">
      <div className="container btn-two-container">
        <Link href={`#`}>
          <a className="default-btn-two anchor-download">{download}</a>
        </Link>
      </div>
    </div>
  );
}

export default DownloadFileButton;
