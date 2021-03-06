import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as headerStyles from './header.module.scss'



const Header = () => {

  // fetch data from graphQl
  const data = useStaticQuery(graphql`query {
	site {
    	          siteMetadata {
        	title
    }
  }
}`)

  return (

    <header className={headerStyles.header}>
      <h1 >
        <Link className={headerStyles.title} to='/'>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav >
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/' >Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/Blog' >Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/About' >About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/Contact' >Contact</Link>
          </li>
        </ul>
      </nav>
    </header>

  )

}

export default Header
