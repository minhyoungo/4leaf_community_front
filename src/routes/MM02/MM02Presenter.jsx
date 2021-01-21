// import React from "react";
// import styled from "styled-components";
// import { withResizeDetector } from "react-resize-detector";
// import Fade from "react-reveal/Fade";
// import {
//   EmptyList,
//   SearchWrapper,
//   TableBody,
//   TableBodyLIST,
//   TableWrapper,
//   Wrapper,
//   WholeWrapper,
//   // TextInput,
//   TableHead,
//   TableHeadLIST,
//   PagenationWrapper,
//   PagenationBtn,
//   Pagenation,
//   MobileTable,
//   MobileTableWrapper,
//   RsWrapper,
//   CommonButton,
//   SubjectTitle,
// } from "../../Components/CommonComponents";

// const TextInput = styled.input`
//   width: ${(props) => props.width || `450px`};
//   height: 25px;
//   border-radius: ${(props) => props.theme.radius};
//   margin: 0px 5px;
//   padding: 0px 15px;
//   outline: none;
//   border: 1px solid ${(props) => props.theme.greyColor};
//   background: none;
//   box-shadow: ${(props) => props.theme.boxShadow};
//   transition: 0.5s;

//   &:hover {
//     box-shadow: 5px 5px 5px #0b0b0b;
//   }

//   &:focus {
//     box-shadow: 5px 5px 5px #0b0b0b;
//   }
// `;

// const SearchInput = styled.input`
//   width: 400px;
//   height: 40px;
// `;

// const MM02Presenter = (
//   inputEmail,
//   loginClickHandler,
//   tab,
//   assignment,
//   assignmentCheckHandler
// ) => {
//   return (
//     <WholeWrapper>
//       <RsWrapper>
//         <SubjectTitle>로그인</SubjectTitle>
//         {tab === 0 && (
//         <Fade bottom>
//           <TextInput
//             placeholder="Email address"
//             // height={`50px`}
//             // width={`300px`}
//             // margin={`0 0 50px 0`}
//             {...inputEmail}
//           />
//           <CommonButton onClick={() => loginClickHandler()}>
//             Continue
//           </CommonButton>
//         </Fade>
//         )}
//         {tab === 1 && (
//           <Fade bottom>
//             <RowWrapper>
//               <TextInput placeholder={`SecretCode...`} {...assignment} />
//               <Button onClick={() => assignmentCheckHandler()}>인증하기</Button>
//             </RowWrapper>
//           </Fade>
//         )}
//       </RsWrapper>
//     </WholeWrapper>
//   );
// };
// export default withResizeDetector(MM02Presenter);

import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RowWrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 25px;
  border-radius: ${(props) => props.theme.radius};
  margin: 0px 5px;
  padding: 0px 15px;
  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0 0 40px 0;
`;

const Button = styled.button`
  width: 80 dpx;
  height: 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.pointColor};
  }
`;
const MM02Presenter = ({
  inputEmail,
  loginClickHandler,
  tab,
  assignment,
  assignmentCheckHandler,
}) => {
  return (
    <Wrapper>
      <Typist cursor={{ show: false }}>
        <Title>Sign In</Title>
      </Typist>

      {tab === 0 && (
        <Fade bottom>
          <RowWrapper>
            <TextInput placeholder={`email...`} {...inputEmail} />
            <Button onClick={() => loginClickHandler()}>Log In</Button>
          </RowWrapper>
        </Fade>
      )}
      {tab === 1 && (
        <Fade bottom>
          <RowWrapper>
            <TextInput placeholder={`SecretCode...`} {...assignment} />
            <Button onClick={() => assignmentCheckHandler()}>인증하기</Button>
          </RowWrapper>
        </Fade>
      )}
    </Wrapper>
  );
};

export default MM02Presenter;
