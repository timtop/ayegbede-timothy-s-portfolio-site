module.exports = {
  siteMetadata: {
    // siteUrl: "https://nervous-cori-ab4648.netlify.app",
    siteUrl: "https://timothyayegbede.com",
    title: "Timothy Ayegbede's Portfolio Site",
    titleTemplate: "%s · Portfolio Website",
    description: "Welcome to Timothy Ayegbede's Website.",
    // url: "https://nervous-cori-ab4648.netlify.app", // No trailing slash allowed!
    url: "https://timothyayegbede.com", // No trailing slash allowed!
    image: "./images/Website Preview.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@just_timothy_",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-ZK3GP1XQKT", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],

          // Defaults to https://www.googletagmanager.com
          // origin: "https://www.timothyayegbede.com",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
