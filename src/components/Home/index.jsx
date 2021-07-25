import * as s from "./style";
import ImgSlider from "./home components/ImgSlider";
import Viewers from "./home components/Viewers";

export default function Home() {
  console.log("home renderd");

  return (
    <s.Section>
      <ImgSlider />
      <Viewers />
    </s.Section>
  );
}
