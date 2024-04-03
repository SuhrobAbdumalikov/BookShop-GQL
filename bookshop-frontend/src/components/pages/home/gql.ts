import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      subtitle
      author
      published
      pages
      description
      rating
      cost
      categories
    }
  }
`;
