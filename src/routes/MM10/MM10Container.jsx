import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import withSplitting from "../../Lib/withSplitting";
const MM10Presenter = withSplitting(() => import("./MM10Presenter"));

import {
  VIEW_NOTICE,
  CREATE_NOTICE,
  UPDATE_NOTICE,
  DELETE_NOTICE,
  GET_NOTICE_TOTALPAGE,
  GET_NOTICEBOARD_TOTALPAGE,
  GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT,
} from "./MM10Queries";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useInput from "../../Hooks/useInput";

const MM10Container = ({ history }) => {
  ////////////  VARIABLE      //////////////
  ////////////  USE STATE     //////////////
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });

  ////////////  USE REF       //////////////
  ////////////  USE CONTEXT   //////////////
  ////////////  USE QUERY     //////////////
  const {
    data: noticeDatum,
    loading: noticeDatumLoading,
    refetch: noticeDatumRefetch,
  } = useQuery(VIEW_NOTICE, {
    variables: {
      searchValue,
      limit,
      currentPage,
    },
  });

  const { data: noticePageData, refetch: noticePageRefetch } = useQuery(
    GET_NOTICE_TOTALPAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  const {
    data: totalPageData,
    loading: totalPageLoading,
    refetch: totalPageRefetch,
  } = useQuery(GET_NOTICEBOARD_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const {
    data: totalPageOnlyCntData,
    loading: totalPageOnlyCntLoading,
    refetch: totalPageOnlyCntRefetch,
  } = useQuery(GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT, {
    variables: {
      searchValue,
      limit,
    },
  });

  ////////////  USE MUTATION  //////////////

  const [createNotice] = useMutation(CREATE_NOTICE, {
    variables: {
      title: value.title,
      description: value.desc,
    },
  });
  // const [deleteNotice] = useMutation(DELETE_NOTICE);
  const [deleteNotice] = useMutation(DELETE_NOTICE);
  ////////////  USE EFECT     //////////////

  useEffect(() => {
    noticeDatumRefetch();
    noticePageRefetch();
    if (noticePageData && !pages) {
      const temp = [];

      for (let i = 0; i < noticePageData.getNoticeBoardTotalPage; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [noticePageData]);

  useEffect(() => {
    noticeDatumRefetch();
    totalPageRefetch();
    totalPageOnlyCntRefetch();
  }, []);

  ////////////  EVENT HANDLER //////////////

  const changeFloorHandler = (floor) => {
    setCurrentFloor(floor);
    setDetailKey(null);
    inputSearch.setValue("");
    setSearchValue("");
  };

  const changeSearchValueHandler = () => {
    setPages(null);
    setSearchValue(inputSearch.value);
  };

  const addNotice = async () => {
    if (value.title === "") {
      toast.error("NOTICE TYPE IS MUST!");
      return;
    }
    if (value.desc === "") {
      toast.error("NOTICE TYPE IS MUST!");
      return;
    }

    const { data } = await createNotice();
    if (data.createNotice) {
      toast.info("게시글이 추가되었습니다");
      noticeDatumRefetch();
      setValue("");
      _isDialogOpenToggle();
    } else {
      toast.error("다시 시도해주세요");
    }
  };

  const _isDialogOpenToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const moveLinkHandler = (idx) => {
    history.push(`/notice-detail/${idx}`);
  };

  const prevAndNextPageChangeNoticeHandler = (page) => {
    if (page < 0) {
      tosat.error("첫 페이지 입니다.");
      return;
    }

    if (page > totalPageData.getNoticeBoardTotalPage - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    setCurrentPage(page);
  };

  return (
    <MM10Presenter
      noticeDatum={noticeDatum && noticeDatum.viewAllNotice}
      currentPage={currentPage}
      pages={pages}
      limit={limit}
      setCurrentPage={setCurrentPage}
      totalPage={totalPageData && totalPageData.getNoticeBoardTotalPage}
      totalCnt={
        totalPageOnlyCntData &&
        totalPageOnlyCntData.getNoticeBoardTotalPageOnlyCnt
      }
      prevAndNextPageChangeNoticeHandler={prevAndNextPageChangeNoticeHandler}
      createNotice={createNotice}
      inputSearchValue={inputSearch}
      moveLinkHandler={moveLinkHandler}
      // boardDeleteHandler={boardDeleteHandler}
      changePageHandler={changePageHandler}
      // noticeUpdateHandler={noticeUpdateHandler}
      _isDialogOpenToggle={_isDialogOpenToggle}
      changeFloorHandler={changeFloorHandler}
      changeSearchValueHandler={changeSearchValueHandler}
      isDialogOpen={isDialogOpen}
      _valueChangeHandler={_valueChangeHandler}
      valueTitle={value.title}
      valueDesc={value.desc}
      addNotice={addNotice}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
};

export default MM10Container;
