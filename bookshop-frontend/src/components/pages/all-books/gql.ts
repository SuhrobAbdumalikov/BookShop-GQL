import { gql } from "@apollo/client";

export const FILTER_ALL = gql`
  query GetFilteredAll($author: String, $categories: String, $rating: String) {
    filterByAll(author: $author, categories: $categories, rating: $rating) {
      id
      author
      title
      cost
    }
  }
`;
