import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: 0.5px;
  background: #000;
  background: linear-gradient(
    to left,
    rgb(255 255 255) 0%,
    rgb(50 50 50) 50%,
    rgb(255 255 255) 100%
  );

  &::before {
    position: relative;
    float: left;
    background: linear-gradient(
      to right,
      rgb(200 200 200 / 0%),
      rgb(200 200 200 / 100%) 50%
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
      rgb(100 200 200 / 0%),
      rgb(200 200 200 / 100%) 50%
    );
    margin-top: 2px;
    width: 50%;
    height: 0.5px;
    content: "";
  }
`;

const DarkVariant: React.FunctionComponent = () => <Divider />;

export default DarkVariant;
