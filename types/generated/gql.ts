/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetUsers {\n    users {\n      id\n      name\n    }\n  }\n": types.GetUsersDocument,
    "\n  mutation CreateStaff(\n    $id: String!\n    $email: String!\n    $name: String!\n    $nickname: String!\n    $age: Int!\n    $mobile: String!\n    $line_id: String\n    $x_username: String\n  ) {\n    insert_staff_one(\n      object: {\n        id: $id\n        email: $email\n        name: $name\n        nickname: $nickname\n        age: $age\n        mobile: $mobile\n        line_id: $line_id\n        x_username: $x_username\n      }\n    ) {\n      id\n      email\n      name\n      nickname\n      age\n      mobile\n      line_id\n      x_username\n    }\n  }\n": types.CreateStaffDocument,
    "\n  query GetStaff {\n    staff {\n      email\n      name\n      nickname\n      age\n      mobile\n      line_id\n      x_username\n    }\n  }\n": types.GetStaffDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUsers {\n    users {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateStaff(\n    $id: String!\n    $email: String!\n    $name: String!\n    $nickname: String!\n    $age: Int!\n    $mobile: String!\n    $line_id: String\n    $x_username: String\n  ) {\n    insert_staff_one(\n      object: {\n        id: $id\n        email: $email\n        name: $name\n        nickname: $nickname\n        age: $age\n        mobile: $mobile\n        line_id: $line_id\n        x_username: $x_username\n      }\n    ) {\n      id\n      email\n      name\n      nickname\n      age\n      mobile\n      line_id\n      x_username\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStaff(\n    $id: String!\n    $email: String!\n    $name: String!\n    $nickname: String!\n    $age: Int!\n    $mobile: String!\n    $line_id: String\n    $x_username: String\n  ) {\n    insert_staff_one(\n      object: {\n        id: $id\n        email: $email\n        name: $name\n        nickname: $nickname\n        age: $age\n        mobile: $mobile\n        line_id: $line_id\n        x_username: $x_username\n      }\n    ) {\n      id\n      email\n      name\n      nickname\n      age\n      mobile\n      line_id\n      x_username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStaff {\n    staff {\n      email\n      name\n      nickname\n      age\n      mobile\n      line_id\n      x_username\n    }\n  }\n"): (typeof documents)["\n  query GetStaff {\n    staff {\n      email\n      name\n      nickname\n      age\n      mobile\n      line_id\n      x_username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;