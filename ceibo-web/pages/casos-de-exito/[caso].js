import React, { useState } from "react"
import { useRouter } from "next/router"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import Footer from "../../components/Layouts/Footer"
import Link from "next/link"
import casosES from "../../utils/casos-de-exito.json"
import casosEN from "../../utils/casos-de-exito-EN.json"
import { Typography, Box } from "@mui/material"
import BannerInfo from "../../components/casos-de-exito/BannerInfo"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import Head from "next/head"
import generateUrl from "../../utils/generateUrl"
import Image from "next/image"

const Caso = () => {
  const { locale } = useRouter()
  const router = useRouter()

  const pathCaso = router.asPath.split("/")[2]
  const [data, setdata] = React.useState({})
  const [casos, setcasos] = useState(locale == "en" ? casosEN : casosES)

  React.useEffect(() => {
    if (locale == "en") {
      setcasos(casosEN)
    } else {
      setcasos(casosES)
    }
    casos.forEach((caso) => {
      if (caso.id == pathCaso) {
        setdata(caso)
      }
    })
  }, [pathCaso, locale])

  const renderContent = (content) => {
    return content?.map((el, i) => {
      switch (el.type) {
        case "title":
          return (
            <h1
              style={{
                textAlign: "center",
                fontSize: "calc(1.5rem + .6vw)",
                margin: "10px 0 50px",
              }}
            >
              {el.text}
            </h1>
          )
          break
        case "p":
          return (
            <Typography component="p" sx={{ pb: 2 }}>
              {el.text}
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
                  fontSize: "calc(1.2rem + .6vw)",
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
                <li key={i}>{text}</li>
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
        case "duration":
          return (
            <span
              className="col-12 col-md-7 mb-2 mb-md-0 "
              style={{
                fontWeight: "600",
                textAlign: "center",
                fontSize: "16px",
              }}
            >
              {locale == "en"
                ? "Duration of project:"
                : "Duración del proyecto"}{" "}
              {el.text}
            </span>
          )
        case "tag":
          return (
            <span className="col-6 col-md d-flex align-items-center justify-content-center px-4">
              <CheckCircleIcon
                fontSize="small"
                sx={{ mr: 0.4 }}
                style={{ color: "red", marginRigth: "10px" }}
              />
              <b>{el.text}</b>
            </span>
          )
        default:
          return null
      }
    })
  }

  const TITLE_TAG = `Caso de éxito: ${data?.cliente} - Ceibo Digital`

  return (
    <>
      <Head>
        <title>{TITLE_TAG}</title>
      </Head>
      <NavbarTwo />
      <BannerInfo
        pageTitle={
          locale == "en"
            ? `About ${data?.cliente?.split("-")[0]}`
            : `Sobre ${data?.cliente?.split("-")[0]}`
        }
        bgcolor="#b72837"
        clientimg={data?.clientimg}
        content={renderContent(data?.bannerContent)}
        subcontent={renderContent(data?.subcontent)}
      />
      <div className="about-area ptb-70">
        <div className="container">
          <div className="row align-items-center">
            {renderContent(data?.content)}
          </div>

          <div className="section-title my-5 pt-5">
            <h3>
              {locale == "en" ? `More success stories` : `Más casos de éxito`}
            </h3>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="blog-slides"
          >
            {casos &&
              casos.map((caso, i) => (
                <SwiperSlide key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={`/casos-de-exito/${caso.id}`}>
                        {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                        <a>
                          <Image
                            src={caso?.metadata.image}
                            alt={caso?.metadata.cliente}
                            className="bg-img"
                            layout="fill"
                          />
                        </a>
                      </Link>
                      <img
                        src={caso.clientimg}
                        alt="cliente"
                        className="cliente-img-absolute"
                        style={{
                          position: "absolute",
                          width:
                            caso.metadata.clientimgType == "horizontal"
                              ? "120px"
                              : "100px",
                          height:
                            caso.metadata.clientimgType == "horizontal"
                              ? "80px"
                              : "90px",
                          zIndex: "100",
                          bottom: "10px",
                        }}
                      />
                    </div>

                    <div className="blog-post-content">
                      <span className="date">
                        {caso.metadata.tags.map((tag, index) => (
                          <Link href={`/#`} key={index}>
                            <>
                              <a>{tag}</a>
                              {index !== caso.metadata.tags.length - 1 && " | "}
                            </>
                          </Link>
                        ))}
                      </span>
                      {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                      <Link href={`/casos-de-exito/${caso.id}`}>
                        <h6>
                          <a>{caso.content[0].text}</a>
                        </h6>
                      </Link>

                      {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                      <Link href={`/casos-de-exito/${caso.id}`}>
                        <a className="read-more-btn">
                          {locale === "en"
                            ? "Read success storie"
                            : "Leer caso de éxito"}
                          <i className="fa-solid fa-angles-right"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Caso
