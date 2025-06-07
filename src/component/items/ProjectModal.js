import React from "react";
import styled from "styled-components";
import Modal from "../common/layout/Modal";
import ProjectLink from "../ProjectSection/ProjectLink";
import ProjectLanguage from "../ProjectSection/ProjectLanguage";
import ProjectFeatures from "../ProjectSection/ProjectFeatures";
import ProjectTakeaway from "../ProjectSection/ProjectTakeaway";
import ProjectTrouble from "../ProjectSection/ProjectTrouble";
import ProjectSummary from "../ProjectSection/ProjectSummary";

const ProjectModal = ({ content, closeModal }) => {
  return (
    <Modal closeModal={() => closeModal()} url={content.modal.url}>
      <ItemTitle>{content.title}</ItemTitle>
      <ProjectWrapper>
        <ProjectWrap>
          <ProjectTitle>📌 Summary</ProjectTitle>
          <ProjectSummary summary={content.modal.summary} />
        </ProjectWrap>

        <ProjectWrap>
          <ProjectTitle>🛠️ 사용 기술 및 언어</ProjectTitle>
          <ProjectLanguage language={content.language} />
        </ProjectWrap>

        <ProjectWrap>
          <ProjectTitle>🔗 프로젝트 링크</ProjectTitle>
          <ProjectLink url={content.modal.url} />
        </ProjectWrap>

        <ProjectWrap>
          <ProjectTitle>✨ 주요 기능 및 특징</ProjectTitle>
          <ProjectFeatures features={content.modal.features} />
        </ProjectWrap>

        <ProjectWrap>
          <ProjectTitle>🎯 프로젝트 선정 이유 및 느낀점</ProjectTitle>
          <ProjectTakeaway takeaway={content.modal.takeaway} />
        </ProjectWrap>

        <ProjectWrap>
          <ProjectTitle>🧩 트러블슈팅</ProjectTitle>
          <ProjectTrouble trouble={content.modal.trouble} />
        </ProjectWrap>
      </ProjectWrapper>
    </Modal>
  );
};

const ItemTitle = styled.h3`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #27361f;
  font-size: 1.3rem;
  font-weight: 700;

  span {
    font-size: 14px;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    padding-bottom: 15px;
    font-size: 1.2rem;
  }
`;

const ProjectWrapper = styled.div`
  font-size: 0.9rem;
`;

const ProjectWrap = styled.div`
  margin-bottom: 2rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
  }
`;

const ProjectTitle = styled.div`
  margin-bottom: 10px;
  font-size: 1.3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default ProjectModal;
