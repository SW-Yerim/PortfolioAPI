import React from "react";
import Card from "../common/layout/Card";
import SectionContainer from "../common/layout/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import styled from "styled-components";
import { archivings } from "../../datas/archivingData";

const Archiving = () => {
  return (
    <SectionContainer id="archiving" $bgColor="#f0f0f0">
      <SectionTitle title="Archiving" />
      <SectionContent>
        {archivings.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card
              $width="250px"
              $padding="30px"
              $align="center"
              $fontColor="rgba(255, 255, 255, 0.9)"
              $bgColor="#27361f"
              $move="true"
            >
              <CardTitle>{item.title}</CardTitle>
              <CardContent>{item.content}</CardContent>
            </Card>
          </a>
        ))}
      </SectionContent>
    </SectionContainer>
  );
};

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 25px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const CardTitle = styled.dt`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  font-size: 20px;
  font-weight: 900;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardContent = styled.dd`
  font-size: 14px;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default Archiving;
