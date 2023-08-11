import React from "react";
import useTranslation from "next-translate/useTranslation";

function DownloadButtonNote() {
  const { t } = useTranslation("common");
  const downloadNote = t("fullDownloadNote");
  return <p className="download-article-note">{downloadNote}</p>;
}

export default DownloadButtonNote;
