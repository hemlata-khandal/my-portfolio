import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: 0.5px;
  background: #fff;
  background: linear-gradient(
    to left,
    rgb(90 90 90) 0%,
    rgb(255 255 255) 50%,
    rgb(90 90 90) 100%
  );

  &::before {
    position: relative;
    float: left;
    background: linear-gradient(
      to right,
      rgb(100 100 100 / 0%),
      rgb(100 100 100 / 100%) 50%
    );
    margin-top: 2px;
    width: 50%;
    height: 0.5px;
    content: "";
  }

  &::after {
    position: relative;
    float: right;
    background: linear-gradient(
      to left,
      rgba(100 100 100 / 0%),
      rgba(100 100 100 / 100%) 50%
    );
    margin-top: 2px;
    width: 50%;
    height: 0.5px;
    content: "";
  }
`;

const LightVariant: React.FunctionComponent = () => <Divider />;

export default LightVariant;
