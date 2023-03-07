import React from "react"
import NavbarTwo from "../../components/Layouts/NavbarTwo"
import Footer from "../../components/Layouts/Footer"
import BannerInfo from "../../components/casos-de-exito/BannerInfo"
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent"
import publicaciones from "../../utils/publicaciones.json"
import { useRouter } from "next/router"
import PageBanner from "../../components/Common/PageBanner"
import Head from "next/head"

const Publicacion = () => {
  const router = useRouter()
  const pathPublicacion = router.asPath.split("/")[2]

  const [data, setdata] = React.useState({})

  React.useEffect(() => {
    publicaciones.forEach((publicacion) => {
      if (publicacion.id === pathPublicacion) {
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
      <NavbarTwo />
      <PageBanner
        pageTitle={data.title}
        subtitle={`${data.metadata?.date}  ${
          data.metadata?.fuenteOriginal
            ? "- " + data.metadata?.fuenteOriginal
            : ""
        }`}
        BGImage={data.metadata?.bannerImg}
        textcenter={true}
      />
      <BlogDetailsContent publicacion={data} />
      <Footer />
    </>
  )
}

export default Publicacion
