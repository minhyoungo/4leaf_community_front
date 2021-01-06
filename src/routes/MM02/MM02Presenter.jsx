import React from "react";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import {
  EmptyList,
  SearchWrapper,
  TableBody,
  TableBodyLIST,
  TableWrapper,
  Wrapper,
  WholeWrapper,
  TextInput,
  TableHead,
  TableHeadLIST,
  PagenationWrapper,
  PagenationBtn,
  Pagenation,
  MobileTable,
  MobileTableWrapper,
  RsWrapper,
  CommonButton,
  SubjectTitle,
  TextInput2,
} from "../../Components/CommonComponents";

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
`;

const MM02Presenter = () => {
  return (
    <WholeWrapper height={`100%`}>
      <RsWrapper>
        <SubjectTitle>로그인</SubjectTitle>
        <TextInput2
          placeholder="Email address"
          height={`50px`}
          width={`300px`}
          margin={`0 0 50px 0`}
        />
        <CommonButton>Continue</CommonButton>
      </RsWrapper>
    </WholeWrapper>
  );
};
export default withResizeDetector(MM02Presenter);
