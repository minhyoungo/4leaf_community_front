import { gql } from "apollo-boost";

export const GET_FREE2 = gql`
  query getFree2Board {
    getFree2 {
      _id
      title
      description
    }
  }
`;

export const GET_FREE2_DETAIL = gql`
  query getFree2Detail($id: String!) {
    getFree2Detail(id: $id) {
      _id
      title
      description
      createdAt
    }
  }
`;

export const GET_FREE2_TOTALPAGE = gql`
  query getFree2TotalPage($searchValue: String!, $limit: Int!) {
    getFree2TotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_FREE2_TOTAL_PAGE = gql`
  query getFree2TotalPage($limit: Int!, $searchValue: String!) {
    getFree2TotalPage(limit: $limit, searchValue: $searchValue)
  }
`;

export const GET_FREE2_TOTALPAGE_ONLY_CNT = gql`
  query getFree2TotalPageOnlyCnt($searchValue: String!, $limit: Int!) {
    getFree2TotalPageOnlyCnt(searchValue: $searchValue, limit: $limit)
  }
`;

export const CREATE_FREE2 = gql`
  mutation createFree2($title: String!, $description: String!) {
    createFree2(title: $title, description: $description)
  }
`;

export const DELETE_FREE2 = gql`
  mutation deleteFree2($id: String!) {
    deleteFree2(id: $id)
  }
`;

export const UPDATE_FREE2 = gql`
  mutation updateFree2($id: String!, $title: String!, $description: String!) {
    updateFree2(id: $id, title: $title, description: $description)
  }
`;
export const GET_FREE2_NEXT_ID = gql`
  query getFree2NextId($id: String!) {
    getFree2NextId(id: $id) {
      _id
    }
  }
`;

export const GET_FREE2_BEFORE_ID = gql`
  query getFree2BeforeId($id: String!) {
    getFree2BeforeId(id: $id) {
      _id
    }
  }
`;
