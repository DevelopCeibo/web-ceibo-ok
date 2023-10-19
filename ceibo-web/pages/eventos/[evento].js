import React from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import Footer from "../../components/Layouts/Footer";
import InsightDetailsContent from "../../components/Insights/InsightDetailsContent";
import { useRouter } from "next/router";
import Head from "next/head";
import LatestNewsSlider from "../../components/Common/LatestNewsSlider";
import EventBanner from "../../components/Events/EventBanner";
import events from "../../utils/eventos.json";
import eventsEN from "../../utils/eventosEN.json";
import EventPageGenerator from "../../components/Events/EventPageGenerator";

const Event = () => {
	const router = useRouter();
	const { locale } = useRouter();
	const pathEvent = router.asPath.split("/")[2];
	const [event, setEvent] = React.useState({});

	React.useEffect(() => {
		let eventsToUse = locale === "es" ? events : eventsEN;
		eventsToUse.forEach((event) => {
			if (event["path-url"] === pathEvent) {
				setEvent(event);
			}
		});
	}, [pathEvent]);

	const TITLE_TAG = `${event?.title} - Ceibo Digital`;
	const META_DESC = `${event?.desc}`;
	return (
		<>
			<Head>
				<title>{TITLE_TAG}</title>
				<meta name="description" content={META_DESC} />
			</Head>
			<NavbarFive />
			<EventBanner
				eventTitle={event?.title}
				BGImage={event?.img}
				textcenter={true}
				author={event?.metadata?.speakers}
				date={event?.metadata?.date}
			/>
			<EventPageGenerator event={event} />
			{/* <LatestNewsSlider type={"insights"} /> */}
			<Footer />
		</>
	);
};

export default Event;
