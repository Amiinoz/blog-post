import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from "../components/head"


const About = () => {

  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        My name is Mohamed Magan, I am a software developer and ui/ux designer based
        in Calgary Canada, I am passionate about solving problems and building
        beautiful digital products. You can check out my work, drop me a line
        and say hi, or share what projects you are working on.I am currently
        open for new opportunities.
      </p>
      <p>
        <Link to="/Contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default About
