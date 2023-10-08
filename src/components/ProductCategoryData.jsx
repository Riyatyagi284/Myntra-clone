import React from 'react'
import { productImages } from '../constants'
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsTruck } from "react-icons/bs"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {add} from "../redux/Slices/CartSlice"
import { addToWishlist } from '../redux/Slices/WishlistSlice'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const ProductCategoryData = () => {
    const { id } = useParams();

    const ProductId = parseInt(id);
    const filteredData = productImages.find(Data => Data.id === ProductId);
    const discountPercentage = ((filteredData.RealPrice) - (filteredData.DiscountPrice)) / (filteredData.RealPrice) * 100;

    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(filteredData));
        toast.success("Item added to cart");
    }

    
    const handleAddToWishlist = () => {
        dispatch(addToWishlist(filteredData))
        toast.success("Item added to Wishlist");
    };

    return (
        <ul>
            <li key={filteredData.id}>
                <h2>{filteredData.title}</h2>
                <p className='para'>{filteredData.para}</p>
                <button className='product-Rating-btn'>
                    <span className='rate'>{filteredData.rating}</span>
                    <span> <AiFillStar style={{ color: "green" }} className="star" />|</span>
                    <span className='k-numb'>{filteredData.Knumbering} Rating </span>
                </button>
                <hr className='product-hr-style' />
                <p className='p-price'>
                    <span className='disc-p product-disc'>₹{filteredData.DiscountPrice}</span>
                    <span className='real-p product-real'>MRP {filteredData.RealPrice}</span>
                    <span className='discount-percentage prod-discount'>({discountPercentage.toFixed(2)}% OFF)</span>
                </p>
                <p className='prod-price'>inclusive of all taxes</p>
                <div className='product-shopping-btns'>
                    <div className='product-wishlist-parent cart-btn'>
                        <button className='product-wishlist-btn cart-btn-child' onClick={addToCart}
                        > <AiOutlineShoppingCart fontSize={26} style={{ color: "#fff" }} /> ADD TO CART </button>
                    </div>

                    <div className='product-wishlist-parent'>
                        <button className='product-wishlist-btn'onClick={handleAddToWishlist}> <AiOutlineHeart fontSize={26} /> WISHLIST </button>
                    </div>
                </div>

            </li>

            <hr className='product-hr-style' />

            <div className="delevery-options">
                <div className='product-delevery'>
                    <h3>DELIVERY OPTIONS </h3>
                    <BsTruck fontSize={24} />
                </div>

                <input type="text" placeholder="Enter pincode" className='product-wishlist-btn product-input' />
                <a href="" className='product-anchor'>Check</a>

                <p className='prod-pin'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>

                <ul className='product-delivery-lists'>
                    <li>100% Original Products</li>
                    <li>Pay on delivery might be available</li>
                    <li>Easy 14 days returns and exchanges</li>
                    <li>Try & Buy might be available</li>
                </ul>
            </div>
        </ul>
    )
}

export default ProductCategoryData