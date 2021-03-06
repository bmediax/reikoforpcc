module.exports = {
  siteMetadata: {
    title: `Reiko for PCC`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
          useResolveUrlLoader: true,
        },
      },
    },
  ]
}
