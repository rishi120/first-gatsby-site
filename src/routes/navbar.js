import React from 'react'
import { Link } from 'gatsby'

export default function Navbar({ navMenu }) {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        {navMenu.map((menuItems, index) => {
          return <Link to={menuItems.navPath} key={index}>{menuItems.navTitle}</Link>
        })}
      </div>
    </nav>
  )
}