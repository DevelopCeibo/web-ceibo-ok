import React from "react"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import Image from "next/image"
import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation"

const CarreraEnCeibo = () => {
  const { t } = useTranslation("common")
  const carrera = t("carrera")
  const carreraTxt1 = t("carreraTxt1")
  const carreraTxt2 = t("carreraTxt2")
  const carreraTxt3 = t("carreraTxt3")

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"))

  const { locale } = useRouter()
  // Career - Path - inglés_mobile.png
  return (
    <div className="pt-70 pb-4 mt-4">
      <div className="container">
        <div className="section-title">
          <h2>{carrera}</h2>
        </div>
        <p className="mt-5 text-center">
          <strong>{carreraTxt1}</strong> {carreraTxt2}
          <br />
          <br />
          {carreraTxt3}
        </p>

        <Image
          src={`/images-ceibo/sumatealequipo/${
            locale == "es"
              ? "carrera-en-ceibo-español.jpg"
              : "Career-Path-inglés_1-11.png"
          }`}
          alt="carrera en ceibo"
          width={5}
          height={3}
          layout="responsive"
          // style={{ maxWidth: "900px" }}
        />

        {/* </div> */}

        {/* {matchesSM ? (
          <img src="/images-ceibo/sumatealequipo/carrera-en-ceibo-01-1536x769.jpg" />
        ) : (
          <img src="/images-ceibo/sumatealequipo/formato-vertical-pasos@3x-1514x1536.png" />
        )} */}
      </div>
    </div>
  )
}

export default CarreraEnCeibo
