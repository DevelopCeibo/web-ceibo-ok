import React from "react";
import Link from "next/link";
import InsigthSidebar from "./InsigthSidebar";
import Share from "./Share";
import { Typography, Box } from "@mui/material";
import { marked } from "marked";
import Subscribe from './Subscribe';
import Download from './Dowload';
import AboutAuthors from './AboutAuthors';

const InsightDetailsContent = ({ publicacion, date }) => {

  const renderContent = (content) => {
    return content?.map((el, i) => {
      switch (el.type) {
        case "img":
          return <img src={el.src} style={{ maxWidth: el.maxWidth }} />;
          break;
        case "first-p":
          return (
            <p
              className="first-p"
              // sx={{ pb: 2, fontSize: "30px" }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            ></p>
          );
          break;
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
              sx={{ pb: 2 }}
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
                <li key={i} style={{ margin: "10px 0" }}>
                  {text}
                </li>
              ))}
            </Box>
          );
        case "doublelist":
          return el.items.map((item, idx) => {
            console.log(item.insideItems);
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
    <>
      <div className="pt-100">
        <div className="container">
          <div style={{ alignContent: "space-between", paddingLeft: '3%' }}>
            {publicacion?.metadata?.author?.length >= 1 &&
            publicacion.metadata.author[0] ? (
              <h2 style={{ paddingBottom: "1%", color: "grey", fontSize: '20px' }}>
                {`Por ${publicacion?.metadata.author}`}
              </h2>
            ) : null}
            {date && (
              <h2 style={{ color: "grey", fontWeight: "300", fontSize: '20px' }}>{date}</h2>
            )}
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <div>
                <Share publicacion={publicacion}/>
                <Download />
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-content">
                  {renderContent(publicacion?.content)}
                  {/* Horizontal line */}
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "#b72837",
                      borderColor: "#b72837",
                    }}
                  />

                  <div style={{marginBottom: '2%', marginTop: '2%'}}>
                    <AboutAuthors />
                  </div>
                  {/* Horizontal line */}
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "#b72837",
                      borderColor: "#b72837",
                    }}
                  />
                  <ul className="category">
                    <li>
                      <span>Tags:</span>
                    </li>
                    {publicacion?.metadata?.tags?.map((tag, i) => (
                      <li key={i}>
                        <Link href="#">
                          <a>{tag}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div >
                    <Subscribe />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12">
              <div>
                <InsigthSidebar publicacion={publicacion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightDetailsContent;
