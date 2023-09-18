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
    $nickname_in_english: String!
    $age: Int!
    $height: Int!
    $blood_type: String!
    $comment: String
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
        nickname_in_english: $nickname_in_english
        age: $age
        height: $height
        blood_type: $blood_type
        comment: $comment
        mobile: $mobile
        line_id: $line_id
        x_username: $x_username
        user_id: $user_id
      }
    ) {
      email
      name
      nickname
      nickname_in_english
      age
      height
      blood_type
      comment
      mobile
      line_id
      x_username
      user_id
      id
    }
  }
`;

export const REGISTER_STAFF_THUMBNAILS = gql`
  mutation RegisterStaffThumbnails(
    $objects: [staff_thumbnails_insert_input!]!
  ) {
    insert_staff_thumbnails(objects: $objects) {
      returning {
        staff_id
        thumbnail_url
      }
    }
  }
`;

export const GET_STAFF = gql`
  query GetStaff {
    staff {
      email
      name
      nickname
      nickname_in_english
      age
      height
      blood_type
      comment
      mobile
      line_id
      x_username
      user_id
    }
  }
`;
