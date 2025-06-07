import React from "react";
import styled from "styled-components";
import { icons } from "../../assets/icons";
import { careers } from "../../datas/careerData";

const CareerItem = () => {
  return (
    <>
      {careers.map((item, index) => (
        <CareerWrapper key={index}>
          <CareerCompany>
            <CompanyTitle>
              {item.title} <span>( {item.date} )</span>
            </CompanyTitle>
            <CompanyInfo>{item.summary.map((content) => content)}</CompanyInfo>
          </CareerCompany>
          <CareerContents>
            {item.project.map((project, index) => (
              <CareerDetails key={index}>
                <DetailTitle>
                  {`${project.title} ( ${project.headcount}인 )`}
                </DetailTitle>
                <DetailContent>
                  <dl>
                    <dt>투입기간 : </dt>
                    <dd>{project.date}</dd>
                  </dl>
                  <dl>
                    <dt>업무내용 : </dt>
                    <dd>{project.summary.map((content) => content)}</dd>
                  </dl>
                  <dl>
                    <dt>사용언어 : </dt>
                    <dd>
                      {project.language.map((content, index) => (
                        <img key={index} src={icons[content]} alt={content} />
                      ))}
                    </dd>
                  </dl>
                </DetailContent>
                {project.url && (
                  <DetailButton
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    상세내용 보러가기 →
                  </DetailButton>
                )}
              </CareerDetails>
            ))}
          </CareerContents>
        </CareerWrapper>
      ))}
    </>
  );
};

const CareerWrapper = styled.div`
  display: flex;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const CareerCompany = styled.div`
  flex: 1;
  padding: 30px;
  border-right: 1px solid #000;

  @media (max-width: 768px) {
    padding: 0 30px;
    border: none;
    text-align: center;
  }
`;

const CompanyTitle = styled.div`
  margin-bottom: 1rem;
  font-weight: 900;
  font-size: 1.5rem;
  span {
    font-size: 0.9rem;
    display: block;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
  }
`;

const CareerContents = styled.div`
  flex: 4;
  padding: 30px;

  @media (max-width: 1024px) {
    padding: 20px 0;
  }

  @media (max-width: 768px) {
  }
`;

const CompanyInfo = styled.div`
  font-size: 0.8rem;
  word-break: keep-all;
`;

const CareerDetails = styled.div`
  margin-bottom: 30px;
`;

const DetailTitle = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
  border-left: 3px solid #27361f;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    word-break: keep-all;
  }
`;

const DetailContent = styled.div`
  padding-left: 15px;
  font-size: 14px;
  dl {
    display: flex;
    align-items: start;
  }
  dt {
    margin-right: 5px;
  }
  dd {
    flex: 1;
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 768px) {
    dt,
    dd {
      font-size: 0.8rem;
    }
  }
`;

const DetailButton = styled.a`
  margin-left: 15px;
  padding: 5px;
  font-size: 12px;
  color: #27361f;
  &:hover {
    border-bottom: 1px solid #27361f;
  }
`;

export default CareerItem;
