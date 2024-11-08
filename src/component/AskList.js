import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as B from "./Button/Button.style.tsx";

// AskList.js
import { HorizontalBLine, HorizontalGLine } from "./Horizin/Horizin.style.tsx";

// import { HorizontalBLine, HorizontalGLine } from "./Horizin/Horizin.style.tsx";

const AskList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected item
  const navigate = useNavigate(); // useNavigate 훅을 호출하여 navigate 함수 정의

  const handleItemClick = (id) => {
    setSelectedItem(selectedItem === id ? null : id); // Toggle answer form visibility
  };

  const askWrite = () => {
    navigate("/community/askWrite");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNotice = {
      type: "주요 공지사항",
      title,
      content,
      date: new Date().toISOString(),
    };

    fetch("https://www.localhost:8080/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotice),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Notice added:", data);
        setTitle("");
        setContent("");
      })
      .catch((error) => console.error("Error posting notice:", error));
  };

  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>1:1 문의</Heading>
        <Navigation>
          <span>홈 / 커뮤니티</span>
          <span> / </span>
          <BoldText>1:1 문의</BoldText>
        </Navigation>
      </HeadingContainer>

      <HeadingContainer1>
        <B onClick={askWrite}>글 작성</B>

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
          <TableInfoList onClick={() => handleItemClick(id)}>
            <div>{id}</div>
            <div>
              [주요 공지사항] 더치원액 팩 1000ml 액상 (브라질산으로 변경됨)
            </div>
            <div>2024-10-11 13:49:46</div>
          </TableInfoList>

          <HorizontalGLine />
          {selectedItem === id && (
            <AnswerContainer>
              <h4>답변 작성</h4>
              <AnswerTextarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="답변을 작성하세요"
              />
              <SubmitButton onClick={handleSubmit}>답변 저장</SubmitButton>
            </AnswerContainer>
          )}
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
  margin-right: 280px;
  right: 0;
`;

const SearchContainer = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 10px;
  margin-left: 200px;
`;

const SearchTitle = styled.div`
  width: 50px;
  font-weight: bold;
  font-size: 18px;
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
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
    onClick =>() = > {
      color: red;
    }
  }

  & > div:first-child {
    margin-left: 37px;
  }

  & > div:last-child {
    margin-right: 37px;
  }
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  // & > h4 {
  //   display: flex;
  //   justify-content: center;
  // }
`;

const AnswerTextarea = styled.textarea`
  min-height: 150px;

  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: lightblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #eaea;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default AskList;
