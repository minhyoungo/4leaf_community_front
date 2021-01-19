import React from "react";
import styled from "styled-components";
import { withResizeDetector } from "react-resize-detector";
import CircularIndeterminate from "../../Components/loading/CircularIndeterminate";
import {
  TableHead,
  TableHeadLIST,
  EmptyList,
  TableBody,
  TableBodyLIST,
  TableWrapper,
} from "../../Components/CommonComponents";

const WholeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.div`
  width: 45%;
  height: 80vh;
  margin: 10px;
`;

const TitleArea = styled.div`
  font-size: 18px;
  font-weight: 600;

  width: 80%;
  border-bottom: 5px solid #4a56a8;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubWrapper = styled.div`
  width: 35%;
  height: 80vh;
  margin: 10px;
`;

const MM00Presenter = ({ noticeDatum, totalCnt, currentPage, limit }) => {
  return (
    <WholeWrapper width={`100%`} height={`500px`}>
      <TableWrapper>
        <TitleArea>게시판</TitleArea>
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

        {noticeDatum ? (
          noticeDatum.length === 0 ? (
            <EmptyList>등록된 게시글이 없습니다.</EmptyList>
          ) : (
            noticeDatum.map((data, idx) => {
              return (
                <TableBody
                  key={data._id}
                  onClick={() => moveLinkHandler(data._id)}
                >
                  <TableBodyLIST width={`100px`}>
                    {totalCnt - (currentPage * limit + idx) + ""}
                  </TableBodyLIST>
                  <TableBodyLIST
                    fontWeight={`800`}
                    width={`calc(100% - 100px - 160px - 100px)`}
                    ju={`flex-start`}
                  >
                    {/* {data && data.title.length > 90
                      ? data.title.substring(0, 90) + `…`
                      : data.title} */}
                    {data.title}
                  </TableBodyLIST>
                  <TableBodyLIST width={`160px`}>익명</TableBodyLIST>
                  <TableBodyLIST width={`100px`}>
                    {/* {data.createdAt.substring(0, 13)} */}
                    {data.createdAt}
                    {/* {console.log(data.createdAt)} */}
                  </TableBodyLIST>
                </TableBody>
              );
            })
          )
        ) : (
          <CircularIndeterminate />
        )}
      </TableWrapper>
    </WholeWrapper>
  );
};
export default withResizeDetector(MM00Presenter);
