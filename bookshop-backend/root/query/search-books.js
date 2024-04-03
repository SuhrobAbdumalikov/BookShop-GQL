import { booksData } from "../../data.js";

export const searchBooks = (args) => {
  return booksData.filter((book) => {
    const titleMatch =
      args.title &&
      book.title.toLowerCase().includes(args.title.trim().toLowerCase());
    const authorMatch =
      args.author &&
      book.author.toLowerCase().includes(args.author.trim().toLowerCase());
    const categoriesMatch =
      args.categories &&
      book.categories
        .toLowerCase()
        .includes(args.categories.trim().toLowerCase());

    return titleMatch || authorMatch || categoriesMatch;
  });
};
