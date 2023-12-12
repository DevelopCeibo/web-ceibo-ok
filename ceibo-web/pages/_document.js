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
          <meta
            name="google-site-verification"
            content="MiSdMw4nLxp1Qd0UF48U_gt7y14H_mlRi8sWs0Q0k_E"
          />
          {/* <!-- Google tag (gtag.js) --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-2BYZD1VPZ1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-2BYZD1VPZ1') `,
            }}
          ></script>
          {/* Microsoft clarity tag*/}
          {process.env.USE_MICROSOFT_CLARITY ?
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `(function(c,l,a,r,i,t,y){
                         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                          })(window, document, "clarity", "script", "k4taxy0gak");`,
              }}
            /> : <></>}

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
