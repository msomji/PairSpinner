import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="level has-background-primary has-text-light">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Spins</p>
          <p className="title has-text-light">3,456</p>
        </div>
      </div>
      <div className="level-item is-size-1">
        <Link to={'/'}>
          <h1 className="has-text-light">Pair Spinner</h1>
        </Link>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Teams</p>
          <p className="title has-text-light">789</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
