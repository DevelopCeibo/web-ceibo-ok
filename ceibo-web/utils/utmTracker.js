import baseUrl from "./baseUrl";

const trackUTMs = (path) => {
	const utmParamsToTrack = [
		"utm_source",
		"utm_medium",
		"utm_campaign",
		"utm_term",
		"utm_content",
	];
	const url = `${baseUrl}${path}`;
	const urlObj = new URL(url);
	const trackedUTMs = {};

	utmParamsToTrack.forEach((param) => {
		urlObj.searchParams.has(param)
			? (trackedUTMs[param] = urlObj.searchParams.get(param))
			: (trackedUTMs[param] = "");
	});

	return trackedUTMs;
};

export default trackUTMs;
