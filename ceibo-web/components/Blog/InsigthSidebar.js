import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation"
const linkedin = "/images-ceibo/icons/insight-linkedin.png";
const mail = "/images-ceibo/icons/insight-mail.png";

import {
  LinkedinShareButton,
  EmailShareButton,
} from "next-share";

const InsigthSidebar = ({ publicacion }) => {
  const { t } = useTranslation("common")
  const autores = t("autores")
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title" style={{ textAlign: "center" }}>
            {autores}
          </h3>
          {publicacion?.metadata?.author?.length >= 1 &&
          publicacion.metadata.author[0] ? (
            <div style={{ marginTop: "20px", alignContent: "center" }}>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <img
                  src={publicacion?.metadata.authorImg}
                  alt={publicacion?.metadata.author}
                  width="200px"
                />
                <h6 style={{ marginTop: "20px" }}>
                  {publicacion?.metadata?.author}
                </h6>
              </div>
              <div style={{ textAlign: "center" }}>
                <LinkedinShareButton url={"https://www.google.com.ar"}>
                  <i
                    className="fa-brands fa-linkedin fa-xl"
                    style={{ color: "#b72837" }}
                  ></i>
                </LinkedinShareButton>{" "}
                <EmailShareButton url={"https://www.google.com.ar"}>
                  <i
                    className="fa-regular fa-envelope fa-xl"
                    style={{ color: "#b72837" }}
                  ></i>
                </EmailShareButton>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InsigthSidebar;
