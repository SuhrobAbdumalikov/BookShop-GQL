import { Route, Routes } from "react-router-dom";
import { AllBooksPage, HomePage, SinglePage } from "./components/pages";
import { SearchResultsPage } from "./components/pages/search/search";

export const AppRouter = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/all-books" Component={AllBooksPage} />
    <Route path="/all-books/:id" Component={SinglePage} />
    <Route path="/products" Component={SearchResultsPage} />
  </Routes>
);
