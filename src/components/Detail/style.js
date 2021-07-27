import styled from "styled-components/macro";

export const Error = styled.h1`
  margin-top: 100px;
  padding: 0px 20px;
`;
export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  background: linear-gradient(#00000045, #00000054),
    url(${props => props.bgImg}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black;
`;

export const Content = styled.div`
  padding: 0px 20px;
`;

export const titleImg = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 2rem 0px;

  @media (max-width: 500px) {
    max-width: 250px;
  }
`;

export const BtnGroup = styled.div`
  margin-top: 2rem;
`;

export const Button = styled.button`
  background: ${({ outlined }) => (outlined ? "none" : "white")};
  color: ${({ outlined }) => (outlined ? "white" : "black")};
  border: 1px solid #ddd;
  padding: 8px 20px;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin-right: 1rem;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: white;
    color: black;
  }

  & > svg {
    margin-right: 5px;
    font-size: 30px;
  }
`;

export const Subtitle = styled.h4`
  margin: 0.5rem 0px 0.8rem 0px;
  font-weight: 400;
`;

export const Description = styled.p`
  line-height: 1.55rem;
  letter-spacing: 0.3px;
  font-size: 1.1rem;
  max-width: 1000px;
  padding-bottom: 1rem;
`;
