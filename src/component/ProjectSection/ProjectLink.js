import React from "react";
import styled from "styled-components";

const ProjectLink = ({ url }) => {
  return (
    <ListWrap>
      <ListContent>
        <a href={url.github} target="_blank" rel="noopener noreferrer">
          GitHub <span>바로가기 →</span>
        </a>
      </ListContent>
      <ListContent>
        <a href={url.live} target="_blank" rel="noopener noreferrer">
          Live Demo <span>바로가기 →</span>
        </a>
      </ListContent>
      <ListContent>
        <a href={url.tistory} target="_blank" rel="noopener noreferrer">
          프로젝트 상세내용 <span>바로가기 →</span>
        </a>
      </ListContent>
    </ListWrap>
  );
};

const ListWrap = styled.dl`
  margin-bottom: 2px;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    line-height: 1.6rem;
  }
`;

const ListContent = styled.dd`
  a {
    font-weight: 700;
  }
  span {
    font-weight: 400;
    font-size: 0.8rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default ProjectLink;
