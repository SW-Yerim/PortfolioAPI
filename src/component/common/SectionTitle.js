import React from "react";
import styled from "styled-components";
import linkImage from "../../assets/images/black-link.png";

const SectionTitle = ({ title }) => {
  return (
    <Title>
      <h2>{title}</h2>
    </Title>
  );
};

const Title = styled.div`
  margin: 0px auto 60px;
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  color: #27361f;

  h2 {
    display: inline-flex;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid #27361f;

    &::before {
      content: "";
      display: inline-block;
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 10px;
      background-image: url(${linkImage});
      background-size: cover;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;
    font-size: 2.7rem;

    h2 {
      padding: 15px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 2.3rem;

    h2 {
      padding: 10px 15px;
    }
  }
`;

export default SectionTitle;
