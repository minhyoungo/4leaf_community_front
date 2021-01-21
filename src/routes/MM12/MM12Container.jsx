import MM12Presenter from "./MM12Presenter";
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
  GET_FREE2,
  CREATE_FREE2,
  GET_FREE2_TOTALPAGE,
  GET_FREE2_TOTAL_PAGE,
  GET_FREE2_TOTALPAGE_ONLY_CNT,
} from "./MM12Queries";
import { toast } from "react-toastify";

const MM12Container = ({ history }) => {
  //////////////////  VARIABLE            //////////////
  //////////////////  USE STATE          //////////////
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [imagePath, setImagePath] = useState(``);
  //   const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState(``);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("login"));
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });
  //////////////////  USE REF           //////////////
  ////////////////// EVENT HANDLER     //////////////
  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const moveLinkHandler = (idx) => {
    if (window.sessionStorage.getItem(`login`)) {
      history.push(`/free2-detail/${idx}`);
    } else {
      toast.info("로그인 후 이용 가능합니다.");
      history.push("/signIn");
    }
  };

  const prevAndNextPageChangeFree2Handler = (page) => {
    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > free2PageDatum.getFree2TotalPage - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    setCurrentPage(page);
  };
  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";

    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `4leaf-community/uploads/free2Board/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {}
  };
  //////////////////  USE QUERY       //////////////
  const {
    data: free2Datum,
    loading: free2Loading,
    refetch: free2DatumRefetch,
  } = useQuery(GET_FREE2);

  const {
    data: totalPageData,
    loading: totalPageLoading,
    refetch: totalPageRefetch,
  } = useQuery(GET_FREE2_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const { data: free2PageDatum, refetch: free2PageRefetch } = useQuery(
    GET_FREE2_TOTAL_PAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  const {
    data: totalPageOnlyCntData,
    loading: totalPageOnlyCntLoading,
    refetch: totalPageOnlyCntRefetch,
  } = useQuery(GET_FREE2_TOTALPAGE_ONLY_CNT, {
    variables: {
      searchValue,
      limit,
    },
  });
  /////////////////  USE MUTATION    //////////////
  const [createFree2] = useMutation(CREATE_FREE2, {
    variables: {
      title: value.title,
      description: value.desc,
      imagePath,
    },
  });

  const addFree2Board = async () => {
    if (value.title === "") {
      toast.error("FREE TYPE IS MUST!");
      return;
    }
    if (value.desc === "") {
      toast.error("FREE TYPE IS MUST!");
      return;
    }

    const { data } = await createFree2();
    if (data.createFree2) {
      toast.info("게시글이 추가되었습니다");
      free2DatumRefetch();
      setValue("");
      _isDialogOpenToggle();
    } else {
      toast.error("다시 시도해주세요");
    }
  };
  //////////////////  USE EFECT     //////////////
  useEffect(() => {
    free2DatumRefetch();
    free2PageRefetch();
    if (free2PageDatum && !pages) {
      const temp = [];

      for (let i = 0; i < free2PageDatum.getFree2TotalPage; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [free2PageDatum]);

  useEffect(() => {
    free2DatumRefetch();
    totalPageRefetch();
    totalPageOnlyCntRefetch();
  }, []);

  const _isDialogOpenToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const createFree2Handler = () => {
    // const key = sessionStorage.getItem("login");

    // if (key) {
    _isDialogOpenToggle();
    // } else {
    //   toast.info("로그인 후 이용하실 수 있습니다.");
    //   history.push("/signin");
    // }
  };
  return (
    <MM12Presenter
      free2Datum={free2Datum && free2Datum.getFree2Board}
      currentPage={currentPage}
      pages={pages}
      limit={limit}
      setCurrentPage={setCurrentPage}
      totalPage={totalPageData && totalPageData.getFree2TotalPage}
      totalCnt={
        totalPageOnlyCntData && totalPageOnlyCntData.getFree2TotalPageOnlyCnt
      }
      fileChangeHandler={fileChangeHandler}
      _isDialogOpenToggle={_isDialogOpenToggle}
      addFree2Board={addFree2Board}
      isDialogOpen={isDialogOpen}
      _valueChangeHandler={_valueChangeHandler}
      prevAndNextPageChangeFree2Handler={prevAndNextPageChangeFree2Handler}
      moveLinkHandler={moveLinkHandler}
      changePageHandler={changePageHandler}
      _valueChangeHandler={_valueChangeHandler}
      createFree2Handler={createFree2Handler}
      valueTitle={value.title}
      valueDesc={value.desc}
      imagePath={imagePath}
    />
  );
};

export default MM12Container;
