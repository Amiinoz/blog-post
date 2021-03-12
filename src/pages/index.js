import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const IndexPage = () => {

  return (
    <Layout>
      <h1>Hello.</h1>
      <h3>I am Mohamed a web developer based in Calgary, Canada</h3>
      <p>Need a developer? <Link to="/Contact"> Contact me.</Link></p>
    </Layout>

  )
}

export default IndexPage
