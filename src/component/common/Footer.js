import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>Copyright 2025. Sunwoo Yerim. All rights reserved.</div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 30px;
  background-color: #27361f;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export default Footer;
