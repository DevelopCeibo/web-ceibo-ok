import React from "react"
import Link from "next/link"
import Image from "next/image"

const MainBanner = () => {
  return (
    <>
      <div
        className="consulting-banner-area"
        style={{
          backgroundImage: `url(/images/business-consulting/consulting-banner-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="consulting-banner-content">
            <h1>
              Somos una consultora de negocios que ayuda a sus clientes a
              diseñar e implementar su transformación digital
            </h1>

            <Link href="/contact">
              <a className="default-btn-two">
                Cultura <i className="fas fa-chevron-right"></i>
              </a>
            </Link>
          </div>
        </div>

        <div className="gptw-logo">
          <Image
            src="/images-ceibo/gptw.png"
            width={240}
            height={210}
            // layout="responsive"
          />
        </div>
      </div>
    </>
  )
}

export default MainBanner
