//first node you need is onCreateNode

const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    // console.log(node)
    //console.log(JSON.stringify(node, undefined, 4))
    //console.log('@@@@@@@@@@', slug)

    createNodeField({
      node,
      name: 'slug',
      value: slug

    })

  }


}

// Creating dynamic blog pages
// 1. get path to template
// 2. get markdown data
// 3. create new page

module.exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

}

