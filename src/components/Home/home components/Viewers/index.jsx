import * as s from "./style";
import img1 from "../../../../assets/images/viewers-disney.png";
import img2 from "../../../../assets/images/viewers-marvel.png";
import img3 from "../../../../assets/images/viewers-national.png";
import img4 from "../../../../assets/images/viewers-pixar.png";
import img5 from "../../../../assets/images/viewers-starwars.png";
import video1 from "../../../../assets/videos/disney.mp4";
import video2 from "../../../../assets/videos/marvel.mp4";
import video3 from "../../../../assets/videos/national-geographic.mp4";
import video4 from "../../../../assets/videos/pixar.mp4";
import video5 from "../../../../assets/videos/star-wars.mp4";

export default function Viewers() {
  return (
    <s.Container>
      <s.ImgWrap>
        <img src={img1} alt="viewers image" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video1} type="video/mp4" />
        </video>
      </s.ImgWrap>
      <s.ImgWrap>
        <img src={img2} alt="viewers image" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video2} type="video/mp4" />
        </video>
      </s.ImgWrap>
      <s.ImgWrap>
        <img src={img3} alt="viewers image" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video3} type="video/mp4" />
        </video>
      </s.ImgWrap>
      <s.ImgWrap>
        <img src={img4} alt="viewers image" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video4} type="video/mp4" />
        </video>
      </s.ImgWrap>
      <s.ImgWrap>
        <img src={img5} alt="viewers image" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video5} type="video/mp4" />
        </video>
      </s.ImgWrap>
    </s.Container>
  );
}
