import { gql } from "apollo-boost";

export const RESIST_USER = gql`
  mutation registUser(
    # $notice: String!
    $email: String!
    $userName: String!
    $mobile: String!
  ) # $createdAt: String!
  {
    registUser(
      # notice: $notice
      email: $email
      userName: $userName
      mobile: $mobile
      # createdAt: $createdAt
    )
  }
`;
