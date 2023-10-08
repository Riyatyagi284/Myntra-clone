import React,{useState} from 'react';
import "./compoStyle/DotCheckbox.css"

function DotCheckbox({ filterType, value, handleFilterChange }) {
  const [isChecked, setIsChecked] = useState(false);
   
  const handleClick = () => {
    setIsChecked(prevState => !prevState);
    handleFilterChange(filterType, value);
  };

  return (
    <label className="dot-checkbox" onClick={handleClick}>
      <input type="checkbox" checked={isChecked} />
      <span className="checkmark"></span>
    </label>
  );
}

export default DotCheckbox;//true hone ke baaad ffalse hokr vaps true nhi hota
