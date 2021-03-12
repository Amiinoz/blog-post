import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'



const About = () => {

  return (
    <Layout>
      <h1>About Me</h1>
      <p>I currently working on my startup.</p>
      <p><Link to="/Contact">Want to work with me? Reach out.</Link></p>
    </Layout>
  )
}

export default About
