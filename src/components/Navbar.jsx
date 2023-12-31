import React, { useState } from 'react'
import MyntraLogo from "../Images/MyntraLogo.png"
import MyntraLoginImage from "../Images/Myntra-Login-Image.avif"
import "./compoStyle/Navbar.css"
import { CiUser } from "react-icons/ci"
import { BsHeart, BsBag, BsSearch } from "react-icons/bs"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../redux/Slices/AuthSlice'
import { auth } from "../Firebase"

function Navbar({ handleSearchInputChange, searchQuery }) {
  const [toggle, setToggle] = useState(false)
  const [profileHover, setProfileHover] = useState(false);

  const displayUserName = () => {
    setProfileHover(true)
  }

  const hideUserName = () => {
    setProfileHover(false)
  }

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutFromApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  const handleToggler = () => {
    setToggle(!toggle)
  }

  return (
    <div className='Navbar'>
      <div className='menu-logo-wrapper'>
        <div className="NavToggler">
          {toggle ? <RxCross2 onClick={handleToggler} className="ham-icon ham-absolute" /> : <RxHamburgerMenu onClick={handleToggler} className="ham-icon" />}
        </div>

        {
          toggle && (
            <>
              <div className="toggleNavbar">
                <img src={MyntraLoginImage} alt="MyntraImage" />
                <ul className='toggle-Nav-lists'>
                  <li> <NavLink to="/" className="navlink">MEN  </NavLink></li>
                  <li> <NavLink to="/" className="navlink">WOMEN  </NavLink></li>
                  <li> <NavLink to="/" className="navlink">KIDS  </NavLink></li>
                  <li> <NavLink to="/" className="navlink">HOME & LIVING  </NavLink></li>
                  <li> <NavLink to="/" className="navlink">OFFERS  </NavLink></li>
                </ul>
              </div>
            </>
          )
        }

        <div className='NavLogo'>
          <NavLink className="nav-link" to="/"><img src={MyntraLogo} alt="logo" /></NavLink>
        </div>
      </div>

      <div className='NavCategory'>
        <ul className='Nav-lists'>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME & LIVING</li>
          <li>OFFERS</li>
        </ul>
      </div>

      <div className='NavSearch'>
        <input type="text" placeholder='Search for products, brands and more' value={searchQuery} onChange={handleSearchInputChange} />

        <BsSearch className="searchbar-icon"
          onClick={handleSearchInputChange} />
      </div>

      <div className='NavRight'>
        <ul className='Nav-lists'>
          <li className='Nav-list' id='nav-right-list' onClick={logoutFromApp}>
            <div>
              {
                user ? (<img src={user.photoUrl} onMouseEnter={displayUserName} onMouseLeave={hideUserName} style={{ position: "relative" }} />) :
                  <CiUser fontSize={22} style={{ color: "6B6F7A", fontWeight: "700", borderRadius: "50%" }} />
              }
              {profileHover && <p style={{ position: "absolute", top: "9%", right: "9%", fontSize: "1.3rem" }}>{user.displayName}</p>}
            </div>

          </li>
          <NavLink className="nav-link" to="/wishlist"><li className='Nav-list' id='nav-right-list'><BsHeart fontSize={18} style={{ border: "5px solid 6B6F7A", fontWeight: "700" }} />Wishlist</li></NavLink>
          <NavLink className="nav-link" to="/cart"><li className='Nav-list' id='nav-right-list' ><BsBag fontSize={18} style={{ color: "6B6F7A", fontWeight: "700" }} />Bag</li></NavLink>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
