
module.exports = {

  siteMetadata: {
    title: 'MosDev Blog',
    description: 'Blog post',
    author: '@momagan',

  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
