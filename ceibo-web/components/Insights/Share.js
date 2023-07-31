import React from "react";
import Link from "next/link";
import {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "next-share";
import useTranslation from "next-translate/useTranslation";
import baseUrl from "../../utils/baseUrl";

const Share = ({ publicacion }) => {
  const { t } = useTranslation("common");
  const compartir = t("compartir");
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${baseUrl}/insights/${publicacion["path-url"]}`
    );
  };

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb">
          <h3 className="share-title author-share">{compartir}</h3>
          <div className="share-buttons">
            <LinkedinShareButton
              url={`${baseUrl}/insights/${publicacion["path-url"]}`}
            >
              <i className="fa-brands fa-linkedin fa-xl insight-icon"></i>
            </LinkedinShareButton>
            <TwitterShareButton
              url={`${baseUrl}/insights/${publicacion["path-url"]}`}
            >
              <i className="fa-brands fa-twitter fa-xl insight-icon"></i>
            </TwitterShareButton>
            <button onClick={handleCopy} className="email-share">
              <i className="fa-solid fa-paperclip fa-xl insight-icon"></i>
            </button>
            <EmailShareButton
              url={`${baseUrl}/insights/${publicacion["path-url"]}`}
            >
              <i className="fa-regular fa-envelope fa-xl insight-icon"></i>
            </EmailShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
