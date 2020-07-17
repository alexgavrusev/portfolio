require("dotenv").config();

module.exports = {
  siteMetadata: {
    lang: "en",
    // HACK: using arrays so that graphql doesn't add absent fields to items
    meta: [
      [
        ["name", "viewport"],
        ["content", "width=device-width, initial-scale=1, shrink-to-fit=no"],
      ],
      [
        ["name", "author"],
        ["content", "@gavrusev"],
      ],
      [
        ["name", "description"],
        ["content", "Creating performant websites and PWAs"],
      ],
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Alex Gavrusev",
        short_name: "Gavrusev",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#07272d",
        display: "minimal-ui",
        icon: "src/images/icon.png",
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true,
        isUsingColorMode: false,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
};
