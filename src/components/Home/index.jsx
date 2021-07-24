import * as s from "./style";
import ImgSlider from "./home components/ImgSlider";

export default function Home() {
  console.log("home renderd");

  return (
    <s.Section>
      <ImgSlider />
    </s.Section>
  );
}
