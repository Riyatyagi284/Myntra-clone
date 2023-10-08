import React from 'react'

const Input = ({handleChange,value,name,title}) => {
  return (
    <>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type="radio" value={value} name={name} className="radio-input" />
        {title}
      </label>
    </>
  )
}

export default Input