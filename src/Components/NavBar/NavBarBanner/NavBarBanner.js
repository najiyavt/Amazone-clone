import React from 'react'
import './NavBarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export const NavBarBanner = () => {
  const options = [
    {'name' : 'Fresh'}, {'name' : 'Amazone miniTV'},
    {'name' : 'Buy Again'},  {'name' : 'Sell'},
    {'name' : 'AmazonBasics'}, {'name' : 'Amazon Pay'},
    {'name' : "Today's Deals"},{'name' : 'Customer Service'},
    {'name' : 'Gift Cards'}, {'name' : 'Gift Ideas'},
  ]
  return (
    <div className='navbarBanner'>
       <div className='navbarBannerOptionsLeft'>
        
        <div className='optionsNavbarBanner'>
          <MenuIcon sx={{fontSize:'24px'}} />
          <div className='alloptionsNavbarBanner'>All</div>
        </div>

         {options.map((item,index) => {
          return (
            <Link to={'/products'} className='optionsNavbarBanner' key={index}>
              <div className='alloptionsNavbarBanner'>{item.name}</div>
              </Link>
          )
         })}


       </div>
       <div className='navbarBannerRightSide'>
        {/* <img src=''></img> */}
       </div>
    </div>
  )
}

export default NavBarBanner;