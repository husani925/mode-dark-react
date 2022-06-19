import styled from "styled-components";

export const SwitchContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bgc};
  transition: 0.5s all ease-in;
`;

export const SwitchWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
`;

export const SwitchBGC = styled.div`
  position: relative;
  width: 70px;
  height: 34px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.toggle};
  transition: 1s all ease-in;
`;

export const ButtonSwitch = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 4px;
  left: ${({ position }) => (position ? "39px" : "5px")};
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.4s all ease-in;
  outline: none;
`;
