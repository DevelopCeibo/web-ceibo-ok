import React from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const NavigationCard = ({ title, description, imagePath, href }) => {
  const { t } = useTranslation("common");
  const verMas = t("vermas");
  return (
    <div className="navigation-card col-lg-4 col-md-6 col-sm-6 col-12">
      <Image
        src={imagePath}
        alt="image"
        className="rounded-10 navigation-card-image"
        width={1}
        height={0.5}
        layout="responsive"
      />
      <div className="navigation-card-body">
        <h6 className="navigation-card-title">{title}</h6>
        <p style={{ height: "55px" }}>{description}</p>
        <Link href={href}>
          <div style={{}}>
            <a className="read-more-btn">
              {verMas}
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationCard;
