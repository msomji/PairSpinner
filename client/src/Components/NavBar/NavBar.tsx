import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
const NavBar = () => {
  return (
    <nav className="level has-background-dark has-text-primary is-marginless">
      <div className="level-item has-text-centered">
        <div className="is-hidden-mobile">
          <h2 className="is-size-3">Spins</h2>
          <h2 className="has-text-primary is-size-3">3,456</h2>
        </div>
      </div>
      <div className="level-item">
        <Link to={'/'}>
          <h1 className="has-text-primary">Pair Spinner</h1>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <div className="is-hidden-mobile">
          <h2 className="is-size-3">Teams</h2>
          <h2 className="has-text-primary is-size-3">789</h2>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
