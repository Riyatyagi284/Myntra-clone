import React from 'react'
import Input from "../../Input"
import "../../compoStyle/Home.css"

const Gender = ({ handleChange }) => {
    return (
        <>
            <ul className="Home-col1a col1-ul">
                <Input handleChange={handleChange}
                    value="men"
                    title="Men"
                    name="test" />

                <Input handleChange={handleChange}
                    value="women"
                    title="Women"
                    name="test" />
            </ul>
        </>
    )
}

export default Gender