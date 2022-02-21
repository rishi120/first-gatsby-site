import React from 'react'
import { Link } from 'gatsby'

export default function Navbar({ navMenu, active, handleNavLink }) {
  return (
    <nav className='flex justify-between'>
      <h1 className='font-bold text-3xl'>Web Warrior</h1>
      <div className="inline-block text-right">
        {navMenu.map((menuItems, index) => {
          return <Link to={menuItems.navPath} key={index} className={active === menuItems.navPath ? "active" + " inline-block ml-12 font-semibold text-sm pb-2 transition-all hover:text-black" : "" + " inline-block ml-12 font-semibold text-sm pb-2 transition-all hover:text-black"}>{menuItems.navTitle}</Link>
        })}
      </div>
    </nav>
  )
}