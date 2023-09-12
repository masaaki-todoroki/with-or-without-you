import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

export const CREATE_STAFF = gql`
  mutation CreateStaff(
    $email: String!
    $name: String!
    $nickname: String!
    $age: Int!
    $mobile: String!
    $line_id: String
    $x_username: String
    $user_id: String!
  ) {
    insert_staff_one(
      object: {
        email: $email
        name: $name
        nickname: $nickname
        age: $age
        mobile: $mobile
        line_id: $line_id
        x_username: $x_username
        user_id: $user_id
      }
    ) {
      email
      name
      nickname
      age
      mobile
      line_id
      x_username
      user_id
    }
  }
`;

export const GET_STAFF = gql`
  query GetStaff {
    staff {
      email
      name
      nickname
      age
      mobile
      line_id
      x_username
      user_id
    }
  }
`;
