import React from 'react'
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux"
import { removeFromWishlist } from "../redux/Slices/WishlistSlice"
import { add } from "../redux/Slices/CartSlice"
import { AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./PageStyleCompo/Wishlist.css"
import { NavLink } from 'react-router-dom';
import { selectUser } from '../redux/Slices/AuthSlice';
import CartToWishlist from "../Pages/CartToWishlist"

const Wishlist = () => {
    const user = useSelector(selectUser)

    const { wishlist } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (productId) => {
        dispatch(removeFromWishlist(productId))
        toast.error("Item Removed from wishlist")
    };

    // {
    //     !user ? (<Login /> ) : (const addToCart = (product) => {
    //         dispatch(add(product))
    //         toast.success("Hurrah!! Product Added To Cart");
    //     };)
    // }

    const addToCart = (product) => {
        dispatch(add(product))
        toast.success("Hurrah!! Product Added To Cart");
    };


    return (
        <>
            {
                !user ? (<CartToWishlist />) : (

                    <div className='wish-parent'>
                        <div className='wishlist-title'>
                            <AiOutlineHeart fontSize={42} />
                            <h2>Your Wishlist</h2>
                        </div>

                        {
                            wishlist.length === 0 ? (
                                <>
                                    <p className='wishlist-true-para'>Your Wishlist is empty.</p>
                                    <NavLink to="/">
                                        <button className='wish-btn'>Add Products</button>
                                    </NavLink>
                                </>
                            ) : (
                                <div className='wish-table-wrapper'>
                                    <table className='wish-table'>
                                        <thead className='wish-thead'>
                                            <tr className='wish-row'>
                                                <th className='wish-row-header'>Product Image</th>
                                                <th className='wish-row-header' s>Product Name</th>
                                                <th className='wish-row-header' s>Price</th>
                                                <th className='wish-row-header' s>Remove From Wishlist</th>
                                                <th className='wish-row-header' s>Add To Cart</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                wishlist.map((product) => (

                                                    <tr key={product.id} className="wish-tbody-row">

                                                        <td>
                                                            <img src={product.mainImage} alt="product" className='wish-image' />
                                                        </td>

                                                        <td className='wish-prouct-title'>
                                                            <div>{product.title}</div>
                                                        </td>

                                                        <td>
                                                            <div>${product.DiscountPrice}</div>
                                                        </td>

                                                        <td><RiDeleteBin6Fill className="wish-delete-btn" onClick={() => handleRemoveFromWishlist(product.id)} />
                                                        </td>

                                                        <td>
                                                            <AiOutlineShoppingCart className="wish-addtocart-btn"
                                                                onClick={() => addToCart(product)} 
                                                            />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    </div>

                )
            }
        </>
    )
}

export default Wishlist
