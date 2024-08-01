import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import Typed from "typed.js";

import backgroundImage from "../../assets/images/bg-intro.jpg";

const StyledWrapper = styled.section`
  height: 100vh;
  flex-grow: 1;
  background-size: cover;
`;

const Content = styled.div`
  position: absolute;
  width: calc(100% - 240px);
  padding: 200px 72px 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media (max-width: 600px) {
    width: 100%;
    padding: 200px 16px 16px;
  }
`;

const StyledCaption = styled(Typography)`
  font-size: 3rem;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px #000;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const StyledSpan = styled.span`
  background-color: #008073;
  color: white;
  padding: 8px;
`;

const Overlay = styled.div`
  position: absolute;
  width: calc(100% - 240px);
  flex-grow: 1;
  z-index: 3;
  height: 100vh;
  background-image: url(${backgroundImage});
  filter: blur(8px);
  background-position: center;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledName = styled(Typography)`
  font-size: 5rem;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px #000;

  @media (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const Header: React.FunctionComponent = () => {
  useEffect(() => {
    const typed = new Typed(".positions", {
      strings: ["Developer", "Architect", "Engineer", "Consultant"],
      startDelay: 300,
      typeSpeed: 130,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
      cursorChar: "",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <StyledWrapper>
      <Overlay />
      <Content>
        <StyledName variant="h5">Hemlata Khandal</StyledName>
        <StyledCaption>
          I&apos;m a Software
          <StyledSpan className="positions" />
        </StyledCaption>
      </Content>
    </StyledWrapper>
  );
};

export default Header;
