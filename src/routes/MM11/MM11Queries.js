import { gql } from "apollo-boost";

export const GET_FREE1 = gql`
  query getAllFree1 {
    getAllFree1 {
      _id
      title
      description
      createdAt
    }
  }
`;

export const GET_FREE1BOARD_DETAIL = gql`
  query getFree1BoardDetail($id: String!) {
    getFree1BoardDetail(id: $id) {
      _id
      title
      description
      createdAt
    }
  }
`;

export const CREATE_FREE1 = gql`
  mutation createFree1($title: String!, $description: String!) {
    createFree1(
      title: $title
      description: $description
      userId: "5fbf1da37f2dc780b7f5763b"
    )
  }
`;

export const UPDATE_FREE1 = gql`
  mutation updateFree1($id: String!, $title: String!, $description: String!) {
    updateFree1(id: $id, title: $title, description: $description)
  }
`;

export const DELETE_FREE1 = gql`
  mutation deleteFree1($id: String!) {
    deleteFree1(id: $id)
  }
`;

export const GET_FREE1_TOTALPAGE = gql`
  query getFree1BoardTotalPage($limit: Int!, $searchValue: String!) {
    getFree1BoardTotalPage(limit: $limit, searchValue: $searchValue)
  }
`;

export const GET_FREE1BOARD_TOTALPAGE = gql`
  query getFree1BoardTotalPage($searchValue: String!, $limit: Int!) {
    getFree1BoardTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_FREE1BOARD_TOTALPAGE_ONLY_CNT = gql`
  query getFree1BoardTotalPageOnlyCnt($searchValue: String!, $limit: Int!) {
    getFree1BoardTotalPageOnlyCnt(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_FREE1BOARD_NEXT_ID = gql`
  query getFree1BoardNextId($id: String!) {
    getFree1BoardNextId(id: $id) {
      _id
    }
  }
`;

export const GET_FREE1BOARD_BEFORE_ID = gql`
  query getFree1BoardBeforeId($id: String!) {
    getFree1BoardBeforeId(id: $id) {
      _id
    }
  }
`;
