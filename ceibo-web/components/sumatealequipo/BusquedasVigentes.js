import React from "react"
import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
const BusquedasVigentes = () => {
  const { t } = useTranslation("common")
  const busquedasvigentes = t("busquedasvigentes")
  const dataScientist = t("dataScientist")
  const manager = t("manager")
  const consultant = t("consultant")
  const associate = t("associate")
  const developer = t("developer")
  const vermas = t("vermas")
  const contactanos = t("contactanos")

  return (
    <div className="pt-70 pb-100 mb-3 mt-4">
      <div className="container ">
        <div className="section-title " id="busquedas-vigentes">
          <h2>{busquedasvigentes}</h2>
        </div>

        <div className="row justify-content-start">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="bc-post-item card-vacantes">
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(
                        /images-ceibo/sumatealequipo/ceibo-team-2.jpg
                      )`,
                }}
              >
                {/* <a className="d-block">
                      <img src="/images-ceibo/ceibo-team-2.jpg" alt="image" />
                    </a> */}
                {/* <img src="/images-ceibo/ceibo-team-2.jpg" /> */}
              </div>

              <div className="post-content">
                <div className="post-text">
                  <h6>Data scientist</h6>
                  <p>{dataScientist}</p>
                </div>
                <Link href="/sumate-al-equipo/data-scientist/">
                  <a className="link-btn link-btn-vacantes">
                    {vermas} <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="bc-post-item card-vacantes">
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(
                        /images-ceibo/manager-1.jpg
                      )`,
                }}
              >
                {/* <img src="/images-ceibo/manager-1.jpg" /> */}
              </div>
              <div className="post-content">
                <div className="post-text">
                  <h6>Manager</h6>
                  <p>{manager}</p>
                </div>
                <Link href="/sumate-al-equipo/manager/">
                  <a className="link-btn link-btn-vacantes">
                    {vermas} <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="bc-post-item card-vacantes">
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(
                        /images-ceibo/senior-consultant.jpeg
                      )`,
                }}
              >
                {/* <img src="/images-ceibo/senior-consultant.jpeg" /> */}
              </div>
              <div className="post-content">
                <div className="post-text">
                  <h6>Consultant- Project Leader</h6>
                  <p>{consultant}</p>
                </div>
                <Link href="/sumate-al-equipo/senior-consultant/">
                  <a className="link-btn link-btn-vacantes">
                    {vermas}
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="bc-post-item card-vacantes">
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(
                        /images-ceibo/sumatealequipo/Cultura-culturadigital2.jpeg
                      )`,
                }}
              >
                {/* <img src="/images-ceibo/sumatealequipo/cjr-opt.jpeg" /> */}
              </div>
              <div className="post-content">
                <div className="post-text">
                  <h6>Associate</h6>
                  <p>{associate}</p>
                </div>
                <Link href="/sumate-al-equipo/associate/">
                  <a className="link-btn link-btn-vacantes">
                    {vermas}
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <div className="bc-post-item card-vacantes">
              <div
                className="post-image"
                style={{
                  backgroundImage: `url(
                        /images-ceibo/sumatealequipo/Sumatealequipo-developersr.jpg
                      )`,
                }}
              >
                {/* <img src="/images-ceibo/sumatealequipo/Developer-full-stack.jpg" /> */}
              </div>
              <div className="post-content">
                <div className="post-text">
                  <h6>Developer Full-stack Sr</h6>
                  <p>{developer}</p>
                </div>
                <Link href="/sumate-al-equipo/senior-developer">
                  <a className="link-btn link-btn-vacantes">
                    {vermas}
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container btn-two-container">
          <Link href="/contacto/">
            <a className="default-btn-two">
              {contactanos} <i className="fas fa-chevron-down "></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BusquedasVigentes
