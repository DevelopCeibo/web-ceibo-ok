const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://001-ceibo-web-front-bc71.vercel.app"
    : // ? "https://ceibo.digital"
      "http://localhost:3000"

export default baseUrl
