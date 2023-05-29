const baseUrl =
  process.env.NODE_ENV === "production"
    // ? "https://ceibo.digital"
    ? "https://web-ceibo-ok-git-develop-sergiomilla2019.vercel.app/"
    : "http://localhost:3000"

export default baseUrl
