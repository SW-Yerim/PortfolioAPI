import React from "react";
import bgImage from "../../assets/images/mainBg.png";
import styled from "styled-components";

const Main = () => {
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
    <AppWrapper id="main">
      <ContentWrap>
        <ContentTitle>
          - 선우예림 -
          <br />
          개발자 포트폴리오
        </ContentTitle>
        <Hr />
        <Contents>
          안녕하세요.
          <br />
          프론트 지식과 백엔드 지식까지 골고루 갖추고 있는
          <br />웹 개발자 선우예림 입니다.
        </Contents>
        <Button onClick={() => handleScroll("about")}>더 알아보기 ↓</Button>
      </ContentWrap>
    </AppWrapper>
  );
};

const AppWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

const ContentWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 71.25rem;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const ContentTitle = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  word-break: keep-all;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Contents = styled.p`
  font-weight: 500;
  margin: 0 auto 2rem;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #27361f;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;

  &:hover {
    background-color: #275319;
  }
`;

const Hr = styled.hr`
  width: 50px;
  border: 0;
  height: 3px;
  background-color: #27361f;
  margin: 30px auto;
`;

export default Main;
