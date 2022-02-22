import React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css";

export default function Navbar({ navMenu, active }) {

  const renderMenuLink = (menuItems, index) => {
    return <Link to={menuItems.navPath} key={index} className={active === menuItems.navPath ? "active" + " navLink hover:text-black" : "" + " navLink hover:text-black"}>{menuItems.navTitle}</Link>
  }
  return (
    <nav className='flex justify-between'>
      <h1 className='font-bold text-3xl'>Web Warrior</h1>
      <div className="inline-block text-right">
        {navMenu.map((menuItems, index) => {
          return renderMenuLink(menuItems, index)
        })}
      </div>
    </nav>
  )
}