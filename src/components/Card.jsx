import React from 'react'
import { Mencasual1 } from "../Images/index";
import ReactImageMagnify from 'react-image-magnify';
import "../components/compoStyle/Card.css"


const Card = () => {
  return (
    <>
    <div id='card-img'>
      <ReactImageMagnify {...{
        smallImage: {
          alt: 'Wristwatch by Ted Baker London',
          isFluidWidth: true,
          src: Mencasual1
        },
        largeImage: {
          src: Mencasual1,
          width: 569,
          height: 740
        }
      }} />
      </div>
    </>


  )
}

export default Card