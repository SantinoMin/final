import styled from "styled-components";

// ButtonProps 인터페이스 정의
interface ButtonProps {
  variant?: "cancel" | "register"; // 'cancel' 또는 'register'만 받을 수 있게 제한
}

export const Button = styled.button<ButtonProps>`
  width: 95.99px;
  height: 32.2px;
  border-radius: 10px;

  font-size: 14px;

   color: ${(props) => (props.variant === "cancel" ? "#222222" : "#FFFFFF")};
  background-color: ${(props) =>
    props.variant === "cancel" ? "#D1D1D1" : "#54473F"};

  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* 오른쪽 정렬 */
  gap: 10px; /* 버튼 간격 */
  margin-top: 40px;
  padding-right: 20px; /* Form 내부에서 오른쪽 여백 조정 */
`;

/**
<ButtonContainer>
  <Button variant="cancel">취소</Button>
  <Button variant="register" type="submit">
    등록하기
  </Button>
</ButtonContainer>;
*/
