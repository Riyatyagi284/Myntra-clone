import React,{useState} from 'react'
import Input from "../../Input"
import { BsSearch } from 'react-icons/bs';
import "../../compoStyle/Home.css"

const Brand = ({ handleChange }) => {
    const [showInput, setShowInput] = useState(false);
    const [brandInputValue,setBrandInputValue] = useState("");

    const openInputHandler = () => {
        setShowInput(true)
    }

    const handleBrandInput = (e) => {
        setBrandInputValue(e.target.value)
    }
  
    const BrandFilterValue = brandFilter()

    return (
        <>
            <div className='filter2-heading'>
                {
                    showInput ? (<><input type="text" value={brandInputValue} onChange={handleBrandInput} /> <BsSearch className='icon' /></>) :
                        (<>
                            <h2 className='filter2-title'>Brand</h2>
                            <BsSearch className='icon' onClick={openInputHandler} />
                        </>)
                }
            </div>

            <ul className="col1-ul">
                <Input handleChange={handleChange}
                    value="casual"
                    title="Casual"
                    name="test1" />

                <Input handleChange={handleChange}
                    value="halfsleev"
                    title="Halfsleev"
                    name="test1" />

                <Input handleChange={handleChange}
                    value="polo"
                    title="Polo"
                    name="test1" />

                <Input handleChange={handleChange}
                    value="roadster"
                    title="Roadster"
                    name="test1" />

                <Input handleChange={handleChange}
                    value="sleevless"
                    title="Sleevless"
                    name="test1" />

                <Input handleChange={handleChange}
                    value="tshirt"
                    title="TShirt"
                    name="test1" />
            </ul>
        </>
    )
}

export default Brand