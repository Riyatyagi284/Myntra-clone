import React from 'react'
import Gender from './sidebarCompoJsxFiles/Gender'
import Brand from './sidebarCompoJsxFiles/Brand'
import Price from './sidebarCompoJsxFiles/Price'
import "../compoStyle/Home.css"

const Sidebar = ({ handleChange, handlePriceChange }) => {
    return (
        <>
            <div className="filter1">
                <Gender handleChange={handleChange} />
            </div>
            <div className="filter2">
                <Brand handleChange={handleChange} />
            </div>
            <div className="filter3">
                <Price handlePriceChange={handlePriceChange} />
            </div>
        </>
    )
}

export default Sidebar