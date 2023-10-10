import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Pages/PageStyleCompo/CartToWishlist.css"

const CartToWishlist = () => {
  return (
    <div className='cartToWishlistParent'>
      <h2>PLEASE LOG IN</h2>
      <p>Login to view items in your wishlist.</p>
      <NavLink to="/login">
      <button className='wishlist-login'>LOGIN</button>
      </NavLink>
    </div>
  )
}

export default CartToWishlist
