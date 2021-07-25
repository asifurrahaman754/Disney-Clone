import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as s from "./style";
import sliderimg1 from "../../../../assets/images/slider-badag.jpg";
import sliderimg2 from "../../../../assets/images/slider-scale.jpg";
import sliderimg3 from "../../../../assets/images/slider-badging.jpg";
import sliderimg4 from "../../../../assets/images/slider-scales.jpg";

export default function ImgSlider() {
  console.log("imgslider renderd");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
  };

  return (
    <s.SLiderContainer>
      <s.Carousel {...settings}>
        <s.ImgContainer>
          <img src={sliderimg1} alt="slider image" />
        </s.ImgContainer>
        <s.ImgContainer>
          <img src={sliderimg2} alt="slider image" />
        </s.ImgContainer>{" "}
        <s.ImgContainer>
          <img src={sliderimg3} alt="slider image" />
        </s.ImgContainer>
        <s.ImgContainer>
          <img src={sliderimg4} alt="slider image" />
        </s.ImgContainer>
      </s.Carousel>
    </s.SLiderContainer>
  );
}
