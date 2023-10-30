import React from "react";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";
import EventNavCard from "./EventNavCard";
import { useRouter } from "next/router";
import { getRandomValues } from "../../utils/functions";
import Link from "next/link";
const EventNavSection = ({ events }) => {
	const eventsData = getRandomValues(events, 3);
	const { t } = useTranslation("common");
	const exploreWebinars = t("exploreWebinars");
	const allWebinars = t("allWebinars");
	return (
		<div className="bg-grey py-4">
			<div className="container">
				<div className="row d-flex mb-3">
					<div className="col-6">
						<h4 className="text-red-ceibo bold">
							{exploreWebinars}{" "}
						</h4>
					</div>
					<div className="col-6 d-flex justify-content-end align-items-center">
						<Link href={"/eventos"}>
							<a className="all-webinars-button text-red-ceibo bold">
								{allWebinars}
								<i className="fa-solid fa-angles-right ms-2"></i>
							</a>
						</Link>
					</div>
				</div>

				<div className="row justify-content-center">
					{eventsData?.map((event) => {
						return (
							<EventNavCard
								key={uniqid()}
								title={event.title}
								description={event.desc}
								date={event.metadata.date}
								imagePath={event.img}
								href={event["path-url"]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default EventNavSection;
