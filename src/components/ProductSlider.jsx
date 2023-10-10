import { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './compoStyle/ProductSlider.css'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import "./compoStyle/Card.css"
import { MdOutlineViewCarousel } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addToWishlist } from '../redux/Slices/WishlistSlice';


const ProductSlider = ({ mainImage, otherImages, rating, knumbering, title, para, RealPrice, DiscountPrice, size, Id, handleChange, selectedCategory }) => {
    const navigate = useNavigate()

    const [hovering, setHovering] = useState(false);
    const [viewHover, setViewHover] = useState(false);
    
    const dispatch = useDispatch()

    const data =
    {
        id: Id,
        mainImage: mainImage,
        DiscountPrice: DiscountPrice,
        title: title,
    }

    const truncatedpara = para.substring(0, 24) + '...';

    const discountPercentage = ((RealPrice - DiscountPrice) / RealPrice) * 100;

    const RedirectProductdetail = () => {
        navigate(`/product-detail-page/${Id}`)
    }

    const handleWishlistClick = (e) => {
        e.stopPropagation()
        dispatch(addToWishlist(data))
        toast.success("Hurrah!! Product Added To Wishlist")
    }

    return (
        <div className='product'
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(true)}//false
            onClick={() => RedirectProductdetail()}
        >
            {
                hovering ? (<div className="card card-hover">
                    <div className='carousel-container'>
                        <OwlCarousel className='owl-theme' margin={0} loop={true} items={1} autoplay={true} autoplayTimeout={2000} nav={false} autoplayHoverPause={false} autoPlay={true} dots={true}>
                            {otherImages.map((image, index) => (
                                <div className="item" key={index}>
                                    <img src={image} alt={`Product ${index + 1}`} />
                                </div>
                            ))}

                        </OwlCarousel>
                    </div>
                    <MdOutlineViewCarousel fontSize={18} className="view-icon" onClick={handleChange} selectedCategory={selectedCategory} />
                    {/* onClick={handleChange} selectedCategory={selectedCategory}  */}
                    {/* this is for view icon */}
                    <div className='wishlist-parent'>
                        <button className='wishlist-btn' onClick={(e) => handleWishlistClick(e)}> <AiOutlineHeart fontSize={20} /> WISHLIST </button>
                    </div>
                    <div className='card-bottom card-bottom1'>
                        <p className='size1'>Sizes : 40 </p>
                        <p className='p-price'>
                            <span className='disc-p'>Rs. {DiscountPrice}</span>
                            <span className='real-p'>Rs. {RealPrice}</span>
                            <span className='discount-percentage'>({discountPercentage.toFixed(2)}% OFF)</span>
                        </p>
                    </div>
                </div>
                ) :
                    (<div className="card">
                        <img src={mainImage} alt="Main-product" />
                        <button className='Rating-btn'>
                            <span className='rate'>{rating} </span>
                            <span> <AiFillStar style={{ color: "yellow" }} className="star" />|</span>
                            <span className='k-numb'>{knumbering}</span>
                        </button>
                        {/*  */}
                        <div className='card-bottom '>
                            <h2 className='title'>{title}</h2>
                            {
                                (para.length > 30) ? (<p className='para'>{truncatedpara}</p>) : (<p className='para'>{para}</p>)
                            }
                            <p className='p-price'>
                                <span className='disc-p'>Rs. {DiscountPrice}</span>
                                <span className='real-p'>Rs. {RealPrice}</span>
                                <span className='discount-percentage'>({discountPercentage.toFixed(2)}% OFF)</span>
                            </p>
                        </div>
                    </div>)
            }
        </div >
    )
}

export default ProductSlider