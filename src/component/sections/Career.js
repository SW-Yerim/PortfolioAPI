import React from "react";
import styled from "styled-components";
import linkImage from "../../assets/images/black-link.png";
import SectionContainer from "../common/layout/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import CareerItem from "../items/CareerItem";

const Career = () => {
  return (
    <SectionContainer id="career" $bgColor="#f8f9fa">
      <SectionTitle title="Career" />
      <CareerItem />
    </SectionContainer>
  );
};

export default Career;
