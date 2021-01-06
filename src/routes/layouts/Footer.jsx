import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CircularIndeterminate from "../../Components/loading/CircularIndeterminate";

const WholeWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const FooterWrapper = styled.div`
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

const Footer = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <WholeWrapper>
      <FooterWrapper>
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
        </MenuWrapper>
      </FooterWrapper>
    </WholeWrapper>
  );
};

export default Footer;
