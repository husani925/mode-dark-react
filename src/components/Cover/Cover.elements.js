import styled from "styled-components";

export const CoverContainer = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgc};
  transition: 0.5s ease-in;
`;

export const CoverWrapper = styled.div`
  width: 100%;
  height: 80vh;
  margin: auto;
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    font-size: 8rem;
    fill: ${({ theme }) => theme.icon};
  }

  h1 {
    text-align: center;
    width: 100%;
    font-family: "Roboto";
    color: ${({ theme }) => theme.text};

    &:nth-of-type(1) {
      font-weight: 300;
      font-size: 3rem;
    }

    &:nth-of-type(2) {
      font-weight: 700;
      font-size: 4rem;
    }
  }
`;
