import React from "react";
import styled from "styled-components";

const ProjectSummary = ({ summary }) => {
  return (
    <>
      {summary.map((item, index) => (
        <ListWrap key={index} isLast={index === summary.length - 1}>
          {item}
        </ListWrap>
      ))}
    </>
  );
};

const ListWrap = styled.div`
  font-size: ${(props) => (props.isLast ? "0.75rem" : "0.9rem")};
  line-height: 1.8rem;
  text-indent: 10px;
  color: ${(props) => (props.isLast ? "#888" : "inherit")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.isLast ? "0.75rem" : "0.8rem")};
    line-height: 1.6rem;
    text-indent: 0px;
  }
`;

export default ProjectSummary;
