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
const Wrapper = styled.div``;
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

const logout = (link) => {
  history.push(`/${link}`);
  sessionStorage.removeItem("login");
};

const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <WholeWrapper>
      <SearchWrapper>
        <Logo>
          <Link to="/">{/* <LogoImg src={`../../images/Logo.png`} /> */}</Link>
        </Logo>
        <SearchInput placeholder="🔍게시물 제목 통합검색" />
        <Just>a</Just>
      </SearchWrapper>

      <HeaderWrapper>
        <InnerWrapper width={`400px`}></InnerWrapper>
        <MenuWrapper>
          <ActionSpan onClick={() => moveLinkHandler("/notice")}>
            공지사항
          </ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/free1")}>
            자유게시판 1
          </ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/free2")}>
            자유게시판 2
          </ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/hot")}>인기</ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/honeyTip")}>
            댓글 게시판
          </ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/story")}>썰</ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/game")}>게임</ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/flex")}>자랑</ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/zzal")}>짤</ActionSpan>
          <ActionSpan onClick={() => moveLinkHandler("/zisikin")}>
            지식인
          </ActionSpan>
        </MenuWrapper>

        <InnerWrapper width={`400px`}>
          {window.sessionStorage.getItem(`login`) ? (
            <ActionSpan onClick={() => logout(``)}>LOG OUT</ActionSpan>
          ) : (
            <Wrapper>
              <ActionSpan onClick={() => moveLinkHandler("/signIn")}>
                SIGN IN
              </ActionSpan>
              <ActionSpan onClick={() => moveLinkHandler("/signUp")}>
                SIGN UP
              </ActionSpan>
            </Wrapper>
          )}
        </InnerWrapper>
      </HeaderWrapper>
    </WholeWrapper>
  );
};
export default Header;
