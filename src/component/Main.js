import styled from "styled-components";

const Main = () => {
  return (
    <MainPage>메인 페이지</MainPage>

    // <Navbar color="light" light expand="md" style={{ height: "500px" }}>
    //   {" "}
    //   {/* 높이를 80px로 설정 */}
    //   <NavbarBrand href="/" className="mr-auto">
    //     <i>
    //       <b>kosta.com</b>
    //     </i>
    //   </NavbarBrand>
    //   <NavbarToggler className="mr-auto" />
    //   <Nav navbar>
    //     <NavItem>
    //       <NavLink href="login">로그인</NavLink>
    //     </NavItem>

    //     <NavItem>
    //       <NavLink href="join">회원가입</NavLink>
    //     </NavItem>

    //     <NavItem>
    //       <NavLink href="/">게시판</NavLink>
    //     </NavItem>
    //   </Nav>
    // </Navbar>
  );
};

const MainPage = styled.div`
  height: 515px;
  display: flex;
  justify-content: center;
  // text-align: center;
  align-items: center;
  font-size: 50px;
`;

export default Main;
