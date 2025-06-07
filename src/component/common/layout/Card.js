import React from "react";
import styled from "styled-components";

const ratioNumber = (number, ratio = 1) =>
  number
    ? number
        .split(" ")
        .map((val) => {
          const num = parseFloat(val);
          const unit = val.replace(num, "");
          return `${Math.round(num * ratio)}${unit}`;
        })
        .join(" ")
    : "0";

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${({ $width }) => $width || "100%"};
  max-width: ${({ $mxWidth }) => $mxWidth || "100%"};
  height: ${({ $height }) => $height || "100%"};
  max-height: ${({ $mxHeight }) => $mxHeight || "100%"};

  margin: ${({ $margin }) => $margin || "0"};
  padding: ${({ $padding }) => $padding || "0"};

  text-align: ${({ $align }) => $align || "left"};
  color: ${({ $fontColor }) => $fontColor || "#000000"};

  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  border-radius: ${({ $border }) => $border || "30px"};

  box-shadow: 2px 2px 5px rgba(39, 54, 31, 0.4);

  transition: transform 0.5s ease;
  &:hover {
    transform: ${({ $move }) => ($move ? "translateY(-10px)" : "none")};
  }

  @media (max-width: 1024px) {
    width: ${({ $width }) => $width && `calc(${$width} * 0.72)`};
    padding: ${({ $padding }) => $padding && ratioNumber($padding, 0.72)};
  }

  @media (max-width: 768px) {
    /* width: ${({ $width }) => $width && `calc(${$width} * 0.6)`}; */
    width: 100%;
    min-width: 130px;
  }
`;

export default Card;
