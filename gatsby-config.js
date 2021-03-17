
module.exports = {
  siteMetadata: {
    title: "MosDev Blog",
    description: "Blog post",
    author: "@momagan",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        // from contentful - settings - APIkeys - example key1

        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // specific to remark
          "gatsby-remark-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 850,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
