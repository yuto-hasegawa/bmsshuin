const path = require("path");

module.exports = {
  siteMetadata: {
    title: "BMS衆議院選",
    description: "衆議院選挙を模した BMS チーム戦イベントです。各チーム（政党）はあらかじめ制作する BMS の方針（マニフェスト）を公開し、所属するメンバー（候補者）はマニフェストに沿った BMS を制作します。",
    author: "@BMS_Shuin",
  },
  plugins: [{
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve("./src/components/layout.jsx"),
        },
      },
    },
    `gatsby-plugin-sass`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "bmsshuin",
        short_name: "bmsshuin",
        start_url: "/",
        icon: "static/favicon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};