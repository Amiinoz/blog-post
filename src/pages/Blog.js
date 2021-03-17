import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import * as blogStyles from "./blog.module.scss"

// Render contentful posts
// 1. Swap out the markdown query with the contentful query
// 2. Update the component to render the new data

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.singlePost}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
