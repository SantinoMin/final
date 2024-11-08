import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigate를 사용하려면 이 임포트가 필요합니다.
import styled from "styled-components";
import { HorizontalBLine, HorizontalGLine } from "./Horizin/Horizin.style.tsx";
import {
  SearchButton,
  SearchContainer,
  SearchInput,
  SearchTitle,
} from "./Search/Search.style.tsx";

const ComplainList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate(); // navigate 훅을 호출하여 navigate 함수 정의

  const buttonLabels = ["1주일", "1개월", "3개월"]; // 버튼 텍스트 설정

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const toComplainDetail = (id) => {
    // 클릭한 게시글의 id를 사용하여 ComplainDetail 페이지로 이동
    navigate(`/community/complainDetail/${id}`);
  };

  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>컴플레인 공지</Heading>
        <Navigation>
          <span>홈 / 커뮤니티</span>
          <span> / </span>
          <BoldText>컴플레인 공지</BoldText>
        </Navigation>
      </HeadingContainer>

      <HeadingContainer1>
        {buttonLabels.map((label, index) => (
          <PeriodButton
            key={index}
            isSelected={selectedButton === index}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </PeriodButton>
        ))}

        <SearchContainer>
          <SearchTitle>제목</SearchTitle>
          <SearchInput placeholder="검색어를 입력하세요" />
          <SearchButton>찾기</SearchButton>
        </SearchContainer>
      </HeadingContainer1>

      <HorizontalBLine />

      <TableHeader>
        <div>번호</div>
        <div>제목</div>
        <div>작성일</div>
      </TableHeader>

      <HorizontalBLine />

      {[1, 2, 3, 4, 5].map((id) => (
        <div key={id}>
          <TableInfoList onClick={() => toComplainDetail(id)}>
            <div>{id}</div>
            <div>
              [주요 공지사항] 더치원액 팩 1000ml 액상 (브라질산으로 변경됨)
            </div>
            <div>2024-10-11 13:49:46</div>
          </TableInfoList>

          <HorizontalGLine />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 38px;
`;

const HeadingContainer1 = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Heading = styled.h2`
  font-size: 24px;
  text-align: center;
  flex-grow: 1;
`;

const Navigation = styled.div`
  font-size: 10px;
  position: absolute;
  margin-right: 250px;
  right: 0;
`;

const PeriodButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  width: 90px;
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
  border-color: ${({ isSelected }) => (isSelected ? "red" : "#ddd")};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

const TableHeader = styled.div`
  display: flex;
  width: 1200px;
  height: 80px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    margin-left: 37px;
  }

  & > div:last-child {
    margin-right: 37px;
  }
`;

const TableInfoList = styled.div`
  display: flex;
  width: 1200px;
  height: 80px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > div {
    &:hover {
      color: red; /* 게시글 hover 시 색상 변경 */
    }
  }

  & > div:first-child {
    margin-left: 37px;
  }

  & > div:last-child {
    margin-right: 37px;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default ComplainList;
