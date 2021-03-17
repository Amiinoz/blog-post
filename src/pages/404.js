import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title='404'/>
      <h1>Oh....Snap, My bad</h1>
      <p><Link to='/'>Head on back home</Link></p>

    </Layout>
  )
}

export default NotFound
