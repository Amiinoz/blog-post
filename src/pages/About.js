import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'


const About = () => {

  return (

    <div>
      <Header />

      <h1>About Me</h1>
      <p>I currently working on my startup.</p>
      <p><Link to="/Contact">Want to work with me? Reach out.</Link></p>

      <Footer />
    </div>
  )
}

export default About
