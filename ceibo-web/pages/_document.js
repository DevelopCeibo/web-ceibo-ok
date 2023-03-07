import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&display=swap"
            rel="stylesheet"
          />

          {/* 
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Saira:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          /> */}

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link rel="icon" type="image/png" href="/favicon.png"></link>
          {/*  */}
          <meta
            name="description"
            content="Ceibo digital es una consultora que le acompaña en el diseño e implementación de la transformación digital para empresas. Tecnologías disruptivas y cultura digital."
          ></meta>
          <meta
            name="title"
            content="Transformación Digital - Cosultora para Empresas - Ceibo Digital"
          />
          <meta
            property="og:description"
            content="Ceibo digital es una consultora que le acompaña en el diseño e implementación de la transformación digital para empresas. Tecnologías disruptivas y cultura digital."
          ></meta>
          <link rel="canonical" href="https://ceibo.digital/"></link>
          <meta property="og:locale" content="es_ES"></meta>
          <meta property="og:type" content="website"></meta>
          <meta
            property="og:title"
            content="Transformación digital para su empresa. Consultora Ceibo Digital"
          ></meta>
          <meta property="og:url" content="https://ceibo.digital/"></meta>
          <meta property="og:site_name" content="Ceibo Digital"></meta>
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2BYZD1VPZ1"
          ></Script>
          <Script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-2BYZD1VPZ1')} `,
            }}
          />

          {/* </Script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
