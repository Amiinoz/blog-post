import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'

// 1. fetch the slug for post
// 2 . Use slug to generate a link to the post page
// 3 . test


const Blog = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields{
                slug
            }
            }
          }
        }
      }
  `)
  console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <Link to={`/blog/${edge.node.fields.slug}`}>
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
