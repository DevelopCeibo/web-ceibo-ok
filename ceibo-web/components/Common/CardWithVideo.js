import React from "react";

const CardWithVideo = ({ videoURL, title, text }) => {
  return (
    <div className="card-with-video background-grey">
      <iframe
        className="card-video"
        width="560"
        height="315"
        src={videoURL}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <h5>{title} </h5>
      <p>{text}</p>
    </div>
  );
};

export default CardWithVideo;
