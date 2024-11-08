import styled from "styled-components";

export const InputSmall = styled.input`
  width: 437px;
  height: 56px;
  padding: 8px;
  font-size: 14px;

  margin-left: 141px;
  text-align: center;
  border-radius: 8px;
`;

export const InputMedium = styled.input`
  // width: 823px; 피그마 기준

  //적당히 맞춘 기준
  width: 750px;
  height: 56px;
  padding: 8px;
  font-size: 14px;
  margin-left: 176px;
  border-radius: 8px;
  border: 1px solid #ccc9; /* 90% 불투명한 연한 회색 */
  font-size: 24px;
`;

export const Textarea = styled.textarea`
  // width: 823px; 피그마 기준

  //적당히 맞춘 기준
  width: 750px;
  height: 220px;
  padding: 8px;
  font-size: 14px;
  margin-left: 176px;
  border-radius: 8px;
  font-size: 24px;

  border: 1px solid #ccc9; /* 90% 불투명한 연한 회색 */
`;

/**
<InputSmall type="text" value="주요 공지사항"/>

const [title, setTitle] = useState("");
<InputMedium type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

 */
