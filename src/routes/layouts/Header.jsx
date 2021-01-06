import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const WholeWrapper = styled.div`
  width: 100%;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 150px;
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.div`
  width: 300px;
  height: 120px;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const SearchInput = styled.input`
  width: 400px;
  height: 40px;

  border: 3px solid #4a56a8;
  border-radius: 2px;
  margin-right: 4px;
  &:hover {
    opacity: 1;
    box-shadow: 0px 3px 5px solid #eee;
  }
`;

const Just = styled.div`
  width: 300px;
  height: 120px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #4a56a8;
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ActionSpan = styled.span`
  padding: 5px;
  margin: 5px;
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${(props) => props.theme.pointColor};
  }
`;

const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <WholeWrapper>
      <SearchWrapper>
        {/* <Logo>
          <Link to="/">
            <LogoImg src={`../../images/Logo.png`} />
          </Link>
        </Logo> */}
        <SearchInput placeholder="🔍게시물 제목 통합검색" />
        <Just>a</Just>
      </SearchWrapper>
      <HeaderWrapper>
        <InnerWrapper width={`400px`}></InnerWrapper>
        <MenuWrapper>
          <ActionSpan>공지사항</ActionSpan>
          <ActionSpan>자유게시판 1</ActionSpan>
          <ActionSpan>자유게시판 2</ActionSpan>
          <ActionSpan>인기</ActionSpan>
          <ActionSpan>꿀팁</ActionSpan>
          <ActionSpan>썰</ActionSpan>
          <ActionSpan>게임</ActionSpan>
          <ActionSpan>자랑</ActionSpan>
          <ActionSpan>짤</ActionSpan>
          <ActionSpan>지식인</ActionSpan>
          <ActionSpan></ActionSpan>
        </MenuWrapper>
        <InnerWrapper width={`400px`}>
          <ActionSpan onClick={() => moveLinkHandler("/signIn")}>
            SIGN IN
          </ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/signUp")}>
            SIGN UP
          </ActionSpan>
        </InnerWrapper>
      </HeaderWrapper>
    </WholeWrapper>
  );
};

export default Header;
