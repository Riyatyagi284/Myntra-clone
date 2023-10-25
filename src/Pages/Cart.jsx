import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from "../components/CartItem"
import { remove } from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast"
import './PageStyleCompo/Cart.css'
import EmptyBag from "../Images/myntra-empty-bag.png"
import { selectUser } from '../redux/Slices/AuthSlice';
import CartToWishlist from './CartToWishlist';
import Wishlist from './Wishlist';

const Cart = () => {
    const user = useSelector(selectUser);

    const navigate = useNavigate()

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount] = useState(0);

    //function to save cart data to localStorage
    const saveCartToLocalStorage = (cartData) => {
        localStorage.setItem('cart', JSON.stringify(cartData));
    };
    //function to retrieve cart data from localStorage
    const getCartFromLocalStorage = () => {
        const storedCartData = localStorage.getItem('cart');
        console.log(storedCartData);
        if (!storedCartData) {
            return []
        } else {
            console.log("else condition run right here")
            return JSON.parse(storedCartData);
        }
    };

    const [cartItem, setCartItem] = useState(getCartFromLocalStorage())

    const handleCartToWishlist = () => {
        console.log("clicked")
        navigate("/wishlist")
      };

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        saveCartToLocalStorage(cart)
        console.log(cart)
    }, [cart.length])

    useEffect(() => {
        const storedCartData = getCartFromLocalStorage();
        setCartItem(storedCartData)
    }, [])


    return (
        <div>
            {cart &&
                cart.length > 0 ? (
                <div className='cart-ist-parent' style={{ background: "#d7d7d72b" }}>
                    <div className="cart-left-side">
                        {
                            cart.map((item, index) => (
                                <div key={item.id}>
                                    <CartItem item={item} itemIndex={index} saveCartToLocalStorage={saveCartToLocalStorage} />
                                </div>
                            ))
                        }
                    </div>

                    <div className='cart-right-side'>
                        <div className='cart-right-ist'>
                            <p className='right-ist-para1'>Your Cart</p>
                            <p className='right-ist-para2'>Summary</p>
                            <p className='right-ist-para3'><span>Total Items: {cart.length}</span>
                            </p>
                        </div>

                        <div className="cart-right-second">
                            <p className='sec-right-para'>Total Amount:<span>${totalAmount}</span>
                            </p>
                            <button>CheckOut Now</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="second-parent-div">
                    <img src={EmptyBag} alt="Empty-Bag" />
                    <div className='second-parent-div-content'>
                        <h2>Hey, it feels so light!</h2>
                        <p>There is nothing in your bag. Let's add some items.</p>
                        <div className="button-wrapper">
                            <NavLink to="/">
                                <button>
                                    Shop Now
                                </button>
                            </NavLink>

                            {/* <NavLink to="/cart-to-wishlist"> */}
                            <button onClick={handleCartToWishlist}>
                                ADD ITEMS FROM WISHLIST
                            </button>
                            {/* </NavLink> */}

                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default Cart
