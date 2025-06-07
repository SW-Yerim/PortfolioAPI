import React, { useState } from "react";
import styled from "styled-components";
import SectionContainer from "../common/layout/SectionContainer";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../items/ProjectCard";
import ProjectModal from "../items/ProjectModal";
import { projects } from "../../datas/projectData";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();

  const openModal = (item) => {
    setContent(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setContent();
    setIsOpen(false);
  };

  return (
    <SectionContainer id="project">
      <SectionTitle title="Project" />

      {/* 프로젝트 카드 */}
      <SectionContent>
        {projects.map((item, index) => (
          <ProjectCard key={index} item={item} openModal={openModal} />
        ))}
      </SectionContent>

      {/* 프로젝트 상세 모달창 */}
      {isOpen && (
        <ProjectModal content={content} closeModal={() => closeModal()} />
      )}
    </SectionContainer>
  );
};

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  max-width: 1050px;
  gap: 50px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 750px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    font-size: 10px;
  }
`;

export default Project;
