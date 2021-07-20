import styled from "styled-components/macro";

export const Header = styled.header`
  width: 100%;
  background-color: #090b13;
  position: fixed;
  top: 0;
  height: 80px;
`;
export const Navbar = styled.nav`
  display: flex;
  height: inherit;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const NavLogo = styled.img`
  width: 100px;
`;

export const NavItems = styled.div`
  display: flex;
  margin: 0px auto 0px 2rem;

  a {
    color: #f3f3f3;
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;

    &:hover:after {
      left: 0;
      right: auto;
      width: 100%;
    }

    &:last-child {
      margin-right: 0px;
    }

    & > svg {
      margin-right: 5px;
    }

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      right: 0;
      width: 0;
      bottom: -5px;
      background: #fff;
      height: 4px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 15px;
  text-transform: uppercase;
  border: 1px solid #f3f3f3;
  background: none;
  color: white;
  letter-spacing: 3.2px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const UserProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
