import React from "react";

const CardWithVideo = ({ videoURL, title, text }) => {
  return (
    <div className="card-with-video background-grey">
      <iframe
        src={videoURL}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen="allowfullscreen"
      ></iframe>
      <div className="card-with-video-content">
        <h5>{title} </h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardWithVideo;
