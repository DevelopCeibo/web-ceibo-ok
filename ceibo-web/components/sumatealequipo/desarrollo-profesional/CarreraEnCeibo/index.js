import React from "react";
import CarreerPathImage from "./CarreerPathImage";
import Introduction from "./Introduction";
import ExploreOurCareerPathSwiper from "./ExploreOurCareerPathSwiper";

const Index = () => {
  return (
    <div className="container mt-5 pt-5 mb-5">
      <Introduction />
      <CarreerPathImage />
      <ExploreOurCareerPathSwiper />
    </div>
  );
};

export default Index;
