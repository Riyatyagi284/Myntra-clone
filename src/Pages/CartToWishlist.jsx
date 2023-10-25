import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Pages/PageStyleCompo/CartToWishlist.css"

const CartToWishlist = () => {
  const navigate = useNavigate()

  const handleWishLogin = () => {
    navigate("/login", {state: { from: '/wishlist'}} )
  }
  return (
    <div className='cartToWishlistParent'>
      <h2>PLEASE LOG IN</h2>
      <p>Login to view items in your wishlist.</p>

      <button className='wishlist-login' onClick={handleWishLogin}>LOGIN</button>
    </div>
  )
}

export default CartToWishlist
