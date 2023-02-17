import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photos from "../../../Data/photosArray";
import PhotoCards from "./PhotoCards";

const PhotoBannerSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box w={"100%"} my={"2rem"} px={"5rem"} mb={"1.5rem"}>
      <Box>
        <Slider {...settings}>
          {Photos &&
            Photos.map((photo, i) => <PhotoCards key={i} photo={photo} />)}
        </Slider>
      </Box>
    </Box>
  );
};

export default PhotoBannerSlider;
