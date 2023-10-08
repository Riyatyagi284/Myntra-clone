import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './compoStyle/ProductSlider.css'
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import "./compoStyle/ProductSlider.css"
import { productImages } from '../constants';


const ProductSlider = ({ mainImage, otherImages, rating, knumbering, title, para, RealPrice, DiscountPrice, size }) => {
    const [hovering, setHovering] = useState(false);

    const truncatedpara = para.substring(0, 24) + '...';

    const discountPercentage = ((RealPrice - DiscountPrice) / RealPrice) * 100;




    return (

        <div className='product-info'>
            <div className="product-slider"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >

                {
                    hovering ? (
                        <div className='carousel-container'>
                            <Carousel showArrows={false} showStatus={true} showThumbs={false} stopOnHover={false} autoPlay={true} interval={1000} infiniteLoop >
                                {otherImages.map((image, index) => (
                                    <div>
                                       {console.log(image)}
                                   
                                
                               {<img key={index} src={image} alt={`Product ${index+1}`} />}
                               </div>
                            ))} 

                            </Carousel>
                        </div>) : (<img src={mainImage} alt="Main-product" />)



                    // (<div className='card'>
                    //     <img src={mainImage} alt="Main-product" className='hover-img' />
                    //     <div className='product-below-part'>
                    //         <button className='wishlist-btn'> <AiOutlineHeart fontSize={20} /> WISHLIST </button>
                    //         <p>Sizes : {size} </p>
                    //         <span className='discount-percentage'>({discountPercentage.toFixed(2)}% OFF)</span>
                    //     </div>
                    // </div>) : (<>
                    //     <img src={mainImage} alt="Main-product" className='product-img'/>
                    //     <button className='Rating-btn'>
                    //         <span className='rate'>{rating} </span>
                    //         <span> <AiFillStar style={{ color: "yellow" }} className="star" />|</span>
                    //         <span className='k-numb'>{knumbering}</span>
                    //     </button>
                    // </>)

                }


                <div>
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
            </div>
        </div>
    )
}

export default ProductSlider