import React from 'react'
import './NavBarBelt.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../../Assets/Amazon-Emblem.jpg'
import india from '../../../Assets/Flag_of_India.svg.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

export const NavBarBelt = () => {
  return (
    <div className='navbarBelt' > 
        <div className='leftNavBelt'>
            <Link to={'/'} className='leftNavBeltLogo'>
                <img className='amazonLogoNavbar' src={logo} alt='amazonelogo'></img>
                <span className='navbar_inLogo'>.in</span>
            </Link>

            <div className='navbarBeltLocation'>
                <div className='navbarBeltLocationImg'>
                    <LocationOnIcon className='navbarBeltLocationImgIcon' sx={{fontSize:'22px'}} />
                </div>
                <div className='navbarBeltLocationPlace'>
                     <div className='navbarBeltLocationTop'>Delivering to Kerala 83647</div>
                     <div className='navbarBeltLocationButtom'>Update Location</div>
                </div>
            </div>
        </div>

    <div className='navbarBeltSearchBox'>
        <div className='navbarBeltSearchBoxDiv'>
            <div className='navbarBeltSearchBoxAll'>
                <div className='navbarBeltSearchBoxAllText'>All</div>
                <ArrowDropDownIcon sx={{fontSize:'20px'}} />
            </div>
            <input type='text' className='navbarBeltInputSearchBox' placeholder='Searc Amazon.in'/>
            <div className='seacrhIconNavbarBelt'>
                <SearchIcon sx={{fontSize:'26px'}} className='searchIconNavbarBeltIcon' />
            </div>
        </div>
    </div>
    <div className='rightSideNavbarBelt'>
        <div className='indianFlagCode'>
            <img src={india} className='indianFlag' />
            <div className='indianFlagBelt' >EN 
                <ArrowDropDownIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} 
                className='indianFlagBeltDrp' /></div>
        </div>
        
        <div className='helloSignInNavbarBelt'>
            <div className='helloTopInNavbarBelt'>Hello , User</div>
            <div className='indianCodeNvbarBelt'> Accounts & Lists</div>
        </div>
        <div className='helloSignInNavbarBelt'>
            <div className='helloTopInNavbarBelt'>Returs</div>
            <div className='indianCodeNvbarBelt'>&Orders</div>
        </div>
        <div className='helloSignInNavbarBelt'>
            <span className='cartItemNumberNavbarBelt'>2</span>
            <div className='helloTopNavBarBelt'><ShoppingCartIcon />
                <span className='cartTitle'>Cart</span>
            </div>
        </div>
    </div>
    </div>
  )
}
export default NavBarBelt;
