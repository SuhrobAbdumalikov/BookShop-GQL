import { booksData } from "../../data.js";

export const deleteBook = (args) => {
  const idx = booksData.findIndex((book) => book.id == args.id);
  if (idx !== -1) {
    booksData.splice(idx, 1);
    return {
      message: "Book successfully deleted.",
    };
  } else {
    return {
      message: "Sorry! Book not found.",
    };
  }
};
