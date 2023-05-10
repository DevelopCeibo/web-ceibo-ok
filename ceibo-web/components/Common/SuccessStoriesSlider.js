import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import publicaciones from "../../utils/casos-de-exito.json"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const SuccessStoriesSlider = () => {
    const { t } = useTranslation("common")
    const publicacionesTitle = t("casosExito")
    const vermas = t("vermas")
    const verpublis = t("vercasos")

    const { locale } = useRouter()
    // si locale == en, los titulos de publicaciones van en ingles

    return (
        <>
            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{publicacionesTitle}</h2>
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
                        {publicaciones.map((caso, i) => (
                            <SwiperSlide key={i}>

                                <div className="single-blog-item" key={i}>
                                    <div className="blog-image">
                                        <Link href={`/casos-de-exito/${caso["path-url"]}`}>
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
                                        <Link href={`/casos-de-exito/${caso["path-url"]}`}>
                                            <h6>
                                                <a>{caso.content[0].text}</a>
                                            </h6>
                                        </Link>

                                        {/* <Link
                        href={`/casos-de-exito/${generateUrl(caso?.cliente)}`}
                      > */}
                                        <Link href={`/casos-de-exito/${caso["path-url"]}`}>
                                            <a className="read-more-btn">
                                                {locale == "en"
                                                    ? "Read success story"
                                                    : "Leer caso de éxito"}
                                                <i className="fa-solid fa-angles-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="container btn-two-container">
                        <Link href="/publicaciones/">
                            <a className="default-btn-two">
                                {verpublis}
                                <i className="fas fa-chevron-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccessStoriesSlider