//first node you need is onCreateNode

const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, 'md')

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
