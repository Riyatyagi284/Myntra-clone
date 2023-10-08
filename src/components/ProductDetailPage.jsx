import React from 'react'
import "./compoStyle/ProductDetailPage.css"
import { productImages } from '../constants'
import ProductCategoryData from './ProductCategoryData'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const { id } = useParams();
    const ProductId=parseInt(id);
    const filteredData = productImages.find(Data => Data.id === ProductId);

    return (
        <>
            <div className="product-detail-wrapper">
                <div className="product-detail-left">
                    <div className="Img-container">
                        {
                            filteredData.otherImages.map((image, index) => (
                                <img src={image} key={index} className="product-detail-img" />
                            ))
                        }
                    </div>
                </div>


                <div className="product-detail-right">
                    <ProductCategoryData />
                </div>
            </div>

        </>
    )
}
export default ProductDetailPage