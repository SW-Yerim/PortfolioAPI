import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const ProjectTrouble = ({ trouble }) => {
  const [isOpen, setIsOpen] = useState([]);

  const handleIndexToggle = (index) => {
    setIsOpen((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {trouble.map((item, index) => (
        <ListWrap key={index}>
          <ListTitle onClick={() => handleIndexToggle(index)}>
            {item.problem}
          </ListTitle>
          <AnimatePresence>
            {isOpen.includes(index) && (
              <ListContent
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <div>[원인] {item.cause}</div>
                <div>[해결방법] {item.solution}</div>
                <div>
                  <a href={item.detail} target="_blank">
                    상세내용 바로가기 →
                  </a>
                </div>
              </ListContent>
            )}
          </AnimatePresence>
        </ListWrap>
      ))}
    </>
  );
};

const ListWrap = styled.div`
  line-height: 2rem;
  text-indent: 10px;
  margin-bottom: 2px;
`;
const ListTitle = styled.div`
  background-color: rgba(219, 230, 205, 0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(68, 78, 63, 1);
    color: #fff;
  }
`;
const ListContent = styled.div`
  line-height: 1.8rem;
  font-size: 0.8rem;
  a {
    display: inline-block;
    font-size: 0.75rem;
    text-indent: 10px;
    color: #888;
  }
`;

export default ProjectTrouble;
