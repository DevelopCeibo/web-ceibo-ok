import React from "react"
import { Modal, Box, Typography, IconButton } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import CloseIcon from "@mui/icons-material/Close"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  // bgcolor: "background.paper",
  bgcolor: "#6fc7b5",
  border: "none",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  color: "white",
}

const mobileStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  height: 600,
  overflowY: "scroll",
  bgcolor: "#6fc7b5",
  border: "none",
  borderRadius: 4,
  boxShadow: 24,
  color: "white",
  p: 4,
}

const AreasDeServicio = () => {
  const { locale } = useRouter()

  const { t } = useTranslation("common")
  const areasDeServicio = t("areasDeServicio")
  const estrategia = t("estrategia")
  const nuestrosProyectos = t("nuestrosProyectos")
  const estrategiaModalTxt1 = t("estrategiaModalTxt1")
  const estrategiaModalItem1 = t("estrategiaModalItem1")
  const estrategiaModalItem2 = t("estrategiaModalItem2")
  const estrategiaModalItem3 = t("estrategiaModalItem3")
  const estrategiaModalItem4 = t("estrategiaModalItem4")
  const estrategiaModalItem5 = t("estrategiaModalItem5")

  const excelenciaModalText1 = t("excelenciaModalText1")
  const excelenciaModalItem1 = t("excelenciaModalItem1")

  const organizacionModalText1 = t("organizacionModalText1")
  const organizacionModalItem1 = t("organizacionModalItem1")
  const organizacionModalItem2 = t("organizacionModalItem2")
  const organizacionModalItem3 = t("organizacionModalItem3")
  const organizacionModalItem4 = t("organizacionModalItem4")
  const organizacionModalItem5 = t("organizacionModalItem5")
  const organizacionModalItem6 = t("organizacionModalItem6")
  const organizacionModalItem7 = t("organizacionModalItem7")

  const innovacionModalText1 = t("innovacionModalText1")
  const innovacionModalItem1 = t("innovacionModalItem1")
  const innovacionModalItem2 = t("innovacionModalItem2")
  const innovacionModalItem3 = t("innovacionModalItem3")
  const innovacionModalItem4 = t("innovacionModalItem4")
  const innovacionModalItem5 = t("innovacionModalItem5")

  const customerengModalText1 = t("innovacionModalText1")
  const customerengModalItem1 = t("customerengModalItem1")
  const customerengModalItem2 = t("customerengModalItem2")
  const customerengModalItem3 = t("customerengModalItem3")
  const customerengModalItem4 = t("customerengModalItem4")
  const customerengModalItem5 = t("customerengModalItem5")
  const customerengModalItem6 = t("customerengModalItem6")
  const customerengModalItem7 = t("customerengModalItem7")
  const customerengModalItem8 = t("customerengModalItem8")
  const customerengModalItem9 = t("customerengModalItem9")

  const excelencia = t("excelencia")
  const organizacion = t("organizacion")
  const innovacion = t("innovacion")
  const customereng = t("customereng")

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("md"))
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"))

  const [openStrategy, setOpenStrategy] = React.useState(false)
  const [openExcelencia, setOpenExcelencia] = React.useState(false)
  const [openOrganizacion, setOpenOrganizacion] = React.useState(false)
  const [openInnovacion, setOpenInnovacion] = React.useState(false)
  const [openCustomer, setOpenCustomer] = React.useState(false)

  const handleClose = () => setOpen(false)

  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb mt-5">
        <div className="container p-0">
          <img src="/images-ceibo/techo-casa2.svg" />
        </div>

        <div className="container areas-de-servicio">
          <div className="section-title">
            <h2>{areasDeServicio}</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-6 col-sm-4 col-lg-2"
              onClick={() => setOpenStrategy(true)}
            >
              <div className="work-card">
                <img src="/images/works/work1.jpg" alt="image" />
                <div></div>
                <div className="content">
                  <div className="d-flex flex-column justify-content-between">
                    <Image
                      src="/images-ceibo/areasdeservicio/estrategia@2x.png"
                      alt="image"
                      width={1}
                      height={1}
                      layout="responsive"
                    />
                  </div>
                  <div>
                    <h5>{estrategia}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-sm-4 col-lg-2"
              onClick={() => setOpenExcelencia(true)}
            >
              <div className="work-card">
                <img src="/images/works/work3.jpg" alt="image" />

                <div className="content">
                  <Image
                    src="/images-ceibo/areasdeservicio/excelencia-operacional@2x.png"
                    alt="image"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                  <h5>{excelencia}</h5>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-sm-4 col-lg-2"
              onClick={() => setOpenOrganizacion(true)}
            >
              <div className="work-card">
                <img src="/images/works/work4.jpg" alt="image" />

                <div className="content">
                  <Image
                    src="/images-ceibo/areasdeservicio/organizacion@2x.png"
                    alt="image"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                  <h5>{locale == "es" ? "Organización" : "Organization"}</h5>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-sm-4 col-lg-2"
              onClick={() => setOpenInnovacion(true)}
            >
              <div className="work-card">
                <img src="/images/works/work5.jpg" alt="image" />

                <div className="content">
                  <Image
                    src="/images-ceibo/areasdeservicio/innovacion@2x.png"
                    alt="image"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                  <h5>{innovacion}</h5>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-sm-4 col-lg-2"
              onClick={() => setOpenCustomer(true)}
            >
              <div className="work-card">
                <img src="/images/works/work6.jpg" alt="image" />

                <div className="content">
                  <Image
                    src="/images-ceibo/areasdeservicio/customer-engagement@2x.png"
                    alt="image"
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                  <h5>{customereng}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={openStrategy}
        onClose={() => setOpenStrategy(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={matches ? style : mobileStyles} className="modal-content">
          <div className="row align-items-center">
            <div className="col-12 ">
              <div className="d-flex justify-content-between align-items-center">
                <h3>{estrategia}</h3>
                {!matchesSM && (
                  <IconButton onClick={() => setOpenStrategy(false)}>
                    <CloseIcon color="primary" fontSize="large" />
                  </IconButton>
                )}
              </div>
              <p>{estrategiaModalTxt1}</p>

              <Typography
                id="modal-modal-description"
                sx={{ my: 1, pb: 1, color: "#fff" }}
              >
                {nuestrosProyectos}
              </Typography>
              <ul>
                <li>{estrategiaModalItem1}</li>
                <li>{estrategiaModalItem2}</li>
                <li>{estrategiaModalItem3}</li>
                <li>{estrategiaModalItem4}</li>

                <li>{estrategiaModalItem5}</li>
              </ul>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={openExcelencia}
        onClose={() => setOpenExcelencia(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={matches ? style : mobileStyles} className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h3> {excelencia}</h3>
            {!matchesSM && (
              <IconButton onClick={() => setOpenExcelencia(false)}>
                <CloseIcon color="primary" fontSize="large" />
              </IconButton>
            )}
          </div>
          <p>{excelenciaModalText1}</p>
          <Typography id="modal-modal-description" sx={{ my: 1, pb: 1 }}>
            {nuestrosProyectos}
          </Typography>
          <ul>
            <li>{excelenciaModalItem1}</li>
            <li>Supply chain</li>
            <li>LEAN</li>
            <li>PMO </li>
            <li>Agile</li>
            <li>Robot Process Automation </li>
            <li>Machine Learning </li>
            <li>Deep Learning </li>
          </ul>
        </Box>
      </Modal>

      <Modal
        open={openOrganizacion}
        onClose={() => setOpenOrganizacion(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={matches ? style : mobileStyles} className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h3> {locale == "es" ? "Organización" : "Organization"}</h3>
            {!matchesSM && (
              <IconButton onClick={() => setOpenOrganizacion(false)}>
                <CloseIcon color="primary" fontSize="large" />
              </IconButton>
            )}
          </div>
          <p>{organizacionModalText1}</p>
          <Typography id="modal-modal-description" sx={{ my: 1, pb: 1 }}>
            {nuestrosProyectos}
          </Typography>
          <ul>
            <li>{organizacionModalItem1}</li>
            <li>{organizacionModalItem2}</li>
            <li>{organizacionModalItem3}</li>
            <li>{organizacionModalItem4} </li>
            <li>{organizacionModalItem5} </li>
            <li> {organizacionModalItem6}</li>
            <li>{organizacionModalItem7} </li>
          </ul>
        </Box>
      </Modal>

      <Modal
        open={openInnovacion}
        onClose={() => setOpenInnovacion(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={matches ? style : mobileStyles} className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h3> {innovacion}</h3>
            {!matchesSM && (
              <IconButton onClick={() => setOpenInnovacion(false)}>
                <CloseIcon color="primary" fontSize="large" />
              </IconButton>
            )}
          </div>
          <p>{innovacionModalText1}</p>
          <Typography id="modal-modal-description" sx={{ my: 1, pb: 1 }}>
            {nuestrosProyectos}
          </Typography>
          <ul>
            <li>{innovacionModalItem1}</li>
            <li>{innovacionModalItem2}</li>
            <li>{innovacionModalItem3}</li>
            <li>{innovacionModalItem4}</li>
            <li>{innovacionModalItem5}</li>
          </ul>
        </Box>
      </Modal>

      <Modal
        open={openCustomer}
        onClose={() => setOpenCustomer(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={matches ? style : mobileStyles} className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h3> {customereng}</h3>
            {!matchesSM && (
              <IconButton onClick={() => setOpenCustomer(false)}>
                <CloseIcon color="primary" fontSize="large" />
              </IconButton>
            )}
          </div>
          <p>{customerengModalText1}</p>
          <Typography id="modal-modal-description" sx={{ my: 1, pb: 1 }}>
            {nuestrosProyectos}
          </Typography>
          <ul>
            <li>{customerengModalItem1}</li>
            <li>{customerengModalItem2}</li>
            <li>{customerengModalItem3}</li>
            <li>{customerengModalItem4}</li>
            <li>{customerengModalItem5}</li>
            <li>{customerengModalItem6}</li>
            <li>{customerengModalItem7}</li>
            <li>{customerengModalItem8}</li>
            <li>{customerengModalItem9} </li>
          </ul>
        </Box>
      </Modal>
    </>
  )
}

export default AreasDeServicio
