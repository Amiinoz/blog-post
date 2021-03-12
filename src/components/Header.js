import React from 'react'
import { Link } from 'gatsby'
import * as headerStyles from './header.module.scss'


const Header = () => {

  return (

    <header className={headerStyles.header}>
      <h1 >
        <Link className={headerStyles.title} to='/'>
          Mo Magan
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
