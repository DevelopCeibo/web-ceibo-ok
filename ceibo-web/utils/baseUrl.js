const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.ceibo.digital"
    // ? "https://web-ceibo-ok-git-develop-ceibodigital.vercel.app/"
    : "http://localhost:3000";

export default baseUrl;
