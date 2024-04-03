import { booksData } from "./data.js";
import { addBook } from "./root/mutation/add-book.js";
import { deleteBook } from "./root/mutation/delete-book.js";
import { editBook } from "./root/mutation/edit-book.js";
import { bookById } from "./root/query/book-by-id.js";
import { filterByAll } from "./root/query/filter-by-all.js";
import { searchBooks } from "./root/query/search-books.js";

export const resolvers = {
  Query: {
    books: () => booksData,
    bookById: (_, args) => bookById(args),
    searchBook: (_, args) => searchBooks(args),
    filterByAll: (_, args) => filterByAll(args),
  },

  Mutation: {
    addBook: (_, args) => addBook(args),
    deleteBook: (_, args) => deleteBook(args),
    editBook: (_, args) => editBook(args),
  },
};
