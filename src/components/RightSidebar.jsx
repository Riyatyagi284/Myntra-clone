import React from 'react'
import "../components/compoStyle/RightSidebar.css"

const RightSidebar = ({ specificProduct }) => {
    console.log("specificProduct", specificProduct)

    const truncatedpara = specificProduct.para.substring(0, 24) + '...';

    const discountPercentage = ((specificProduct.RealPrice - specificProduct.DiscountPrice) / specificProduct.RealPrice) * 100;
    return (
        <div className="card-container">
        <div className="card" style={{ marginBottom: "1.4rem" }}>
            <img src={specificProduct.mainImage} alt="Main-product" style={{ objectFit: "contain", marginLeft: "-2rem" }} />
            <div className='card-bottom' style={{marginLeft:"3rem",marginTop:"0"}}>
                <h2 className='title'>{specificProduct.title}</h2>
                {
                    (specificProduct.para.length > 30) ? (<p className='para'>{truncatedpara}</p>) : (<p className='para'>{specificProduct.para}</p>)
                }
                <p className='p-price'>
                    <span className='disc-p'>Rs. {specificProduct.DiscountPrice}</span>
                    <span className='real-p'>Rs. {specificProduct.RealPrice}</span>
                    <span className='discount-percentage'>({discountPercentage.toFixed(2)}% OFF)</span>
                </p>
            </div>
        </div>
    </div>    
    )
}

export default RightSidebar
