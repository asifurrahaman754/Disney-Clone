import styled from "styled-components/macro";
import Slider from "react-slick";

export const SLiderContainer = styled.div`
  width: 100%;
  padding: 0px 30px;

  @media (max-width: 850px) {
    padding: 0px 0px;
  }
`;

export const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    transition: all 0.3s;

    @media (max-width: 850px) {
      display: none !important;
    }
  }

  & > button:hover {
    opacity: 1;
  }

  ul li button:before {
    color: #f8f6f6;
    font-size: 10px;
    transition: all 0.2s;
  }

  ul li.slick-active button:before {
    color: #f8f6f6;
  }
`;

export const ImgContainer = styled.div`
  padding: 15px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0px 5px 15px black;

    @media (max-width: 850px) {
      height: 150px;
    }
  }
`;
