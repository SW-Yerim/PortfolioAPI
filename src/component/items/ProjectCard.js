import React, { useState } from "react";
import Card from "../common/layout/Card";
import styled from "styled-components";

const ProjectCard = ({ item, openModal }) => {
  const languageValues = Object.entries(item.language)
    .filter(
      ([key, value]) =>
        value.length > 0 && ["frontend", "backend", "styling"].includes(key)
    )
    .flatMap(([_, value]) => value);

  return (
    <Card
      $width="500px"
      $padding="40px 50px"
      $bgColor="rgba(219, 230, 205, 0.2)"
      $fontColor="#27361f"
      $move="true"
    >
      <CardTitle>
        {item.title}{" "}
        <span>
          ({item.date} - {item.person})
        </span>
      </CardTitle>
      <CardSummary>{item.subtitle}</CardSummary>
      <CardContent>
        <CardListWrap>
          {item.card.summary.map((content, index) => (
            <CardList key={index}>{content}</CardList>
          ))}
        </CardListWrap>
        <CardBottom>
          <Cardlanguage>{languageValues.join(", ")}</Cardlanguage>
          <CardButton onClick={() => openModal(item)}>자세히보기</CardButton>
        </CardBottom>
      </CardContent>
    </Card>
  );
};

const CardTitle = styled.h3`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #27361f;
  font-weight: 900;
  font-size: 1.3rem;

  span {
    font-size: 14px;
    opacity: 0.5;
  }

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: 1.1rem;

    span {
      font-size: 0.7rem;
    }
  }
`;

const CardSummary = styled.p`
  margin-bottom: 20px;
  font-size: 1rem;
  opacity: 0.7;

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardListWrap = styled.div`
  text-indent: 10px;
  font-size: 0.75rem;
  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const CardList = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0px;
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: #27361f;
    border-radius: 4px;
  }
`;

const CardBottom = styled.div``;
const Cardlanguage = styled.div`
  display: inline-block;
  margin-top: 20px;
  padding: 3px 20px;
  background: #27361f;
  color: #dbe6cd;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  @media (max-width: 1024px) {
    margin-top: 10px;
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const CardButton = styled.button`
  display: block;
  margin-top: 10px;
  padding: 5px 20px;
  background-color: #dbe6cd;
  color: #27361f;
  border-radius: 10px;
  font-size: 12px;

  &:hover {
    background-color: #27361f;
    color: #dbe6cd;
  }
`;
export default ProjectCard;
