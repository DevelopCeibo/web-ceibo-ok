/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate")
const path = require("path")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  distDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en-US", "es-ES"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "es-ES",
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: "example.com",
        defaultLocale: "es-ES",
      },
      {
        domain: "example.com/en",
        defaultLocale: "en-US",
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
}

module.exports = nextTranslate(nextConfig)

// module.exports = nextConfig
