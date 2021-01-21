import React from "react";
import {
  EmptyList,
  TableBody,
  TableBodyLIST,
  TableWrapper,
  TextInput,
  Wrapper,
  WholeWrapper,
  TableHead,
  TableHeadLIST,
  SearchWrapper,
  RsWrapper,
  PagenationWrapper,
  PagenationBtn,
  Pagenation,
  CommonButton,
} from "../../Components/CommonComponents";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Button = styled.button``;

const SearchInput = styled(TextInput)`
  position: relative;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  margin-right: 4px;
  &:hover ${SearchWrapper2} {
    opacity: 1;
    box-shadow: 0px 3px 5px solid #eee;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

const SearchWrapper2 = styled(Wrapper)`
  position: relative;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(67, 66, 88);
    background: none;
    color: rgb(67, 66, 88);
  }
  & svg {
    position: absolute;
    top: 5px;
    font-size: 18px;
  }
  &:hover svg {
    animation: ${SearchWrapper2} 0.5s forwards;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const MM12Presenter = ({
  free2Datum,
  pages,
  currentPage,
  limit,
  setCurrentPage,
  isDialogOpen,
  _isDialogOpenToggle,
  _valueChangeHandler,
  prevAndNextPageChangeFree2Handler,
  //   //   changeSearchValueHandler,
  //   //   changeFloorHandler,
  //   //   inputSearchValue,
  changePageHandler,
  moveLinkHandler,
  totalCnt,
  imagePath,
  addFree2Board,
  createFree2Handler,
  //   link,
  fileChangeHandler,
}) => {
  return (
    <WholeWrapper margin={`150px 0 0 0`} height={`100%`}>
      <RsWrapper>
        {/* SearchArea */}
        <Wrapper
          dr={`row`}
          al={`flex-start`}
          ju={`flex-start`}
          padding={`10px 0px`}
        >
          <SearchWrapper width={`auto`} dr={`row`}>
            <SearchInput
              type="text"
              width={`200px`}
              padding={`0px 5px 0px 5px`}
              placeholder="Search"
              //   onKeyDown={(e) => e.keyCode === 13 && changeSearchValueHandler()}
              //   {...inputSearchValue}
            />
          </SearchWrapper>
          <SearchWrapper2
            width={`30px`}
            height={`30px`}
            bgColor={`rgb(67, 66, 88)`}
            // onClick={changeSearchValueHandler}
          >
            <FaSearch />
          </SearchWrapper2>
        </Wrapper>
        {/* SearchAreaEnd */}

        <TableWrapper>
          <TableHead>
            <TableHeadLIST width={`100px`}>번호</TableHeadLIST>

            <TableHeadLIST
              fontWeight={`800`}
              width={`calc(100% - 100px - 160px - 100px)`}
              ju={`flex-start`}
            >
              제목
            </TableHeadLIST>

            <TableHeadLIST width={`160px`}>이름</TableHeadLIST>
            <TableHeadLIST width={`100px`}>작성일</TableHeadLIST>
          </TableHead>
        </TableWrapper>
        {free2Datum ? (
          free2Datum.length === 0 ? (
            <EmptyList>등록된 게시글이 없습니다.</EmptyList>
          ) : (
            free2Datum.map((data, idx) => {
              return (
                <TableBody key={idx} onClick={() => moveLinkHandler(data._id)}>
                  <TableBodyLIST width={`100px`}>
                    {totalCnt - (currentPage * limit + idx) + ""}
                  </TableBodyLIST>
                  <TableBodyLIST
                    width={`calc(100% - 100px - 160px - 100px)`}
                    ju={`flex-start`}
                  >
                    {data.title}
                  </TableBodyLIST>
                  <TableBodyLIST
                    fontWeight={`800`}
                    ju={`flex-end`}
                  ></TableBodyLIST>
                </TableBody>
              );
            })
          )
        ) : (
          <div>게시글이 없습니다.</div>
        )}
        {/* pageNation Area */}

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          {pages && pages.length > 0 && (
            <PagenationWrapper width={`auto`}>
              <PagenationBtn
                onClick={() =>
                  free2Datum &&
                  prevAndNextPageChangeFree2Handler(currentPage - 1)
                }
              >
                <IoIosArrowBack />
              </PagenationBtn>
              {pages.map((data) => {
                return (
                  <Pagenation
                    className={data === currentPage ? `active` : ``}
                    key={data}
                    onClick={() => changePageHandler(data)}
                  >
                    {data + 1}
                  </Pagenation>
                );
              })}
              <PagenationBtn
                onClick={() =>
                  free2Datum &&
                  prevAndNextPageChangeFree2Handler(currentPage + 1)
                }
              >
                <IoIosArrowForward />
              </PagenationBtn>
            </PagenationWrapper>
          )}
        </Wrapper>

        {/* pageNation AreaEnd */}
      </RsWrapper>

      <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
        <CommonButton
          width={`80px`}
          margin={`0px 10px 0px 0px`}
          onClick={() => createFree2Handler()}
          bgColor={`#55E6C1`}
        >
          글 작성
        </CommonButton>
      </Wrapper>

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
          게시글 추가
        </DialogTitle>
        <DialogContent>
          <Wrapper dr={`row`}>
            제목
            <TextInput
              name="title"
              // value={valueTitle}
              onChange={_valueChangeHandler}
            ></TextInput>
          </Wrapper>
          <Wrapper dr={`row`}>
            내용
            <TextInput
              name="desc"
              // value={valueDesc}
              onChange={_valueChangeHandler}
            ></TextInput>
          </Wrapper>
          <Wrapper>
            <Image src={imagePath}></Image>
            <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
            <FileLabel htmlFor="file-js">파일 선택</FileLabel>
          </Wrapper>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => addFree2Board()}>
            글쓰기
          </Button>
          <Button color="secondary" onClick={() => _isDialogOpenToggle()}>
            취소
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog Area */}
    </WholeWrapper>
  );
};

export default MM12Presenter;
