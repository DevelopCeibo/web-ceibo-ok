const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ceibo.digital"
    : // ? "https://001-ceibo-web-front-bc71.vercel.app"
      "http://localhost:3000"

export default baseUrl
