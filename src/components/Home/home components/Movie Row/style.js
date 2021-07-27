import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 0px 20px 3.5rem 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ImgWrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
