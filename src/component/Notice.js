import React, { useEffect, useState } from "react";
import styled from "styled-components";

// 스타일링
const TableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

const NoticeTable = styled.table`
  width: 1200px;
  border-collapse: collapse;
  margin: 0 auto;
`;

const ColumnHeader = styled.th`
  padding: 10px;
  text-align: center;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  width: 300px;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;

const NoticeRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const NoticeCell = styled.td`
  padding: 10px;
  text-align: center;
  width: 300px;
`;

function Notice() {
  const [notices, setNotices] = useState([]); // notices 상태 관리

  useEffect(() => {
    // API 호출
    fetch("https://www.localhost:8080/notice") // 실제 API URL로 변경
      .then((response) => response.json())
      .then((data) => {
        setNotices(data); // 데이터를 상태에 저장
      })
      .catch((error) => console.error("Error fetching notices:", error));
  }, []); // 빈 배열을 두어 컴포넌트가 처음 렌더링될 때만 호출됨

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>공지사항 목록</h2>
      <TableContainer>
        <NoticeTable>
          <thead>
            <tr>
              <ColumnHeader>번호</ColumnHeader>
              <ColumnHeader>제목</ColumnHeader>
              <ColumnHeader>작성일</ColumnHeader>
            </tr>
          </thead>
          <tbody>
            {notices.length > 0 ? (
              notices.map((notice) => (
                <NoticeRow key={notice.id}>
                  <NoticeCell>{notice.id}</NoticeCell>
                  <NoticeCell>{notice.title}</NoticeCell>
                  <NoticeCell>{notice.date}</NoticeCell>
                </NoticeRow>
              ))
            ) : (
              <NoticeRow>
                <NoticeCell colSpan="3">No notices available</NoticeCell>
              </NoticeRow>
            )}
          </tbody>
        </NoticeTable>
      </TableContainer>
    </div>
  );
}

export default Notice;
