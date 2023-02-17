import React from 'react'
import {IoIosArrowForward} from "react-icons/io"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
        className={className}
        style={{ ...style, display: "block", color:"black" }}
        onClick={onClick}
      />
  )
}
export default SampleNextArrow