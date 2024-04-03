import { booksData } from "../../data.js";

export const filterByAll = (args) => {
  let result = [...booksData];
  if (args.author) {
    const filterAuthor = result.filter((book) =>
      book.author.toLowerCase().includes(args.author.trim().toLowerCase())
    );
    result = filterAuthor;
  }

  if (args.categories) {
    const filterCategory = result.filter((book) =>
      book.categories
        .toLowerCase()
        .includes(args.categories.trim().toLowerCase())
    );
    result = filterCategory;
  }

  if (args.rating) {
    const filterRating = result.filter((book) =>
      book.rating.toLowerCase().includes(args.rating.trim().toLowerCase())
    );
    result = filterRating;
  }

  return result;
};
