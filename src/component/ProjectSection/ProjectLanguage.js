import React from "react";
import styled from "styled-components";

const ProjectLanguage = ({ language }) => {
  console.log("language", language);
  return (
    <>
      {Object.entries(language).map(([key, value]) => {
        if (!value || value.length === 0) return null;

        return (
          <ListWrap>
            <ListTitle>{key}</ListTitle>
            <ListContent>{value.join(", ")}</ListContent>
          </ListWrap>
        );
      })}
    </>
  );
};

const ListWrap = styled.dl`
  display: grid;
  grid-template-columns: 150px 1fr;

  margin-bottom: 2px;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    line-height: 1.6rem;
  }
`;

const ListTitle = styled.dt`
  word-break: keep-all;

  &::before {
    content: "·";
    margin: 0 5px 0 10px;
  }

  @media (max-width: 768px) {
    font-weight: 700;

    &::before {
      content: none;
    }
  }
`;

const ListContent = styled.dd``;

export default ProjectLanguage;
