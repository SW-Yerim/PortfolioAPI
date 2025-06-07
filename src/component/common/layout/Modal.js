import React from "react";
import styled, { css } from "styled-components";
import { icons } from "../../../assets/icons";

const Modal = ({ children, closeModal, url }) => {
  return (
    <ModalWraper onClick={closeModal}>
      <ModalWrap onClick={(e) => e.stopPropagation()}>
        <ModalButtonWrap>
          <ModalCloseButton isIndex={1} isImg="close" onClick={closeModal} />
          <ModalLinkButton
            isIndex={2}
            isImg="github"
            href={url.github}
            target="_blank"
          />
          <ModalLinkButton
            isIndex={3}
            isImg="live"
            href={url.live}
            target="_blank"
          />
          <ModalLinkButton
            isIndex={4}
            isImg="tistory"
            href={url.tistory}
            target="_blank"
          />
        </ModalButtonWrap>
        <ModalContents>{children}</ModalContents>
      </ModalWrap>
    </ModalWraper>
  );
};

const ModalWraper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const ModalWrap = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 80%;
`;

const ModalButtonWrap = styled.div`
  position: absolute;
  top: 0;
  right: -5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1001;
`;

const ModalContents = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: auto;
  padding: 5rem;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;

const modalButtonStyles = css`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #27361f;
  border-radius: 50%;
  color: #27361f;

  background-image: ${(props) =>
    `url(${icons[props.isImg + "W"] || icons.closeW})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px 30px;

  &:hover {
    background-color: rgba(219, 230, 205, 1);
    background-image: ${(props) =>
      `url(${icons[props.isImg] || icons.closeW})`};
    border: 1px solid #27361f;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const ModalLinkButton = styled.a`
  ${modalButtonStyles}
`;
const ModalCloseButton = styled.button`
  ${modalButtonStyles}/* @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    background-size: 25px 25px;
    background-color: #fff;
    background-image: ${(props) =>
    `url(${icons[props.isImg] || icons.closeW})`};
  } */
`;

export default Modal;
