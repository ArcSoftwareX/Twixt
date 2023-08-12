/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FilteredPost = {
  __typename?: 'FilteredPost';
  author: FilteredUser;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  imageLinks?: Maybe<Array<Scalars['String']['output']>>;
  isLikedBy: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  videoLinks?: Maybe<Array<Scalars['String']['output']>>;
};


export type FilteredPostIsLikedByArgs = {
  userId: Scalars['String']['input'];
};

export type FilteredUser = {
  __typename?: 'FilteredUser';
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: FilteredPost;
  postAction: Scalars['String']['output'];
};


export type MutationCreatePostArgs = {
  post: PostInput;
};


export type MutationPostActionArgs = {
  action: PostAction;
  postId: Scalars['Int']['input'];
  token: Scalars['String']['input'];
};

export enum PostAction {
  Like = 'LIKE',
  RemoveLike = 'REMOVE_LIKE'
}

export type PostInput = {
  content: Scalars['String']['input'];
  imageLinks?: InputMaybe<Array<Scalars['String']['input']>>;
  videoLinks?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  getPost?: Maybe<FilteredPost>;
  getPosts: Array<FilteredPost>;
  getUser?: Maybe<FilteredUser>;
  userAction: Scalars['String']['output'];
};


export type QueryGetPostArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPostsArgs = {
  page: Scalars['Int']['input'];
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};


export type QueryUserActionArgs = {
  action: UserAction;
  userId: Scalars['String']['input'];
};

export enum UserAction {
  Follow = 'FOLLOW',
  Mute = 'MUTE',
  Unfollow = 'UNFOLLOW',
  Unmute = 'UNMUTE'
}

export type PostsLikedQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
}>;


export type PostsLikedQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'FilteredPost', id: number, content: string, videoLinks?: Array<string> | null, imageLinks?: Array<string> | null, createdAt?: string | null, isLikedBy: boolean, author: { __typename?: 'FilteredUser', id: string, username: string, name: string, photo?: string | null } }> };

export type PostsQueryVariables = Exact<{
  page: Scalars['Int']['input'];
}>;


export type PostsQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'FilteredPost', id: number, content: string, videoLinks?: Array<string> | null, imageLinks?: Array<string> | null, createdAt?: string | null, author: { __typename?: 'FilteredUser', id: string, username: string, name: string, photo?: string | null } }> };


export const PostsLikedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsLiked"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"videoLinks"}},{"kind":"Field","name":{"kind":"Name","value":"imageLinks"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isLikedBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]}}]}}]} as unknown as DocumentNode<PostsLikedQuery, PostsLikedQueryVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"videoLinks"}},{"kind":"Field","name":{"kind":"Name","value":"imageLinks"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;