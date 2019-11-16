import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={`navbar is-dark`} role='navigation' aria-label='main navigation'>
      <div className={`${styles.brandContainer} is-flex-mobile`}>
        <Link className={`has-text-brand`} to='/'>
          Pair Spinner
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
