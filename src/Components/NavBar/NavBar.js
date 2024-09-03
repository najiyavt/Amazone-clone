import React from 'react'
import NavBarBanner from './NavBarBanner/NavBarBanner'
import NavBarBelt from './NavBarBelt/NavBarBelt'

export const NavBar = () => {
  return (
    <div className='Navbar'>
        <NavBarBelt />
        <NavBarBanner />    
    </div>
  )
}
