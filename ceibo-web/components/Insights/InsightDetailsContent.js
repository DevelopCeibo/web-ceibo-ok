import React from "react";
import AuthorSidebar from "./AuthorSidebar";
import Share from "./Share";
import { Typography, Box } from "@mui/material";
import { marked } from "marked";
import Subscribe from "./Subscribe";
import Download from "./Dowload";
import AboutAuthors from "./AboutAuthors";
import DownloadFileButton from "./DownloadFileButton";
import HorizontalLine from "./HorizontalLine";
import Tags from "./Tags";
import AuthorHeader from "./AuthorHeader";

const InsightDetailsContent = ({ publicacion, date }) => {
  const renderContent = (content) => {
    return content?.map((el, i) => {
      switch (el.type) {
        case "img":
          return <img src={el.src} style={{ maxWidth: el.maxWidth }} />;
        case "first-p":
          return (
            <p
              className="first-p"
              // sx={{ pb: 2, fontSize: "30px" }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            ></p>
          );
        case "p-margin":
          return (
            <Typography
              component="p"
              sx={{ py: 5 }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            >
              {/* {marked(el.text)} */}
            </Typography>
          );
        case "p":
          return (
            <Typography
              component="p"
              sx={{ pb: 2, fontSize: 18 }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            >
              {/* {marked(el.text)} */}
            </Typography>
          );
        case "question":
          return (
            <Typography component="p" sx={{ pb: 2 }}>
              <strong style={{ fontSize: "18px" }}>{el.text}</strong>
            </Typography>
          );
        case "p-white":
          return (
            <Typography
              component="span"
              sx={{ pb: 2, display: "block" }}
              color={el.color}
            >
              {el.text}
            </Typography>
          );
        case "subtitle":
          return (
            <>
              <h2
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  marginBottom: "12px",
                  marginTop: "22px",
                }}
              >
                {el.text}
              </h2>
              <div
                style={{
                  borderBottom: "2px solid #b72837",
                  color: "#b72837",
                  padding: "0 20px",
                  height: "2px",
                  marginBottom: "10px",
                }}
              />
            </>
          );
        case "list":
          return (
            <Box
              component="ul"
              sx={{ color: "black", paddingLeft: "50px", fontSize: 16 }}
            >
              {el.items.map((text, i) => (
                <li
                  key={i}
                  style={{ margin: "10px 0" }}
                  dangerouslySetInnerHTML={{ __html: marked(text) }}
                >
                  {/* {text} */}
                </li>
              ))}
            </Box>
          );
        case "order-list":
          return (
            <Box
              component="ol"
              sx={{ color: "black", paddingLeft: "50px", fontSize: 16 }}
            >
              {el.items.map((text, i) => (
                <li
                  key={i}
                  style={{ margin: "10px 0" }}
                  dangerouslySetInnerHTML={{ __html: marked(text) }}
                >
                  {/*  {text} */}
                </li>
              ))}
            </Box>
          );
          case "ol-ul":
            return (
              <Box
                component="ol"
                sx={{ color: "black", paddingLeft: "50px", fontSize: 16 }}
              >
                {el.items.map((text, i) => {
                  if (typeof text === 'string') {
                    return (
                      <li
                      key={i}
                      style={{ margin: "10px 0" }}
                      dangerouslySetInnerHTML={{ __html: marked(text) }}
                      >
                        {/*  {text} */}
                      </li>
                    );
                  } else {
                    return (
                      <>
                        <li
                        key={i}
                        style={{ margin: "10px 0" }}
                        dangerouslySetInnerHTML={{ __html: marked(text.head) }}
                        >
                          {/*  {text} */}
                        </li>
                        <Box component="ul" sx={{}}>
                        {text?.subItems?.map((subItem, i) => (
                          <li 
                          key={i}
                          dangerouslySetInnerHTML={{ __html: marked(subItem) }}
                          >
                          {/* {text} */}
                          </li>
                        ))}
                        </Box>
                        {text?.last && (
                          <p
                          style={{ margin: "10px 0" }}
                          dangerouslySetInnerHTML={{ __html: marked(text.last) }}
                          >
                            {/* {text} */}
                          </p>
                        )}
                      </>
                    );
                  }
                })}
              </Box>
            );
        case "doublelist":
          return el.items.map((item, idx) => {
            return (
              <div key={idx}>
                <Typography sx={{ pb: 1 }}>{item.title}</Typography>
                <Box component="ul" sx={{}}>
                  {item?.insideItems?.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </Box>
              </div>
            );
          });
        case "quote":
          return (
            <div>
              <div
                className="blog-quote"
                style={{
                  color: "black",
                }}
                dangerouslySetInnerHTML={{ __html: marked(el.text) }}
              ></div>
              <p className="blog-quote" style={{ margin: "10px 0" }}>
                {el.author}
              </p>
            </div>
          );
        default:
          return null;
      }
    });
  };
  return (
    <div className="pt-100">
      <div className="container">
        <AuthorHeader author={publicacion?.metadata?.author} date={date} />
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <Share publicacion={publicacion} />
            {publicacion?.article === "| Research Ceibo Digital" ? (
              <Download link={publicacion?.metadata?.downloadFile} />
            ) : null}
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="blog-details">
              <div className="article-content">
                {renderContent(publicacion?.content)}
                {publicacion?.article === "| Research Ceibo Digital" ? (
                  <>
                    <DownloadFileButton
                      link={publicacion?.metadata?.downloadFile}
                    />
                    <HorizontalLine />
                    <AboutAuthors about={publicacion?.metadata?.aboutAuthors} />
                  </>
                ) : null}
                <HorizontalLine />
                <Tags tags={publicacion?.metadata?.tags} />
                <Subscribe />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-12">
            <AuthorSidebar publicacion={publicacion} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetailsContent;
