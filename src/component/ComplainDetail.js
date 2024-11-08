import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // navigate와 params 사용
import styled from "styled-components";
import * as B from "./Button/Button.style.tsx";
import { HorizontalBLine, HorizontalGLine } from "./Horizin/Horizin.style.tsx";
import { InputMedium, Textarea } from "./Input/Input.style.tsx";

const ComplainDetail = () => {
  const [complain, setComplain] = useState(null);
  const [comment, setComment] = useState(""); // 댓글 상태 관리
  const { id } = useParams(); // URL에서 id 값을 받아옴
  const navigate = useNavigate();

  // 해당 게시글을 가져오는 함수
  useEffect(() => {
    // 서버에서 게시글 데이터를 가져오는 코드 (mock API)
    fetch(`https://www.localhost:8080/complain/${id}`)
      .then((response) => response.json())
      .then((data) => setComplain(data))
      .catch((error) => console.error("Error fetching complain data:", error));
  }, [id]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // 댓글 제출 처리 로직
    console.log("Comment submitted:", comment);
    setComment(""); // 댓글 입력 필드 초기화
  };

  if (!complain) return <div>Loading...</div>; // 데이터가 로딩 중일 때

  return (
    <Wrapper>
      <HeadingContainer>
        <Heading>컴플레인 상세</Heading>
        <Navigation>
          <span>홈 / 커뮤니티</span>
          <span> / </span>
          <BoldText>컴플레인 상세</BoldText>
        </Navigation>
      </HeadingContainer>

      <HorizontalBLine />

      <Form>
        <FormContainer>
          <div>제목</div>
          <InputMedium type="text" value={complain.title} disabled />
        </FormContainer>

        <HorizontalGLine />

        <FormContainer>
          <div>작성일</div>
          <InputMedium type="text" value={complain.date} disabled />
        </FormContainer>

        <HorizontalGLine />

        <FormContainer>
          <div>글 내용</div>
          <Textarea value={complain.content} disabled />
        </FormContainer>

        <HorizontalGLine />

        <FormContainer>
          <div>답글</div>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="점주님 안녕하세요. 혹시 직원교육 참여를 원하시면, 회사 교육팀 02)404-1234로 문의 부탁드립니다. "
          />
        </FormContainer>

        <B.ButtonContainer>
          <B.Button
            variant="cancel"
            onClick={() => navigate("/community/complainList")}
          >
            목록으로
          </B.Button>
          <B.Button variant="register" onClick={handleCommentSubmit}>
            댓글 등록
          </B.Button>
        </B.ButtonContainer>
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

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 38px;
`;

const Heading = styled.h2`
  font-size: 24px;
  text-align: center;
  flex-grow: 1;
`;

const Navigation = styled.div`
  font-size: 10px;
  position: absolute;
  margin-right: 350px;
  right: 0;
`;

const Form = styled.form`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  & > div {
    font-size: 20px;
    font-weight: bold;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export default ComplainDetail;
