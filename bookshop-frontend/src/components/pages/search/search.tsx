import { useQuery } from "@apollo/client";
import { useLocation, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { BookProps } from "@/types/book";
import { BookCard } from "@/components/common";
import { LuSearchX } from "react-icons/lu";
import { SEARCH_RESULT } from "./gql";

export const SearchResultsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const { data } = useQuery(SEARCH_RESULT, {
    variables: { title: query, author: query, categories: query },
  });

  return (
    <div className="px-[100px] mt-5">
      <Link
        to="/"
        className="flex items-center gap-1 pt-3 text-[#008000] cursor-pointer"
      >
        <MdKeyboardBackspace size={20} />
        <h2>Back to Home</h2>
      </Link>
      <div className=" mt-5">
        {data?.searchBook.length !== 0 ? (
          <div className="flex items-start flex-wrap gap-5">
            {data?.searchBook?.map((book: BookProps) => (
              <BookCard {...book} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full pt-10 text-[50px] text-second-color">
            <LuSearchX size={100} />
            <h3>Not Found!</h3>
          </div>
        )}
      </div>
    </div>
  );
};
