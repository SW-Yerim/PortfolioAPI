import React from "react";
import styled from "styled-components";

const ProjectFeatures = ({ features }) => {
  return (
    <ListWrap>
      {features.map((item, index) => (
        <ListTitle key={index}>{item}</ListTitle>
      ))}
    </ListWrap>
  );
};

const ListWrap = styled.ul`
  margin-bottom: 2px;
  line-height: 1.8rem;
`;
const ListTitle = styled.li`
  word-break: keep-all;

  &::before {
    content: "·";
    margin: 0 5px 0 10px;
  }

  @media (max-width: 768px) {
    &::before {
      margin: 0 5px 0 0;
    }
  }
`;

export default ProjectFeatures;
