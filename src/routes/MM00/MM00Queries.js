import { gql } from "apollo-boost";

export const GET_POPULAR = gql`
  query getPopular {
    getPopular {
      title
      description
    }
  }
`;
