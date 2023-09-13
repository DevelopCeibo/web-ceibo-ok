import axios from "axios";

const filterFeed = (feed) => {
  feed = feed.filter((media) => media.media_type !== "VIDEO");
  feed = feed.slice(0, 6);
  return feed;
};

export default async (req, res) => {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
    const response = await axios.get(url);
    let feed = response.data.data;
    feed = filterFeed(feed);
    return res.status(200).json({ feed });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error while fetching Instagram feed", error });
  }
};
