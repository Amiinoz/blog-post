
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // specific to remark
          'gatsby-remark-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 850,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
  ],
}
