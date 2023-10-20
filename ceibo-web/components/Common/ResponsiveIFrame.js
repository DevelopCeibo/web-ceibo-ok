import React from "react";

const ResponsiveIFrame = ({ videoSrc }) => {
	return (
		<iframe
			src={videoSrc}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
			className="responsive-iframe"
		></iframe>
	);
};

export default ResponsiveIFrame;
