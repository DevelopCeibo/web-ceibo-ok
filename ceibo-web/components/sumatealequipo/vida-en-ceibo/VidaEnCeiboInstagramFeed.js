import InstagramFeed from "../../Common/InstagramFeed";

import React from "react";
import useTranslation from "next-translate/useTranslation";

const VidaEnCeiboInstagramFeed = () => {
  const { t } = useTranslation("common");
  const title = t("seguinosEnRedes");
  return (
    <div className="container justify-content-center">
      <div className="section-title" style={{ maxWidth: "none" }}>
        <h2>{title}</h2>
      </div>
      <InstagramFeed />
    </div>
  );
};

export default VidaEnCeiboInstagramFeed;
