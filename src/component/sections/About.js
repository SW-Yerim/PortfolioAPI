import React from "react";
import SectionContainer from "../common/layout/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import styled, { keyframes } from "styled-components";
import { abouts } from "../../datas/aboutData";

const About = () => {
  return (
    <SectionContainer id="about" $bgColor="#f8f9fa">
      <SectionTitle title="About Me" />
      <SectionContent>
        {abouts.map((item, index) => (
          <Item key={index}>
            <ItemIcon src={item.icon} alt={`${item.title} icon`} />
            <ItemContent>
              <dt>{item.title}</dt>
              <dd>
                {item.content}
                {item.subContent && <span>{item.subContent}</span>}
              </dd>
            </ItemContent>
          </Item>
        ))}
      </SectionContent>
    </SectionContainer>
  );
};

const ShakeRotate = keyframes`
  0%   { transform: translateX(0) rotate(0deg); }
  25%  { transform: translateX(-4px) rotate(-3deg); }
  50%  { transform: translateX(4px) rotate(3deg); }
  75%  { transform: translateX(-4px) rotate(-3deg); }
  100% { transform: translateX(0) rotate(0deg); }
`;

const Pulse = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 700px;
  margin: 20px auto;
  gap: 30px;
  color: #27361f;
  word-break: keep-all;

  @media (max-width: 1024px) {
    width: 550px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 300px;
    gap: 10px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ItemIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  margin-right: 20px;

  filter: grayscale(100%);
  transition: filter 1s ease;

  &:hover {
    filter: grayscale(0%);
    animation: ${ShakeRotate} 0.5s ease forwards,
      ${Pulse} 0.5s ease 0.5s forwards;
  }

  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
    margin-right: 12px;
  }

  @media (max-width: 768px) {
  }
`;

const ItemContent = styled.dl`
  dt {
    margin-bottom: 3px;
    font-weight: 700;
  }

  dd {
    font-size: 14px;
    line-height: 16px;

    span {
      display: block;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 1024px) {
    dt {
      font-size: 14px;
    }
    dd {
      font-size: 12px;
      line-height: 14px;
    }
  }

  @media (max-width: 768px) {
  }
`;

export default About;
