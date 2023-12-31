import React, { useState } from 'react'
import "./compoStyle/Home.css"
import { productImages } from '../constants';
import ProductSlider from './ProductSlider.jsx';
import Sidebar from './sidebar/Sidebar';
import { RxCross2 } from "react-icons/rx"
import RightSidebar from './RightSidebar';
import { Navigate } from 'react-router-dom';

function Home({ searchQuery }) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedViewProduct,setSelectedViewProduct] = useState("")
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedLi, setSelectedLi] = useState("")
    const [dropDownfilterActive, setDropDownFilterActive] = useState("")
    const [showViewPage, setShowViewPage] = useState(false)

    console.log("selectedCategory",selectedCategory);

    // for dropdown lists
    const handleSelectedLi = (event) => {
        setSelectedLi(event)
        setDropDownFilterActive(true);
    }

    const handleRemoveDropdownFilter = () => {
        if (selectedLi !== "") {
            setSelectedLi("")
        }
    }

    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    // for input radio btns 
    const handleViewChange = (e, title) => {
        e.stopPropagation()
        setShowViewPage(true)
        setSelectedViewProduct(title)
    }

    const handleRemoveViewPage = () => {
        setShowViewPage(false)
        Navigate("/")
    }

    const handleViewFilter = (productImages, selectedViewProduct) => {
        let filteredViewProducts = [...productImages];

        if (selectedViewProduct) {
            filteredViewProducts = filteredViewProducts.filter((product) => {
                return (product.title === selectedViewProduct)
            })
        }
        return filteredViewProducts;

    }

    const data = handleViewFilter(productImages, selectedViewProduct)


    const handlePriceChange = (event) => {
        const value = event.target.value;
        const [min, max] = value.split('-');
        setMinPrice(min);
        setMaxPrice(max);
    }

    const filteredData = (productImages, selected, selectedLi, minPrice, maxPrice, searchQuery) => {
        let filteredProducts = [...productImages];
        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) => {
                return product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
            })
        }

        if (selected) {
            filteredProducts = filteredProducts.filter((product) => {

                return (
                    product.category === selected ||
                    product.gender === selected ||
                    product.price === selected
                )
            })
        }

        if (selectedLi) {
            filteredProducts = filteredProducts.filter((product) => {
                return (
                    product.dropdownList === selectedLi
                )
            })
        }

        if (minPrice !== "" && maxPrice !== "") {
            filteredProducts = filteredProducts.filter((product) => {
                const productPrice = parseFloat(product.DiscountPrice);
                return (productPrice >= parseFloat(minPrice) && productPrice <= parseFloat(maxPrice));
            });
        }

        return filteredProducts.map(
            ({ id, mainImage, otherImages, rating, title, Knumbering, para, RealPrice, DiscountPrice }) => (
                <ProductSlider
                    key={id}
                    Id={id}
                    mainImage={mainImage}
                    otherImages={otherImages}
                    rating={rating}
                    title={title}
                    knumbering={Knumbering}
                    para={para}
                    RealPrice={RealPrice}
                    DiscountPrice={DiscountPrice}
                    handleViewChange={(e) => handleViewChange(e, title)}
                    selectedViewProduct={selectedViewProduct} />
            )
        )
    }

    const result = filteredData(productImages, selectedCategory, selectedLi, minPrice, maxPrice, searchQuery);


    return (
        <div className="wrapper">
            <div className="main-container">
                <div className="home-left">
                    <div className="parent">
                        FILTERS
                    </div>

                    <div className='sidebar-wrapper'>
                        <Sidebar handleChange={handleChange} handlePriceChange={handlePriceChange} selectedCategory={selectedCategory} />
                    </div>
                </div>

                <div className="home-right">
                    <div className="parent-dropdown">
                        <a style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>Sort by : <span>{selectedLi}</span><RxCross2 className='' onClick={handleRemoveDropdownFilter} cursor="pointer" /></a>
                        <ul>
                            {/* <li><a href="#" onClick={() => handleSelectedLi("")}>  </a></li> */}
                            <li><a href="#" onClick={() => handleSelectedLi("Recommended")}> Recommended </a></li>
                            <li><a href="#" onClick={() => handleSelectedLi("What's New")}> What's New </a></li>
                            <li><a href="#" onClick={() => handleSelectedLi("Popularity")}> Popularity </a></li>
                            <li><a href="#" onClick={() => handleSelectedLi("Better Discount")}> Better Discount </a></li>
                            <li><a href="#" onClick={() => handleSelectedLi("Price : High to Low")}> Price : High to Low </a></li>
                            <li><a href="#" onClick={() => handleSelectedLi("Price : Low to High ")}> Price : Low to High </a></li>
                            <li><a href="#" onClick={() => handleSelectedLi("Customer Rating")}> Customer Rating </a></li>
                        </ul>
                    </div>


                    <div className="product-grid">
                        {result}
                    </div>


                    {
                        showViewPage && (<div className="view-Container-wrapper">
                            <div className="view-container">
                                <div className="view-header">
                                    <h2>Similar Products</h2>
                                    <RxCross2 onClick={handleRemoveViewPage} />
                                </div>
                                {
                                    data.map((specificProduct) => (
                                        <RightSidebar specificProduct={specificProduct} />
                                    ))
                                }
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </div>
    )
}

export default Home