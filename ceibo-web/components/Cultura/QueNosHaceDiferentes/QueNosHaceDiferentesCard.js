import React from "react";

const QueNosHaceDiferentesCard = ({ src, title, text }) => {
  return (
    <div className="inst-culture-card">
      <img src={src} width={120} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default QueNosHaceDiferentesCard;
