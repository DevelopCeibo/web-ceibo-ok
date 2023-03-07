import React, { useState } from "react"
import AddIcon from "@mui/icons-material/Add"
import { Button, Popover, Typography } from "@mui/material"
import Image from "next/image"

// imagen
import nucleoCeiboImg from "../../public/images-ceibo/animacion.png"
import useTranslation from "next-translate/useTranslation"

const ComoNosOrganizamos = () => {
  const { t } = useTranslation("common")
  const organizacion = t("organizacion")
  const organizacionSubt = t("organizacionSubt")
  const teamCeiboTxt1 = t("teamCeiboTxt1")
  const teamCeiboTxt2 = t("teamCeiboTxt2")
  const comunidadTxt1 = t("comunidadTxt1")
  const ecosistemaTxt1 = t("ecosistemaTxt1")
  const ecosistemaTxt2 = t("ecosistemaTxt2")
  const comunidad = t("comunidad")
  const ecosistema = t("ecosistema")
  const teamModalTxt = t("teamModalTxt")
  const ecosModalTxt = t("ecosModalTxt")
  const commuModalTxt = t("commuModalTxt")

  const [toggler, setToggler] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [contenidoPopover, setcontenidoPopover] = useState()
  const handleClick = (event) => {
    switch (event.currentTarget.id) {
      case "ecosistema":
        setcontenidoPopover(
          <div class="inner">
            <h3>{ecosistema}</h3>
            <p>{ecosModalTxt}</p>
          </div>
        )
        break
      case "comunidad":
        setcontenidoPopover(
          <div class="inner">
            <h3>{comunidad}</h3>
            <p>{commuModalTxt}</p>
          </div>
        )
        break
      case "team":
        setcontenidoPopover(
          <div class="inner">
            <h3>Team Ceibo</h3>
            <p>{teamModalTxt}</p>
          </div>
        )
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
      {/* <FsLightbox
        toggler={toggler}
        // sources={["https://www.youtube.com/watch?v=5DbtMwwlEIY"]}
      /> */}

      <div className="about-area">
        <div className="container organizacion-ceibo">
          <h2>{organizacion}</h2>
          <p>
            {organizacionSubt}
            {/* <b> En Ceibo estamos organizados en 3 capas. </b>
            Esta modalidad responde a una forma flexible y dinámica de una
            compañía digital preparada para solucionar los desafíos más
            exigentes de nuestros clientes. Esta decisión se apoya en los
            conceptos de cercanía, flexibilidad y trabajo en red, alineados con
            las últimas tendencias de las empresas digitales. */}
          </p>
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <GptwPopover />
              <div className="about-image">
                <Image
                  src={nucleoCeiboImg}
                  alt="Organización de Ceibo"
                  width={1}
                  height={1}
                  layout="responsive"
                  className="animacion-img"
                />
                <div
                  className="red-circle ecosistema"
                  onClick={handleClick}
                  id="ecosistema"
                >
                  <AddIcon sx={{ color: "white" }} />
                </div>
                <div
                  className="red-circle comunidad"
                  onClick={handleClick}
                  id="comunidad"
                >
                  <AddIcon sx={{ color: "white" }} />
                </div>
                <div
                  className="red-circle team"
                  onClick={handleClick}
                  id="team"
                >
                  <AddIcon sx={{ color: "white" }} />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <section className="section-title">
                  <article className="violeta">
                    <h4>Team Ceibo</h4>
                    <p>
                      <b>{teamCeiboTxt1}</b>
                      {teamCeiboTxt2}
                    </p>
                    <br />
                  </article>
                  <article className="celeste">
                    <h4>{comunidad}</h4>
                    <p>{comunidadTxt1}</p>
                    <br />
                  </article>
                  <article className="rojo">
                    <h4>{ecosistema}</h4>
                    <p>{ecosistemaTxt1}</p>
                    <p>{ecosistemaTxt2}</p>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComoNosOrganizamos
