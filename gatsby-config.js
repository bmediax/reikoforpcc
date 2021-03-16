require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Reiko for PCC",
    description: "I am an experienced school administrator, an advocate for justice, and a collaborator. As the next Portland Community College board director for Zone 7, I will ensure that PCC advances diversity, equity, and inclusion.",
    author: "Reiko4PCC",
    // keywords: "Reiko Mia Williams, Reiko For PCC, Reiko, Reiko4PCC, Portland Community College, Zone 7, PCC Zone 7",
    siteUrl: "https://reikoforpcc.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "process.env.GA_TRACKING_ID",
      },
    },
  ],
};
