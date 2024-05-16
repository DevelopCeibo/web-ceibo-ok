import React, { useState, useEffect } from "react";
import NavbarFive from "../../components/Layouts/NavbarFive";
import Footer from "../../components/Layouts/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import EventBanner from "../../components/Events/EventBanner";
import events from "../../utils/eventos.json";
import eventsEN from "../../utils/eventosEN.json";
import EventPageGenerator from "../../components/Events/EventPageGenerator";
import EventNavSection from "../../components/Events/EventNavSections";
import FooterCeiboGrowth from "../../components/Layouts/FooterCeiboGrowth";

const Event = () => {
	const router = useRouter();
	const { locale } = useRouter();
	const pathEvent = router.asPath.split("/")[2];
	const [event, setEvent] = React.useState({});
	const [eventsToUse, setEventsToUse] = useState([]);

	useEffect(() => {
		const selectedEvents = locale === "es" ? events : eventsEN;
		setEventsToUse(selectedEvents);
		const selectedEvent = selectedEvents.find(
			(event) => event["path-url"] === pathEvent
		);
		if (selectedEvent) {
			setEvent(selectedEvent);
		}
	}, [pathEvent, locale]);

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
			<EventNavSection events={eventsToUse} />
			<FooterCeiboGrowth />
		</>
	);
};

export default Event;
