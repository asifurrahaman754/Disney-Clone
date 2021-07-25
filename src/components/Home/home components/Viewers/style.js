import styled from "styled-components/macro";

export const Container = styled.section`
  margin: 4.5rem auto 0px auto;
  padding: 0px 20px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const ImgWrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  display: grid;
  place-items: center;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  &:hover video {
    opacity: 1;
  }

  img {
    width: 100%;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  video {
    position: absolute;
    top: 0px;
    width: 100%;
    border-radius: 10px;
    height: 100%;
    opacity: 0;
  }
`;
