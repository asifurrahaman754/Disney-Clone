import styled from "styled-components";
import homeBg from "../../assets/images/home-background.png";

export const Section = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 80px);
  background: url(${homeBg});
  background-position: center;
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 80px;
`;
