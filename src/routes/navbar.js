import React from 'react'
import { Link } from 'gatsby'

export default function Navbar({ navMenu, active, handleNavLink }) {
  return (
    <nav>
      <h1 className='font-bold text-3xl'>Web Warrior</h1>
      <div className="links">
        {navMenu.map((menuItems, index) => {
          return <Link to={menuItems.navPath} key={index} className={active == menuItems.navPath ? "active" : ""}>{menuItems.navTitle}</Link>
        })}
      </div>
    </nav>
  )
}