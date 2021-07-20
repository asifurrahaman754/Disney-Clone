import * as s from "./style";
import ctaSvGOne from "../../assets/images/cta-logo-one.svg";
import ctaSvGTwo from "../../assets/images/cta-logo-two.png";

export default function Login() {
  return (
    <s.Container>
      <s.Content>
        <s.CTALogoOne src={ctaSvGOne} />
        <s.Button>get all there</s.Button>
        <s.description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </s.description>
        <s.CTALogoTwo src={ctaSvGTwo} />
      </s.Content>
    </s.Container>
  );
}
