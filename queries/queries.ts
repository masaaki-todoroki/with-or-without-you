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
    $id: String!
    $email: String!
    $name: String!
    $nickname: String!
    $age: Int!
    $mobile: String!
    $line_id: String
    $x_username: String
  ) {
    insert_staff_one(
      object: {
        id: $id
        email: $email
        name: $name
        nickname: $nickname
        age: $age
        mobile: $mobile
        line_id: $line_id
        x_username: $x_username
      }
    ) {
      id
      email
      name
      nickname
      age
      mobile
      line_id
      x_username
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
    }
  }
`;
