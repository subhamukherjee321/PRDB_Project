import React from "react";
import {IoIosArrowBack} from "react-icons/io"


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

export default SamplePrevArrow;