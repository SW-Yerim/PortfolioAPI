import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const ProjectTakeaway = ({ takeaway }) => {
  const [isOpen, setIsOpen] = useState([]);

  const handleIndexToggle = (index) => {
    setIsOpen((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {takeaway.map((item, index) => (
        <ListWrap key={index}>
          <ListTitle onClick={() => handleIndexToggle(index)}>
            {item.title}
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
                {item.content}
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
`;

export default ProjectTakeaway;
