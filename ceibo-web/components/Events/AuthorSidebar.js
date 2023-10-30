import React from "react";
import useTranslation from "next-translate/useTranslation";
import { EmailShareButton } from "next-share";

const SpeakerSidebar = ({ event }) => {
	const { t } = useTranslation("common");
	const moderatorsPlural = t("moderadores");
	const moderatorsSingular = t("moderador");
	return (
		<>
			<div className="widget-area" id="secondary">
				<div className="widget widget_posts_thumb">
					<h3 className="event-speaker-subtitle">
						{event?.metadata?.speakers?.length > 1
							? "Speakers"
							: "Speaker"}
					</h3>
					<div className="mb-4">
						{event?.metadata?.speakers?.map((speaker) => {
							return (
								<>
									<h6 className="event-speaker">
										{speaker.name}
									</h6>
									<p>{speaker.position}</p>
								</>
							);
						})}
					</div>
					{event?.metadata?.moderators?.length ? (
						<h3 className="event-speaker-subtitle">
							{event?.metadata?.moderators?.length > 1
								? moderatorsPlural
								: moderatorsSingular}
						</h3>
					) : (
						<></>
					)}

					{event?.metadata?.moderators?.length ? (
						event.metadata.moderators.map((moderator) => {
							return (
								<>
									<h6 className="event-speaker">
										{moderator.name}
									</h6>
									<p>{moderator.position}</p>
								</>
							);
						})
					) : (
						<></>
					)}
					<div></div>
				</div>
			</div>
		</>
	);
};

export default SpeakerSidebar;
