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
    "\n  query PostsLiked($page: Int!, $userId: String!) {\n    getPosts(page: $page) {\n      id\n      content\n      videoLinks\n      imageLinks\n      createdAt\n      isLikedBy(userId: $userId)\n      author {\n        id\n        username\n        name\n        photo\n      }\n    }\n  }\n": types.PostsLikedDocument,
    "\n  query Posts($page: Int!) {\n    getPosts(page: $page) {\n      id\n      content\n      videoLinks\n      imageLinks\n      createdAt\n      author {\n        id\n        username\n        name\n        photo\n      }\n    }\n  }\n": types.PostsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PostsLiked($page: Int!, $userId: String!) {\n    getPosts(page: $page) {\n      id\n      content\n      videoLinks\n      imageLinks\n      createdAt\n      isLikedBy(userId: $userId)\n      author {\n        id\n        username\n        name\n        photo\n      }\n    }\n  }\n"): (typeof documents)["\n  query PostsLiked($page: Int!, $userId: String!) {\n    getPosts(page: $page) {\n      id\n      content\n      videoLinks\n      imageLinks\n      createdAt\n      isLikedBy(userId: $userId)\n      author {\n        id\n        username\n        name\n        photo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Posts($page: Int!) {\n    getPosts(page: $page) {\n      id\n      content\n      videoLinks\n      imageLinks\n      createdAt\n      author {\n        id\n        username\n        name\n        photo\n      }\n    }\n  }\n"): (typeof documents)["\n  query Posts($page: Int!) {\n    getPosts(page: $page) {\n      id\n      content\n      videoLinks\n      imageLinks\n      createdAt\n      author {\n        id\n        username\n        name\n        photo\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;