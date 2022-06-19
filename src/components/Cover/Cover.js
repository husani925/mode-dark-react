import React from "react";
import { CoverContainer, CoverWrapper, InfoContainer } from "./Cover.elements";
import { HiSun, HiMoon } from "react-icons/hi";

const Cover = (props) => {
  let icon = props.theme === "light" ? <HiSun /> : <HiMoon />;
  let textmode =
    props.theme === "light" ? <h1>Light Mode</h1> : <h1>Dark Mode</h1>;
  return (
    <>
      <CoverContainer>
        <CoverWrapper>
          <InfoContainer>
            {icon}
            {textmode}
          </InfoContainer>
        </CoverWrapper>
      </CoverContainer>
    </>
  );
};

export default Cover;
