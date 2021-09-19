import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/about">About</Link>
      </div>
      <div className="navbar__links">
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  )
}
