import React from "react";
import CardWithVideo from "../../../Common/CardWithVideo";
import useTranslation from "next-translate/useTranslation";
import uniqid from "uniqid";
const CareerPathVideos = () => {
  const { t } = useTranslation("common");
  const videoContentArray = t(
    "careerPathVideosContent",
    {},
    { returnObjects: true }
  );
  console.log(videoContentArray);
  return (
    <div className="row mt-5">
      {videoContentArray?.map((content) => {
        return (
          <div
            key={uniqid()}
            className="col-12 col-md-6 d-flex justify-content-center mb-3"
          >
            <CardWithVideo
              videoURL={content.videoURL}
              title={content.title}
              text={content.text}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CareerPathVideos;
