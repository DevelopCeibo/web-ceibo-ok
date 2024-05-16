import React from "react";
import Head from "next/head";
import NavbarFive from "../../../components/Layouts/NavbarFive";
import PageBanner from "../../../components/Common/PageBanner";
import Footer from "../../../components/Layouts/Footer";
import useTranslation from "next-translate/useTranslation";
import TalentoGlobal from "../../../components/sumatealequipo/talento-global/index";
import FooterCeiboGrowth from "../../../components/Layouts/FooterCeiboGrowth";
const index = () => {
	const { t } = useTranslation("common");
	const h1 = t("talentoGlobal");
	const h2 = t("talentoGlobalH2");
	const metaDescription = t("talentoGlobalMetaDescription");

	return (
		<>
			<Head>
				<title>{h1}</title>
				<meta name="description" content={metaDescription} />
			</Head>
			<NavbarFive />
			<PageBanner
				pageTitle={h1}
				subtitle={h2}
				BGImage="/images-ceibo/sumatealequipo/talento-global/banner.jpg"
			/>
			<TalentoGlobal />
			<FooterCeiboGrowth />
		</>
	);
};

export default index;
