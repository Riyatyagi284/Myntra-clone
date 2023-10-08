import React from 'react'
import Input from "../../Input"
import "../../compoStyle/Home.css"

const Price = ({ handlePriceChange }) => {
    return (
        <>
            <h2 className='filter3-title'>Price</h2>

            <ul className="col1-ul">
                <Input handleChange={handlePriceChange}
                    value="212-12909"
                    title="Rs. 212 to Rs. 12909"
                    name="test2" />

                <Input handleChange={handlePriceChange}
                    value="12909-25606"
                    title="Rs. 12909 to Rs. 25606"
                    name="test2" />

                <Input handleChange={handlePriceChange}
                    value="25606-38303"
                    title="Rs. 25606 to Rs. 38303"
                    name="test2" />

                <Input handleChange={handlePriceChange}
                    value="38303-51000"
                    title="Rs. 38303 to Rs. 51000"
                    name="test2" />
            </ul>
        </>
    )
}

export default Price