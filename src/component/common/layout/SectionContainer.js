import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  scroll-margin-top: 56px;
  padding: 40px;

  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  color: ${({ $fontColor }) => $fontColor || "#000000"};
`;

export default SectionContainer;
