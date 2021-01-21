import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo-hooks";
import {
  GET_FREE1BOARD_DETAIL,
  GET_FREE1BOARD_BEFORE_ID,
  GET_FREE1BOARD_NEXT_ID,
  UPDATE_FREE1,
  DELETE_FREE1,
} from "../MM11Queries";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import { useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import {
  WholeWrapper,
  RsWrapper,
  CommonButton,
  Wrapper,
  TextInput,
} from "../../../Components/CommonComponents";
import CircularIndeterminate from "../../../Components/loading/CircularIndeterminate";
import useTitle from "@4leaf.ysh/use-title";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Board_D_title = styled.h2`
  width: 100%;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const Board_D = styled.ul`
  width: 100%;
  height: ${(props) => (props.height ? props.height : `40px`)};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${(props) => props.bgColor};
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const Board_D_List = styled.li`
  width: ${(props) => props.width};
  line-height: 40px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta || `center`};
  padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
`;

export default withResizeDetector(({ match, history, width }) => {
  ////////////// - USE CONTEXT- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentData, setCurrentData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });
  ///////////// - USE MUTATION- ////////////////
  const [updateFree1Board] = useMutation(UPDATE_FREE1);
  const [deleteFree1Board] = useMutation(DELETE_FREE1);
  ///////////// - USE QUERY- ////////////////

  const {
    data: free1Data,
    loading: free1Loading,
    refetch: free1Refetch,
  } = useQuery(GET_FREE1BOARD_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  const {
    data: free1NextData,
    loading: free1NextLoading,
    refetch: free1NextRefetch,
  } = useQuery(GET_FREE1BOARD_NEXT_ID, {
    variables: {
      id: match.params.key,
    },
  });

  const {
    data: free1BeforeData,
    loading: free1BeforeLoading,
    refetch: free1BeforeRefetch,
  } = useQuery(GET_FREE1BOARD_BEFORE_ID, {
    variables: {
      id: match.params.key,
    },
  });

  /////////// - EVENT HANDLER- ////////////

  const _isDialogOpenToggle = () => {
    if (!isDialogOpen) {
      setValue({ title: currentData.title, desc: currentData.description });
    }
    setIsDialogOpen(!isDialogOpen);
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const _moveListBoard = () => {
    history.push(`/free1`);
  };

  const _moveBeforeBoard = () => {
    // console.log(free1BeforeData.getFree1BoardBeforeId);
    if (free1BeforeData.getFree1BoardBeforeId === null) {
      toast.error("첫번째 글 입니다.");

      return null;
    }
    history.push(free1BeforeData.getFree1BoardBeforeId._id);
  };

  const _moveNextBoard = () => {
    if (free1NextData.getFree1BoardNextId === null) {
      toast.error("마지막 글 입니다.");

      return null;
    }

    history.push(free1NextData.getFree1BoardNextId._id);
  };

  const updateFree1 = async () => {
    const { data } = await updateFree1Board({
      variables: {
        id: free1Data && free1Data.getFree1BoardDetail._id,
        title: value.title,
        description: value.desc,
      },
    });

    if (data.updateFree1) {
      toast.info("게시글이 수정되었습니다");
      history.push("/free");
      setValue("");
      _isDialogOpenToggle();
    } else {
      toast.error("다시 시도해주세요");
    }
  };

  const boardDeleteHandler = (_id) => {
    confirmAlert({
      title: "DELETE FREE1",
      message: "선택하신 공지사항을 삭제하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => boardDeleteHandlerAfter(_id),
        },
      ],
    });
  };

  const boardDeleteHandlerAfter = async (_id) => {
    const { data } = await deleteFree1Board({
      variables: {
        id: currentData._id,
      },
    });

    if (data.deleteFree1) {
      toast.info("DELETE FREE1!");
      history.push("/");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    if (free1Data && free1Data.getFree1BoardDetail) {
      let tempData = free1Data.getFree1BoardDetail;

      const desc = document.getElementById("free_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [free1Data]);

  useEffect(() => {
    free1Refetch();
    free1NextRefetch();
    free1BeforeRefetch();
  }, []);

  useTitle(``);

  return (
    <WholeWrapper margin={`150px 0 0 0`}>
      <RsWrapper padding={`100px 0`}>
        <Board_D_title>
          {currentData ? currentData : <CircularIndeterminate />}
        </Board_D_title>
        <Board_D dr={`row`}>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={`#dcdcdc`}
          >
            작성자
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData._id : <CircularIndeterminate />}
          </Board_D_List>
          <Board_D_List
            width={width < 700 ? `100%` : `250px`}
            bgColor={`#dcdcdc`}
          >
            작성일
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData.createdAt : <CircularIndeterminate />}
          </Board_D_List>
        </Board_D>

        <Board_D_Desc>
          <Wrapper
            id={"free1_description-js"}
            className={"ql-editor"}
          ></Wrapper>
        </Board_D_Desc>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _isDialogOpenToggle()}
          >
            수정
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => boardDeleteHandler()}
          >
            삭제
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _moveListBoard()}
          >
            목록
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _moveBeforeBoard()}
          >
            이전
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _moveNextBoard()}
          >
            다음
          </CommonButton>
        </Wrapper>
        {/* Dialog Area */}
        <Dialog
          onClose={_isDialogOpenToggle}
          aria-labelledby="customized-dialog-title"
          open={isDialogOpen}
          fullWidth={true}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={_isDialogOpenToggle}
            // class="dialog_title"
          >
            게시글 수정
          </DialogTitle>
          <DialogContent>
            <Wrapper dr={`row`}>
              제목
              <TextInput
                name="title"
                value={value.title}
                onChange={_valueChangeHandler}
              />
            </Wrapper>
            <Wrapper dr={`row`}>
              내용
              <TextInput
                name="desc"
                value={value.desc}
                onChange={_valueChangeHandler}
              />
            </Wrapper>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={updateFree1}>
              수정
            </Button>
            <Button color="secondary" onClick={_isDialogOpenToggle}>
              취소
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog Area */}
      </RsWrapper>
    </WholeWrapper>
  );
});
