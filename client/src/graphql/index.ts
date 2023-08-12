import { gql } from "@apollo/client";

export const GET_TWIXTS_LIKED = gql`
  query PostsLiked($page: Int!, $userId: String!) {
    getPosts(page: $page) {
      id
      content
      videoLinks
      imageLinks
      createdAt
      isLikedBy(userId: $userId)
      author {
        id
        username
        name
        photo
      }
    }
  }
`;

export const GET_TWIXTS = gql`
  query Posts($page: Int!) {
    getPosts(page: $page) {
      id
      content
      videoLinks
      imageLinks
      createdAt
      author {
        id
        username
        name
        photo
      }
    }
  }
`;
