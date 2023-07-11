import React from "react";
import Link from "next/link";
import {
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "next-share";
import jsPDF from "jspdf";
import baseUrl from "../../utils/baseUrl";

const Share = ({ publicacion, referencia }) => {

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text({html: referencia.current});
    doc.save("ceibo-digital.pdf");
  };

  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_posts_thumb">
          <h3 className="share-title" style={{ textAlign: "center" }}>
            Compartir
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "30px",
            }}
          >
            <LinkedinShareButton url={`${baseUrl}/insights/${publicacion["path-url"]}`}>
              <i
                className="fa-brands fa-linkedin fa-xl"
                style={{ color: "#b72837" }}
              ></i>
            </LinkedinShareButton>
            <TwitterShareButton url={`${baseUrl}/insights/${publicacion["path-url"]}`}>
              <i
                className="fa-brands fa-twitter fa-xl"
                style={{ color: "#b72837" }}
              ></i>
            </TwitterShareButton>
            <button onClick={handleDownload} style={{borderWidth: 0, backgroundColor: 'transparent'}}>
            <i
              className="fa-solid fa-paperclip fa-xl"
              style={{ color: "#b72837" }}
            ></i>
            </button>
            <EmailShareButton url={`${baseUrl}/insights/${publicacion["path-url"]}`}>
              <i
                className="fa-regular fa-envelope fa-xl"
                style={{ color: "#b72837" }}
              ></i>
            </EmailShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
