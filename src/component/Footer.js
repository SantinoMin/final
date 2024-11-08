import styled from "styled-components";

const FooterContainer = styled.div`
  height: 200px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  // position: fixed; /* 화면에 고정 */
  bottom: 0; /* 하단 위치 */
  width: 100%; /* 전체 너비 */
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
