import React, { useState, useEffect } from "react";
import withSplitting from "../../Lib/withSplitting";
const MM02Presenter = withSplitting(() => import("./MM02Presenter"));
import useInput from "../../Hooks/useInput";
import { TRY_LOGIN, CHECK_SECRET_CODE, GET_USER } from "./MM02Queries";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery, useMutation } from "react-apollo-hooks";

const MM02Container = ({ history }) => {
  ////////////  VARIABLE      //////////////
  ////////////  USE STATE     //////////////
  const inputEmail = useInput("");
  const [tab, setTab] = useState(0);
  const assignment = useInput("");
  ////////////  USE REF       //////////////
  ////////////  USE CONTEXT   //////////////
  ////////////  USE QUERY     //////////////
  ////////////  USE MUTATION  //////////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);

  ////////////  USE EFECT     //////////////
  const userData = async () => {
    const { data } = await getUserMutation({
      variables: {
        email: inputEmail.value,
        secretCode: assignment.value,
      },
    });

    return { data };
  };

  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
    } else {
      alert("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode) {
      alert("로그인 성공 !!");
      history.push("/");
      window.sessionStorage.setItem(
        "login",
        JSON.stringify((await userData()).data)
      );
      history.push("/");
    } else {
      alert("인증코드가 잘못되었습니다.");
    }
  };

  return (
    <MM02Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
      tab={tab}
      assignment={assignment}
      assignmentCheckHandler={assignmentCheckHandler}
    />
  );
};

export default MM02Container;
