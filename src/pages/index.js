import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/Footer'
import Header from '../components/Header'

const IndexPage = () => {

  return (
    <div>

      <Header />
      <h1>Hello.</h1>
      <h3>I am Mohamed a web developer based in Calgary, Canada</h3>
      <p>Need a developer? <Link to="/Contact"> Contact me.</Link></p>
      <Footer />
    </div>

  )
}

export default IndexPage
