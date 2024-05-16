import React, { useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import baseUrl from "../../utils/baseUrl";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { addEmailToSendgridContactList } from "../../services/sendgrid.service";
import { ceiboGrowthUrl } from "../../utils/ceiboGrowthLinks";
import { useRouter } from "next/router";

const alertContent = () => {
    MySwal.fire({
        title: "",
        text: "Suscripción realizada con éxito",
        icon: "success",
        timer: 3400,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};
const alertError = () => {
    MySwal.fire({
        icon: "error",
        // title: "Oops...",
        timer: 3000,
        text: "Algo salió mal!",
        footer: "Podes intentarlo más tarde, o comunicarte por otro medio",
    });
};
// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: "",
};
const FooterCeiboGrowth = () => {
    const { t } = useTranslation("common");
    const suscribiteNews = t("suscribiteNews");
    const suscribirme = t("suscribirme");
    const ceiboGrowthPhrase = t("ceiboGrowthPhrase")
    const ceiboDigitalPhrase = t("ceiboDigitalPhrase")
    const { locale } = useRouter()


    const currentYear = new Date().getFullYear();
    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setContact(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const formData = new FormData();
            formData.append("email", contact);
            formData.append(
                "subject",
                "Nuevo suscripto al newsletter desde la web de Ceibo"
            );
            formData.append("type", "newsletter");

            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status == 200) {
                alertContent();
            }
            setContact("");
            await addEmailToSendgridContactList(contact);
            return;
        } catch (error) {
            console.log(error);
            alertError();
            return;
        }
    };

    return (
        <>
            <footer className="footer-area" id="footer">
                <div className="container">
                    <div className="row mb-5 mb-md-4">
                        <div className="col-xl-3 col-lg-4 col-sm-12 col-md-5">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a className="d-flex justify-content-center justify-content-md-start">
                                            <img
                                                src="/images-ceibo/ceibo-logo-white.png"
                                                alt="ceibo logo"
                                                style={{ maxWidth: "240px" }}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-sm-12 col-md-7 d-md-flex align-items-center mb-md-4">
                            <p className="text-center text-md-start"> {ceiboDigitalPhrase}</p>
                        </div>
                    </div>
                    <div className="row mb-5 mb-md-4">
                        <div className="col-xl-3 col-lg-4 col-sm-12 col-md-5">
                            <div className="single-footer-widget"> 
                                <div className="logo">
                                    <Link href={`${ceiboGrowthUrl}/${locale}`} className="d-flex justify-content-center justify-content-md-start"> 
                                        <a target="_blank" className="d-flex justify-content-center justify-content-md-start">
                                            <img
                                                src="/images-ceibo/logo-ceibo-growth-white.png"
                                                alt="ceibo logo"
                                                style={{ maxWidth: "240px" }}
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-sm-12 col-md-7 d-md-flex align-items-center mb-md-4">
                            <p className="text-center text-md-start ">{ceiboGrowthPhrase}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-sm-12  col-xs-12 col-md-4">
                            <div className="single-footer-widget ml-4">
                                <p>
                                    <b>{suscribiteNews}</b>
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            value={contact.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12 col-sm-12 mb-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={handleSubmit}
                                        >
                                            {suscribirme}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-md-4">
                            <div className="single-footer-widget ml-4 d-md-flex justify-content-center">
                                <ul className="list">
                                    <li>
                                        <b>Buenos Aires</b> <br />
                                        Espacio Circular Innova
                                    </li>
                                    <li>
                                        <b>Miami</b> <br /> 777 Brickell Ave
                                        <br /> Suite 1210, FL, (33131)
                                    </li>
                                    <li>
                                        <b>Asunción</b> <br /> World Trade
                                        Center
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-md-4">
                            <div className="single-footer-widget">
                                {/* <h3>Get in Touch</h3> */}
                                <div className="social-links mb-2">
                                    <a
                                        href="https://www.linkedin.com/company/ceibodigital/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/ceibodigital/"
                                        target="_blank"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                                <ul className="get-in-touch">
                                    <li>
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href="mailto:info@ceibo.digital">
                                            info@ceibo.digital
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href="mailto:recruiting@ceibo.digital">
                                            recruiting@ceibo.digital
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterCeiboGrowth;
