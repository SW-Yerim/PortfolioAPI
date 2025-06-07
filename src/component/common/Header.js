import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = () => {
  // 화면 스크롤 시 헤더 fix
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsFixed(scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderWrapper $isFixed={isFixed}>
      <Nav>
        <Logo $isFixed={isFixed} onClick={() => handleScroll("main")}>
          Yerim's Portfolio
        </Logo>
        <GNB>
          <GNBItem onClick={() => handleScroll("about")}>About Me</GNBItem>
          <GNBItem onClick={() => handleScroll("skills")}>Skills</GNBItem>
          <GNBItem onClick={() => handleScroll("archiving")}>Archiving</GNBItem>
          <GNBItem onClick={() => handleScroll("project")}>Projects</GNBItem>
          <GNBItem onClick={() => handleScroll("career")}>Career</GNBItem>
        </GNB>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ $isFixed }) => ($isFixed ? "#fff" : "transparent")};
  box-shadow: ${({ $isFixed }) =>
    $isFixed ? "0 2px 8px rgba(0,0,0,0.1)" : "none"};
  z-index: 999;
  color: #27361f;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 1);
  font-weight: 900;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

const Logo = styled.div`
  font-size: ${({ $isFixed }) => ($isFixed ? "1.5rem" : "2.5rem")};

  &:hover {
    color: #fff;
    text-shadow: 1px 1px 1px #27361f;
  }

  @media (max-width: 1024px) {
    font-size: ${({ $isFixed }) => ($isFixed ? "1.5rem" : "2rem")};
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GNB = styled.ul`
  display: flex;
  gap: 20px;
`;

const GNBItem = styled.li`
  &:hover {
    color: #fff;
    text-shadow: 1px 1px 1px #27361f;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
