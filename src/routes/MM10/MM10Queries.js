import { gql } from "apollo-boost";

export const VIEW_NOTICE = gql`
  query viewAllNotice {
    viewAllNotice {
      _id
      title
      description
      createdAt
    }
  }
`;

export const GET_NOTICEBOARD_DETAIL = gql`
  query getNoticeBoardDetail($id: String!) {
    getNoticeBoardDetail(id: $id) {
      _id
      title
      description
      createdAt
    }
  }
`;

export const CREATE_NOTICE = gql`
  mutation createNotice(
    $title: String!
    $description: String!
    $userId: String!
  ) {
    createNotice(title: $title, description: $description, userId: $userId)
  }
`;

export const UPDATE_NOTICE = gql`
  mutation updateNotice($id: String!, $title: String!, $description: String!) {
    updateNotice(id: $id, title: $title, description: $description)
  }
`;

export const DELETE_NOTICE = gql`
  mutation deleteNotice($id: String!) {
    deleteNotice(id: $id)
  }
`;

export const GET_NOTICE_TOTALPAGE = gql`
  query getNoticeBoardTotalPage($limit: Int!, $searchValue: String!) {
    getNoticeBoardTotalPage(limit: $limit, searchValue: $searchValue)
  }
`;

export const GET_NOTICEBOARD_TOTALPAGE = gql`
  query getNoticeBoardTotalPage($searchValue: String!, $limit: Int!) {
    getNoticeBoardTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_NOTICEBOARD_TOTALPAGE_ONLY_CNT = gql`
  query getNoticeBoardTotalPageOnlyCnt($searchValue: String!, $limit: Int!) {
    getNoticeBoardTotalPageOnlyCnt(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_NOTICEBOARD_NEXT_ID = gql`
  query getNoticeBoardNextId($id: String!) {
    getNoticeBoardNextId(id: $id) {
      _id
    }
  }
`;

export const GET_NOTICEBOARD_BEFORE_ID = gql`
  query getNoticeBoardBeforeId($id: String!) {
    getNoticeBoardBeforeId(id: $id) {
      _id
    }
  }
`;
