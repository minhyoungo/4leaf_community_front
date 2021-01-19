import React, { useState, useEffect } from "react";
import useInput from "../../Hooks/useInput";
import withSplitting from "../../Lib/withSplitting";
const MM01Presenter = withSplitting(() => import("./MM01Presenter"));
import { useQuery, useMutation } from "react-apollo-hooks";
import { RESIST_USER } from "./MM01Queries";

const MM01Container = ({ history }) => {
  ////////////  VARIABLE      //////////////
  ////////////  USE STATE     //////////////
  const newEmail = useInput("");
  const newUserName = useInput("");
  const newNickName = useInput("");
  const newMobile = useInput("");
  ////////////  USE REF       //////////////
  ////////////  USE CONTEXT   //////////////
  ////////////  USE QUERY     //////////////
  ////////////  USE MUTATION  //////////////
  const [registUserMutation] = useMutation(RESIST_USER);

  ////////////  USE EFECT     //////////////
  ///////////////////// HANDLER /////////////////////////
  const moveLinkHandler = (link) => {
    history.push(`/${link}`);
  };

  const registUserHandler = async () => {
    if (!newEmail.value || newEmail.value.trim() === "") {
      alert("이메일은 필수 입력사항입니다.");
      return;
    }
    if (!newUserName.value || newUserName.value.trim() === "") {
      alert("이름은 필수 입력사항입니다.");
      return;
    }
    if (!newNickName.value || newNickName.value.trim() === "") {
      alert("별명은 필수 입력사항입니다.");
      return;
    }

    if (!newMobile.value || newMobile.value.trim() === "") {
      alert("연락처는 필수 입력사항입니다.");
      return;
    }

    const { data } = await registUserMutation({
      variables: {
        email: newEmail.value,
        userName: newUserName.value,
        nickName: newNickName.value,
        mobile: newMobile.value,
      },
    });
    // .then(alert("가입완료!!!!"))
    // .then(moveLinkHandler("signIn"));
    console.log(data);
  };

  return (
    <MM01Presenter
      moveLinkHandler={moveLinkHandler}
      newUserName={newUserName}
      newEmail={newEmail}
      newNickName={newNickName}
      newMobile={newMobile}
      registUserHandler={registUserHandler}
    />
  );
};

export default MM01Container;
