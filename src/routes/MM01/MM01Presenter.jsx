import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Typist from "react-typist";

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
  margin: 10px;
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
  width: 250px;
  height: 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  margin: 20px 0px 50px 0px;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.pointColor};
  }
`;

const PostButton = styled.button`
  width: 250px;
  height: 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.whiteColor};
  margin-left: 10px;
  transition: 0.5s;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.pointColor};
  }
`;

const MM01Presenter = ({
  newUserName,
  newEmail,
  newNickName,
  newMobile,
  registUserHandler,
}) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>SIGN UP</Title>
      </Typist>
      <Fade bottom>
        <TextInput type="text" placeholder={`Email...`} {...newEmail} />
        <TextInput type="text" placeholder={`NAME...`} {...newUserName} />
        <TextInput type="text" placeholder={`NICKNAME...`} {...newNickName} />
        <TextInput type="text" placeholder={`MOBILE...`} {...newMobile} />
        <Button onClick={registUserHandler}>SIGN UP</Button>
      </Fade>
    </Wrapper>
  );
};

export default MM01Presenter;
