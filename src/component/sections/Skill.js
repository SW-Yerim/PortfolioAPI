import React from "react";
import SectionContainer from "../common/layout/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import styled from "styled-components";
import Card from "../common/layout/Card";
import { skills } from "../../datas/skillData";

const Skill = () => {
  const colorPalette = [
    "#f7a3a7",
    "#f7ad97",
    "#fad89E",
    "#C8d7c4",
    "#bbcbd2",
    "#b7b6d6",
    "#e2bbd8",
    "#faf4ee",
    "#e8dc6a",
    "#cada72",
    "#c0ca61",
  ];

  const getRandomBgColor = () => {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
  };

  return (
    <SectionContainer id="skills" $bgColor="#CBDAB9">
      <SectionTitle title="Skills" />
      <SectionContent>
        <Card
          $mxWidth="800px"
          $padding="50px"
          $margin="auto"
          $bgColor="rgba(255, 255, 255, 0.5)"
          $border="50px"
        >
          {skills.map((item, index) => (
            <Item key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemContentWrap>
                {item.content.map((content, index) => (
                  <ItemContent key={index} $bgColor={getRandomBgColor()}>
                    {content}
                  </ItemContent>
                ))}
              </ItemContentWrap>
            </Item>
          ))}
        </Card>
      </SectionContent>
    </SectionContainer>
  );
};

const SectionContent = styled.div``;

const Item = styled.div`
  display: flex;
  width: auto;
  max-width: 600px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

const ItemTitle = styled.div`
  width: 120px;
  color: #27361f;
  font-weight: 900;

  @media (max-width: 1024px) {
    width: 100px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
  }
`;

const ItemContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px 3px;
    margin-bottom: 7px;
  }
`;

const ItemContent = styled.div`
  padding: 0px 10px;
  border-radius: 10px;
  background: ${(props) => props.$bgColor};
  font-size: 12px;
  line-height: 24px;
  align-items: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    line-height: 20px;
  }

  @media (max-width: 768px) {
  }
`;

export default Skill;
