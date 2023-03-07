import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button, Popover, Typography } from "@mui/material"
import useTranslation from "next-translate/useTranslation"
import AddIcon from "@mui/icons-material/Add"

const MainBanner = (title, body) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [contenidoPopover, setcontenidoPopover] = useState()

  const { t } = useTranslation("common")
  const mainTittle = t("title")
  const cultura = t("cultura")
  const gptwPop1 = t("gptwPop1")
  const gptwPop2 = t("gptwPop2")
  const gptwPop3 = t("gptwPop3")
  const gptwPop4 = t("gptwPop4")
  const homeh1 = t("homeh1")
  const homeh2 = t("homeh2")

  const handleClick = (event) => {
    switch (event.currentTarget.id) {
      case "first":
        setcontenidoPopover(gptwPop1)
        break
      case "second":
        setcontenidoPopover(gptwPop2)
        break
      case "third":
        setcontenidoPopover(gptwPop3)
        break
      case "fourth":
        setcontenidoPopover(gptwPop4)
        break
    }

    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  const GptwPopover = () => (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Typography sx={{ p: 2 }}>{contenidoPopover}</Typography>
    </Popover>
  )

  return (
    <>
      <div className="hero-banner video-studio overly-6">
        <div className="video-background">
          <video autoPlay loop src="/video/promo-video.mp4" />
        </div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="main-banner-content">
                    {/* <h1>{mainTittle}</h1> */}
                    <h1>{homeh1}</h1>
                    <h2>{homeh2}</h2>
                    <Link href="/cultura">
                      <a
                        className="btn btn-primary"
                        title="Leer más sobre nuestra sección de cultura"
                      >
                        {cultura}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="video-box d-flex">
                    <GptwPopover />
                    <section className="col-6">
                      <article>
                        <Image
                          src="/images-ceibo/2022-Best-Workplaces-Latin-America-Logo_ENG.png"
                          alt="Best Workplaces Latin America Logo"
                          width={180}
                          height={160}
                        />
                        <div
                          className="red-circle"
                          id="second"
                          onClick={handleClick}
                        >
                          <AddIcon sx={{ color: "white" }} />
                        </div>
                      </article>
                      <article>
                        <Image
                          src="/images-ceibo/2022_Argentina_Empresas que Cuidan.png"
                          alt="Aregntina empresas que cuidan"
                          width={160}
                          height={160}
                        />

                        <div
                          className="red-circle"
                          id="first"
                          onClick={handleClick}
                        >
                          <AddIcon sx={{ color: "white" }} />
                        </div>
                      </article>
                    </section>
                    <section className="col-6">
                      <article>
                        <Image
                          src="/images-ceibo/2022_Argentina_para Millennials (1).png"
                          width={160}
                          height={160}
                          alt="Great place to work para Millenials Argentina "
                        />
                        <div
                          className="red-circle"
                          onClick={handleClick}
                          id="third"
                        >
                          <AddIcon sx={{ color: "white" }} />
                        </div>
                      </article>
                      <article>
                        {" "}
                        <Image
                          src="/images-ceibo/2022_Argentina.png"
                          width={160}
                          height={160}
                          alt="Great place to work Argentina"
                        />
                        <div
                          className="red-circle"
                          onClick={handleClick}
                          id="fourth"
                        >
                          <AddIcon sx={{ color: "white" }} />
                        </div>
                      </article>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner
