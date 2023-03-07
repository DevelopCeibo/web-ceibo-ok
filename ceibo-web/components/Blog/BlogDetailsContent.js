import React, { useState } from "react"
import Link from "next/link"
import BlogSidebar from "./BlogSidebar"
import BlogComments from "./BlogComments"
import { Typography, Box, Button } from "@mui/material"
import { marked } from "marked"
import publicaciones from "../../utils/publicaciones.json"

const BlogRightSidebar = ({ publicacion }) => {
  // const [currentBlogIndex, setcurrentBlogIndex] = useState(
  //   Number(publicacion?.id)
  // )

  // const handleNextClick = () => {
  //   setcurrentBlogIndex(currentBlogIndex + 1)
  // }

  // const handlePrevClick = () => {
  //   setcurrentBlogIndex(currentBlogIndex - 1)
  // }

  const renderContent = (content) => {
    return content?.map((el, i) => {
      switch (el.type) {
        case "img":
          return <img src={el.src} style={{ maxWidth: el.maxWidth }} />
          break
        case "first-p":
          return (
            <p
              className="first-p"
              // sx={{ pb: 2, fontSize: "30px" }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            ></p>
          )
          break
        case "p-margin":
          return (
            <Typography
              component="p"
              sx={{ py: 5 }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            >
              {/* {marked(el.text)} */}
            </Typography>
          )
        case "p":
          return (
            <Typography
              component="p"
              sx={{ pb: 2 }}
              dangerouslySetInnerHTML={{ __html: marked(el.text) }}
            >
              {/* {marked(el.text)} */}
            </Typography>
          )
        case "question":
          return (
            <Typography component="p" sx={{ pb: 2 }}>
              <strong style={{ fontSize: "18px" }}>{el.text}</strong>
            </Typography>
          )
        case "p-white":
          return (
            <Typography
              component="span"
              sx={{ pb: 2, display: "block" }}
              color={el.color}
            >
              {el.text}
            </Typography>
          )
        case "subtitle":
          return (
            <>
              <h2
                style={{
                  color: "#b72837",
                  marginBottom: "12px",
                  marginTop: "22px",
                }}
              >
                {el.text}
              </h2>
              <hr
                style={{
                  borderBottom: "2px solid #d8d4d4bf",
                  color: "#d8d4d4bf",
                  padding: "0 20px",
                }}
              />
            </>
          )
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
          )
        case "doublelist":
          return el.items.map((item, idx) => {
            console.log(item.insideItems)
            return (
              <div key={idx}>
                <Typography sx={{ pb: 1 }}>{item.title}</Typography>
                <Box component="ul" sx={{}}>
                  {item?.insideItems?.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </Box>
              </div>
            )
          })
        case "quote":
          return (
            <div
              className="blog-quote"
              style={{
                color: "black",
              }}
            >
              <p>{el.text}</p>
              <p style={{ margin: "10px 0" }}>{el.author}</p>
            </div>
          )
        default:
          return null
      }
    })
  }

  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                {/* <div className="article-img">
                  <img src={publicacion.metadata.bannerImg} alt="image" />
                </div> */}

                <div className="article-content">
                  {renderContent(publicacion?.content)}

                  {/* <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link href="/blog">
                        <a>Admin</a>
                      </Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i> March 08,
                      2022
                    </li>
                  </ul> */}

                  {/* Category */}
                  {publicacion?.metadata?.author[0] ? (
                    <div style={{ marginTop: "20px" }}>
                      <img
                        src={publicacion?.metadata.authorImg}
                        alt={publicacion?.metadata.author}
                        width="200px"
                      />
                      <h6 style={{ marginTop: "20px" }}>
                        Por: {publicacion?.metadata?.author} en Ceibo digital.
                      </h6>
                    </div>
                  ) : null}

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
                </div>
              </div>

              {/* Post controls */}
              {/* <div className="post-controls-buttons">
                <div onClick={handlePrevClick}>
                  <Link href={`/publicaciones/${currentBlogIndex}`}>
                    <a>Prev Post</a>
                  </Link>
                </div>
                <div onClick={handleNextClick}>
                  <Link href={`/publicaciones/${currentBlogIndex}`}>
                    <a>Next Post</a>
                  </Link>
                </div>
              </div> */}

              {/* <BlogComments /> */}
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogRightSidebar
