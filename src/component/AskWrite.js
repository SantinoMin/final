import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigate를 사용하려면 이 임포트가 필요합니다.
import styled from "styled-components";
import { Button, ButtonContainer } from "./Button/Button.style.tsx";
import { HorizontalBLine, HorizontalGLine } from "./Horizin/Horizin.style.tsx";
import { InputMedium, Textarea } from "./Input/Input.style.tsx";

const AskWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); // useNavigate 훅을 호출하여 navigate 함수 정의
  const [selectedInquiryType, setSelectedInquiryType] = useState("default");

  // 취소 시, 홈으로 리디렉션
  const handleCancel = () => {
    navigate("/home");
  };

  const handleRegister = () => {
    navigate("/community/askList");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 작성한 글을 서버로 전송
    const newNotice = {
      type: "주요 공지사항", // 항상 공지사항
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
        // 글 작성 후 입력 필드 초기화
        setTitle("");
        setContent("");

        // 공지사항 작성이 완료된 후, noticeList 페이지로 리디렉션
        navigate("/community/noticeList");
      })
      .catch((error) => console.error("Error posting notice:", error));
  };

  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>1:1문의 작성</Heading>
        <Navigation>
          <span>홈 / 커뮤니티</span>
          <span> / </span>
          <BoldText>1:1 문의 작성</BoldText>
        </Navigation>
      </HeadingContainer>

      <HorizontalBLine />

      <Form onSubmit={handleSubmit}>
        <FormContainer1>
          {/* <Label> */}
          <LabelDiv>요구사항 유형 *</LabelDiv>

          <Section>
            {/* <label htmlFor="inquiryType">문의 유형 *</label> */}
            <Select
              id="inquiryType"
              value={selectedInquiryType}
              onChange={(e) => setSelectedInquiryType(e.target.value)}
            >
              <Option value="default">선택</Option>
              <Option value="상품 문의">상품 문의</Option>
              <Option value="배송 문의">배송 문의</Option>
              <Option value="수리 문의">수리 문의</Option>
              <Option value="이벤트 문의">이벤트 문의</Option>
              <Option value="기타 문의">기타 문의</Option>
            </Select>
          </Section>

          {/* </Label> */}
        </FormContainer1>

        <HorizontalGLine />

        <FormContainer2>
          {/* <Label> */}
          <div>제목 *</div>
          <InputMedium
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* </Label> */}
        </FormContainer2>

        <HorizontalGLine />

        <FormContainer3>
          {/* <Label> */}
          <div>내용 *</div>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {/* </Label> */}
        </FormContainer3>

        {/* <div> */}
        <HorizontalBLine />
        {/* </div> */}

        {/* <Button variant="outline"></Button> */}

        <ButtonContainer>
          <Button variant="cancel" onClick={handleCancel}>
            취소
          </Button>
          <Button variant="register" type="submit" onClick={handleRegister}>
            등록하기
          </Button>
        </ButtonContainer>
      </Form>
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

const Form = styled.form`
  background-color: lightblue;
  width: 1000px;
  height: 669px;
  display: flex;
  flex-direction: column;
  // gap: 20px;
`;

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: center;
  position: relative;
  margin-bottom: 38px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-top: 0;
  text-align: center;
  // margin-bottom: 78px;
  flex-grow: 1; /* 중앙에 위치하도록 성장 */
`;

const Navigation = styled.div`
  font-size: 10px;
  position: absolute; /* 절대 위치 */
  margin-right: 350px;
  // margin-bottom: 78px;
  right: 0; /* 오른쪽에 배치 */
`;

const Section = styled.div`
  margin-left: 10px;
`;

const InputSmall = styled.input`
  width: 250px;
  height: 30px;
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 260px;
  height: 35px;
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;

const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;

const FormContainer1 = styled.div`
  display: flex;

  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 77px;

  & > div {
    /* 직속 자식 div에만 적용 */
    font-size: 20px;
    font-weight: bold;
  }
`;

const LabelDiv = styled.div`
  margin-right: 90px;
`;

const FormContainer2 = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 77px;

  & > div {
    /* 직속 자식 div에만 적용 */
    font-size: 20px;
    font-weight: bold;
  }
`;

const FormContainer3 = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 77px;

  & > div {
    /* 직속 자식 div에만 적용 */
    font-size: 20px;
    font-weight: bold;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default AskWrite;
