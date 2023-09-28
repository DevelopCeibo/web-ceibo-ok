import React from "react";
import useTranslation from "next-translate/useTranslation";
import CardWithVideo from "../../../Common/CardWithVideo";
import ThreeColumns from "./ThreeColumns";
import uniqid from "uniqid";
const ColumnWithVideo = () => {
  const { t } = useTranslation("common");
  const title = t("comoPrepararse");
  const paragraphs = t("comoPrepararseParagraphs", {}, { returnObjects: true });
  const paragraphListItems = t(
    "comoPrepararseItems",
    {},
    { returnObjects: true }
  );
  const comoPrepararseFinalParagraph = t("comoPrepararseFinalParagraph");
  const videoContent = t(
    "comoPrepararseVideoContent",
    {},
    { returnObjects: true }
  );
  return (
    <>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <div className="row">
        <div className="col-12 col-xl-7 como-prepararse-column-responsive">
          {paragraphs?.map((p) => {
            return (
              <p className="text-justify" key={uniqid()}>
                {p.text}
              </p>
            );
          })}
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-6">
              {paragraphListItems?.map((p, index) => {
                {
                  return index <= 2 ? (
                    <div
                      key={uniqid()}
                      className="row d-flex flex-nowrap ms-1 mb-3 align-items-center"
                    >
                      <div className="col-1 d-flex como-prepararse-list-index">
                        {index + 1}
                      </div>
                      <div className="col-11">
                        <p>{p.text}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                }
              })}
            </div>
            <div className="col-6 col-sm-6 col-md-6">
              {paragraphListItems?.map((p, index) => {
                {
                  return index >= 3 ? (
                    <div
                      key={uniqid()}
                      className="row d-flex flex-nowrap ms-1 mb-3 align-items-center"
                    >
                      <div className="col-1 d-flex como-prepararse-list-index">
                        {index + 1}
                      </div>
                      <div className="col-11">
                        <p>{p.text}</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                }
              })}
            </div>
          </div>

          <p className="mb-3 text-justify mt-4 mb-5">
            {comoPrepararseFinalParagraph}
          </p>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-center">
          <CardWithVideo
            title={videoContent.title}
            text={videoContent.description}
            videoURL={videoContent.videoURL}
          />
        </div>
      </div>
    </>
  );
};

export default ColumnWithVideo;
