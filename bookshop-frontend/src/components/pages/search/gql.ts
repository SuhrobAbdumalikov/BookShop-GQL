import { gql } from "@apollo/client";

export const SEARCH_RESULT = gql`
  query GetSearchResult($title: String, $author: String, $categories: String) {
    searchBook(title: $title, author: $author, categories: $categories) {
      id
      title
      author
      cost
    }
  }
`;
