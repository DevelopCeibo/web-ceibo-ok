import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import uniqid from "uniqid";
const InstagramFeed = () => {
  const [feed, setFeed] = useState([]);
  const getFeed = async () => {
    const url = `${baseUrl}/api/instagram`;
    const response = await axios.get(url);
    const fetchedFeed = response.data.feed;
    setFeed(fetchedFeed);
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    <div className="row mt-5 mb-5 pb-100 justify-content-center my-0 mx-auto">
      {feed.length > 0 ? (
        feed?.map((media) => {
          return (
            <div
              key={uniqid()}
              className="d-flex justify-content-center col-6 col-sm-4 col-lg-2 px-0"
            >
              <a target="_blank" href={media.permalink}>
                <img
                  src={media.media_url}
                  className="instagram-feed-image"
                ></img>
              </a>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default InstagramFeed;
