import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/shopping">쇼핑몰</StyledLink>
      <StyledLink to="/stock">재고관리</StyledLink>
      <StyledLink to="/order">주문관리</StyledLink>

      {/* 재무관리 메뉴 */}
      <MenuItem>
        <StyledLinkMain to="/financial">재무관리</StyledLinkMain>{" "}
        {/* 변경된 스타일 */}
        <DropdownMenu>
          <DropdownLink to="/financial/revenue-input">매출입력</DropdownLink>{" "}
          {/* 드롭다운 메뉴의 글씨 크기 조정 */}
          <DropdownLink to="/financial/revenue-analysis">매출분석</DropdownLink>
          <DropdownLink to="/financial/top-selling-items">
            판매량 높은 품목
          </DropdownLink>
          <DropdownLink to="/financial/expense-history">지출 내역</DropdownLink>
        </DropdownMenu>
      </MenuItem>

      {/* 커뮤니티 메뉴 */}
      <MenuItem>
        <StyledLink to="/Home">커뮤니티</StyledLink>

        <DropdownMenu>
          <StyledLink to="/community/noticeWrite">
            공지사항 작성(임의)
          </StyledLink>
          <StyledLink to="/community/noticeList">공지사항</StyledLink>
          <StyledLink to="/community/askWrite">1:1 문의 작성(임시)</StyledLink>
          <StyledLink to="/community/askList">1:1 문의</StyledLink>
          <StyledLink to="/community/complainList">컴플레인 공지</StyledLink>
          <StyledLink to="/community/complainDetail">컴플레인 상세</StyledLink>
        </DropdownMenu>
      </MenuItem>

      <StyledLink to="/mypage">마이페이지</StyledLink>
    </HeaderContainer>
  );
};

// HeaderContainer 스타일링
const HeaderContainer = styled.div`
  height: 206px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  overflow: visible;
  z-index: 1; /* 다른 요소보다 위에 표시되도록 설정 */
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* 부모 요소 바로 아래에 위치하도록 설정 */
  width: 150px;
  left: -30px;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0; /* 기본적으로 숨김 처리 */
  max-height: auto; /* 최대 높이를 0으로 설정하여 숨김 처리 */
  overflow: visible; /* 넘치는 내용도 보이도록 설정 */
  transition: opacity 0.3s ease, max-height 0.3s ease;
  border-radius: 10px;
`;

const MenuItem = styled.div`
  position: relative; /* 하위 메뉴를 위치시키기 위해 relative로 설정 */
  &:hover > div {
    opacity: 1;
    max-height: 300px; /* hover 시 드롭다운 메뉴의 최대 높이를 설정 */
  }
`;

// 링크 스타일링
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 20px;

  &:hover {
    text-decoration: underline;
  }
`;

// 재무관리 메뉴 항목
const StyledLinkMain = styled(StyledLink)`
  // font-size: 16px; /* 재무관리 메뉴의 글씨 크기를 기본 크기보다 크게 설정 */
`;

// 드롭다운 메뉴 항목 스타일링
const DropdownLink = styled(StyledLink)`
  font-size: 12px; /* 드롭다운 메뉴 항목의 글씨 크기를 작게 설정 */
  padding: 8px 16px; /* 여백 조정 */
`;

export default Header;
