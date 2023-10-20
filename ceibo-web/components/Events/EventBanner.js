import React from "react";
import AuthorHeader from "../Insights/AuthorHeader";
const EventBanner = ({
	eventTitle,
	BGImage,
	bgcolor,
	textcenter,
	speakers,
	date,
}) => {
	return (
		<>
			<div
				className={`${
					BGImage
						? "page-title-area-backdrop-justText"
						: "page-title-area"
				} ${textcenter ? "text-center" : null}`}
				style={{
					backgroundImage: `url(${BGImage ?? BGImage})`,
					backgroundColor: bgcolor,
					paddingBottom: "0px",
				}}
			>
				<div className="insight-banner">
					<div className="container main-banner-content bc-w">
						<div className="banner-core">
							<h2>
								<span
									className="core-concept"
									style={{
										fontWeight: "bold",
										fontSize: "1.2rem",
										display: "inline",
									}}
								>
									Webinar
								</span>
							</h2>
						</div>
						<h1 className="article-title">{eventTitle}</h1>
						<AuthorHeader
							author={speakers}
							date={date}
						></AuthorHeader>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventBanner;
