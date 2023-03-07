const generateUrl = (str) => {
  return str.toLowerCase().split(" ").join("-")
}

export default generateUrl
