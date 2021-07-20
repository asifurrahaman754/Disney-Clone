import styled from "styled-components/macro";
import LoginBg from "../../assets/images/login-background.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${LoginBg});
  background-size: cover;
  object-fit: contain;
  background-position: center;
`;

export const Content = styled.div`
  max-width: 640px;
  padding: 0px 20px;
  width: 100%;
`;

export const CTALogoOne = styled.img``;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  bottom: none;
  color: white;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin-top: 1rem;
  background-color: #004cff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: #083cb7;
  }
`;

export const description = styled.p`
  text-align: center;
  font-size: 0.9rem;
  margin: 10px 0px;
`;

export const CTALogoTwo = styled.img`
  width: 100%;
  margin-top: 1rem;
`;
