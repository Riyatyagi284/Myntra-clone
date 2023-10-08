
import React from 'react'
import {FcDeleteDatabase} from "react-icons/fc"
import {toast} from "react-hot-toast"
import {remove} from "../redux/Slices/CartSlice"
import { useDispatch } from 'react-redux'
import "../components/compoStyle/CartItem.css"

const CartItem = ({ item, itemIndex }) => {

    const dispatch = useDispatch();
    const removeFromCart=()=>{
        dispatch(remove(item.id))
        toast.success("item removed")
    }

    return (
        <div className='cartItem-parent' >
            <div className='cart-item-imgwrapper'>
            <img className="cart-img" src={item.mainImage} alt="product" />
            </div>
            <div className='cart-productdetail'>
                <h1>{item.title}</h1>
                {item.para && (
                <h2 className='text-[0.8rem] sm:text-sm text-slate-500 spacing-2 '>{item.para}</h2>
                )}
                <div className='cart-price-btn'>
                <p>{item.DiscountPrice}</p>
                <div onClick={removeFromCart} className="cart-deletebtn">
                    <FcDeleteDatabase fontSize={20}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem