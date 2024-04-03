import { gql } from "@apollo/client";

export const SINGLE_BOOK = gql`
  query GetSingleBook($bookByIdId: ID) {
    bookById(id: $bookByIdId) {
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
