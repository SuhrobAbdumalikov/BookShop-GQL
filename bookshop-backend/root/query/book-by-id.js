import { booksData } from "../../data.js";

export const bookById = (args) => {
  return booksData.find((book) => book.id === Number(args.id));
};
