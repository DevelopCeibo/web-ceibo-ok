import React, { useState } from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/Layouts/Footer";
import Form from "../../components/Events/eventForm"
import Link from "next/link";
import eventosES from "../../utils/eventos.json";
import eventosEN from "../../utils/eventosEN.json";
import Head from "next/head";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const Eventos = () => {
  const { locale } = useRouter();

  const { t } = useTranslation("common");
  const miraPasados = t("miraPasados");

  const eventosh1 = t("eventosh1");
  const eventosh2 = t("eventosh2");
  const eventosTitleTag = t("eventosTitleTag");
  const eventosMetaDesc = t("eventosMetaDesc");

  const [eventosData, seteventosData] = useState(
    locale == "en" ? eventosES : eventosES
  );

  React.useEffect(() => {
    if (locale == "en") {
      seteventosData(eventosEN);
    } else {
      seteventosData(eventosES);
    }
  }, [locale]);

  return (
    <>
      <Head>
        <title>{eventosTitleTag}</title>
        <meta name="description" content={eventosMetaDesc} />{" "}
      </Head>
      <NavbarTwo />
      <PageBanner
        pageTitle={eventosh1}
        BGImage={"/images-ceibo/Banner-eventos.jpeg"}
        bgcolor="#b72837"
        subtitle={eventosh2}
      />
      <div className="pt-100 pb-70">

        {/* INICIO FORMULARIO EVENTO */}
        {/* <Form/> */}
        {/* FIN FORMULARIO */}

        <div className="section-title pt-5">
          <h2>{miraPasados}</h2>
        </div>
        <div className="container">
          <section className="row justify-content-center">
            {eventosData[0] &&
              eventosData.map((ev, idx) => {
                return (
                  <div className="col-lg-4 col-md-6" key={idx}>
                    <div className="single-blog-item ">
                      <div className="blog-image">
                        <Link href={ev.link}>
                          <a target="_blank">
                            <img src={ev.img} alt="ceibo" />
                          </a>
                        </Link>
                      </div>

                      <div className="blog-post-content blog">
                        <span className="date">{ev.metadata.date}</span>

                        <h6>
                          <a>{ev.title}</a>
                        </h6>

                        <p>{ev.desc}</p>

                        {locale == "en" && (
                          <span className="date">
                            This webinar was held in spanish *
                          </span>
                        )}
                        <Link href={ev.link}>
                          <a className="read-more-btn" target="_blank">
                            {locale == "en" ? "Watch webinar" : "Ver webinar"}
                            <i className="fa-solid fa-angles-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Eventos;
