import React from "react";
import CareerPathImage from "./CareerPathImage";
import Introduction from "./Introduction";
import ExploreOurCareerPathSwiper from "./ExploreOurCareerPathSwiper";
import CareerPathVideos from "./CareerPathVideos";
import ComoNosOrganizamos from "../../../Cultura/ComoNosOrganizamos";

const Index = () => {
  return (
    <div className="container mt-5 pt-5 mb-5">
      <ComoNosOrganizamos/>
      <Introduction />
      <CareerPathImage />
      <ExploreOurCareerPathSwiper />
      {/* <CareerPathVideos /> */}
    </div>
  );
};

export default Index;
