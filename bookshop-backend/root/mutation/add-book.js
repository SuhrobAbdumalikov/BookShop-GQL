import { booksData } from "../../data.js";

export const addBook = (args) => {
  booksData.push({ ...args });
  return {
    message: "New book added.",
  };
};
