import React from "react";
import AuthorSidebar from "./AuthorSidebar";
import Share from "./Share";
import Subscribe from "../Insights/Subscribe";
import HorizontalLine from "../Insights/HorizontalLine";
import Tags from "../Insights/Tags";
import ResponsiveIFrame from "../Common/ResponsiveIFrame";
import { useRouter } from "next/router";

const EventPageGenerator = ({ event }) => {
	const { locale } = useRouter();
	return (
		<div className="container my-5">
			<div className="row">
				<div className="col-lg-2 col-md-12">
					<Share event={event} />
				</div>
				<div className="col-lg-8 col-md-12">
					<div className="blog-details">
						<div className="article-content">
							<ResponsiveIFrame videoSrc={event.embedLink} />
							<p className="text-justify mt-3">{event.desc}</p>
							{event.highlightedQuote ? (
								<div className="mb-5 px-2 py-2 bg-grey rounded-2">
									<h5 className="text-red-ceibo bold fa-1x">
										{locale === "es"
											? "Quote destacada"
											: "Highlighted quote"}
									</h5>
									<p className="fst-italic">
										{event.highlightedQuote}
									</p>
									<p>{event.highlightedQuoteAuthor}</p>
								</div>
							) : (
								<></>
							)}

							<HorizontalLine />
							{event?.metadata?.tags?.length ? (
								<Tags tags={event?.metadata?.tags} />
							) : (
								<></>
							)}
							<Subscribe />
						</div>
					</div>
				</div>
				<div className="col-lg-2 col-md-12">
					<AuthorSidebar event={event} />
				</div>
			</div>
		</div>
	);
};

export default EventPageGenerator;
