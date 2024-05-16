import React from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import NavbarFive from "../../components/Layouts/NavbarFive"
import Footer from "../../components/Layouts/Footer"
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent"
import publicaciones from "../../utils/publicaciones.json"
import { useRouter } from "next/router"
import PageBanner from "../../components/Common/PageBanner"
import Head from "next/head"
import FooterCeiboGrowth from "../../components/Layouts/FooterCeiboGrowth"

const Publicacion = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const pathPublicacion = router.asPath.split("/")[2]

  const [data, setdata] = React.useState({})

  React.useEffect(() => {
    publicaciones.forEach((publicacion) => {
      if (publicacion["path-url"] === pathPublicacion) {
        setdata(publicacion)
      }
    })
  }, [pathPublicacion])

  const TITLE_TAG = `${data?.title} - Ceibo Digital`
  const META_DESC = `${data?.desc}`
  return (
    <>
      <Head>
        <title>{TITLE_TAG}</title>
        <meta name="description" content={META_DESC} />
      </Head>
      <NavbarFive />
      <PageBanner
        pageTitle={data.title}
        subtitle={`${
          locale == "es" ? data?.metadata?.date : data?.metadata?.dateEN
        }  ${
          data.metadata?.fuenteOriginal
            ? "- " + data.metadata?.fuenteOriginal
            : ""
        }`}
        BGImage={data.metadata?.bannerImg}
        textcenter={true}
      />
      <BlogDetailsContent publicacion={data} />
      <FooterCeiboGrowth />
    </>
  )
}

export default Publicacion
