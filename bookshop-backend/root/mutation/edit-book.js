import { booksData } from "../../data.js";

export const editBook = (args) => {
  const bookIdx = booksData.findIndex((book) => book.id === args.id);

  if (bookIdx !== -1) {
    booksData[bookIdx] = {
      id: booksData[bookIdx].id,
      author: args.author,
      title: args.title,
      subtitle: args.subtitle,
      published: args.published,
      description: args.description,
      pages: args.pages,
      rating: args.rating,
    };

    return {
      message: "Book successfully update.",
    };
  } else {
    return {
      message: "Sorry! Book not found.",
    };
  }
};
