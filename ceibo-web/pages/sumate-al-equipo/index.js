import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import PageBanner from "../../components/Common/PageBanner";
import CarreraEnCeibo from "../../components/sumatealequipo/CarreraEnCeibo";
import NuestraCultura from "../../components/sumatealequipo/NuestraCultura";
import Footer from "../../components/Layouts/Footer";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import PorQueCeibo from "../../components/sumatealequipo/PorQueCeibo";
import Vacantes from "../../components/HomePages/BusinessConsulting/Vacantes";
import ListoParaAplicar from "../../components/sumatealequipo/ListoParaAplicar";
import TalentoGlobal from "../../components/sumatealequipo/TalentoGlobal";
import ConsultingTeam from "../../components/sumatealequipo/ConsultingTeam";
import SpecialistCrew from "../../components/sumatealequipo/SpecialistCrew";
import GrowthMarketing from "../../components/sumatealequipo/GrowthMarketing";

const sumatealequipo = () => {
	const { t } = useTranslation("common");

	const sumateh1 = t("sumateh1");
	const sumateh2 = t("sumateh2");
	const sumateMetaDesc = t("sumateMetaDesc");

	return (
		<>
			<Head>
				<title>{sumateh1}</title>
				<meta name="description" content={sumateMetaDesc} />
			</Head>
			<NavbarFive />
			<PageBanner
				pageTitle={sumateh1}
				subtitle={sumateh2}
				BGImage="/images-ceibo/Banner-sumate-al-equipo.jpg"
			/>
			<PorQueCeibo />

			<CarreraEnCeibo />
			<NuestraCultura />
			<TalentoGlobal />
			<ConsultingTeam/>
			<SpecialistCrew/>
			<GrowthMarketing/>
			<ListoParaAplicar />
			<Footer />
		</>
	);
};

export default sumatealequipo;
