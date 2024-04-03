import { Link } from "react-router-dom";
import { BookCard } from "@/components/common";
import { BookProps } from "@/types/book";
import { useQuery } from "@apollo/client";
import { MdKeyboardBackspace, MdOutlineStar } from "react-icons/md";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { authorData } from "./mock";
import { FILTER_ALL } from "./gql";

export const AllBooksPage = () => {
  const [filterData, setFilterData] = useState<any>({
    author: null,
    category: null,
    rating: null,
  });

  const { data, loading } = useQuery(FILTER_ALL, {
    variables: {
      author: filterData.author,
      categories: filterData.category,
      rating: filterData.rating,
    },
  });

  if (loading) {
    return (
      <h1 className="flex items-center justify-center w-full text-[25px] text-second-color font-medium fixed bottom-8 h-full z-50">
        Loading...
      </h1>
    );
  }

  return (
    <div className="flex items-start gap-5 pr-[100px]">
      <div className="border-r-2 border-main-color w-[270px] h-full fixed shadow-2xl pl-[15px] pr-3">
        <Link
          to="/"
          className="flex items-center gap-1 pt-3 text-[#008000] cursor-pointer"
        >
          <MdKeyboardBackspace size={20} />
          <h2>Back to Home Page</h2>
        </Link>
        <div className="mt-5">
          <h2 className="text-[18px] font-medium text-[#004B23] mb-2">
            All Categories
          </h2>
          <RadioGroup
            onValueChange={(e) =>
              setFilterData((prev: any) => ({
                ...prev,
                category: e,
              }))
            }
            value={filterData.category}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="programming"
                id="r1"
              />
              <label htmlFor="r1" className="cursor-pointer">
                Programming
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="software engineering"
                id="r2"
              />
              <label htmlFor="r2" className="cursor-pointer">
                software engineering
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="science fiction"
                id="r3"
              />
              <label htmlFor="r3" className="cursor-pointer">
                Science Fiction
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="romance"
                id="r4"
              />
              <label htmlFor="r4" className="cursor-pointer">
                Romance
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="python"
                id="r5"
              />
              <label htmlFor="r5" className="cursor-pointer">
                Python
              </label>
            </div>
          </RadioGroup>
        </div>
        <hr className="my-4" />
        <>
          <h2 className="text-[18px] font-medium text-[#004B23] mb-2">
            Rating
          </h2>
          <RadioGroup
            className="flex flex-col items-start gap-1"
            onValueChange={(e) =>
              setFilterData((prev: any) => ({
                ...prev,
                rating: e,
              }))
            }
            value={filterData.rating}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="5"
                id="rating5"
              />
              <label htmlFor="rating5" className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <MdOutlineStar
                      key={index}
                      size={18}
                      className="text-[#FF8A00]"
                    />
                  );
                })}
                <span className="font-medium ml-2"> 5.0</span>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="4"
                id="rating4"
              />
              <label htmlFor="rating4" className="flex items-center">
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <MdOutlineStar
                      key={index}
                      size={18}
                      className="text-[#FF8A00]"
                    />
                  );
                })}
                {Array.from({ length: 5 - 4 }).map((_, index) => (
                  <MdOutlineStar
                    key={4 + index}
                    size={18}
                    className="text-gray-400"
                  />
                ))}
                <span className="font-medium ml-2"> 4.0</span>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                className="text-second-color border-second-color"
                value="3"
                id="rating3"
              />
              <label htmlFor="rating3" className="flex items-center">
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <MdOutlineStar
                      key={index}
                      size={18}
                      className="text-[#FF8A00]"
                    />
                  );
                })}
                {Array.from({ length: 5 - 3 }).map((_, index) => (
                  <MdOutlineStar
                    key={3 + index}
                    size={18}
                    className="text-gray-400"
                  />
                ))}
                <span className="font-medium ml-2"> 3.0</span>
              </label>
            </div>
          </RadioGroup>
        </>
        <hr className="my-4" />
        <>
          <h2 className="text-[18px] font-medium text-[#004B23] mb-2">
            Top Authors
          </h2>
          <div className="flex items-center flex-wrap gap-1">
            {authorData.map((author) => (
              <button
                key={author.id}
                className="border px-2 w-max rounded-full bg-[#00B207] text-white text-[15px]"
                onClick={() =>
                  setFilterData((prev: any) => ({
                    ...prev,
                    author: author.title,
                  }))
                }
              >
                {author.title}
              </button>
            ))}
          </div>
        </>
      </div>
      <div className="flex items-center justify-center w-full flex-wrap  gap-5 ml-[300px] my-6">
        {data?.filterByAll?.length !== 0 ? (
          data?.filterByAll?.map((book: BookProps) => (
            <div key={book.id} className="flex items-center flex-wrap">
              <BookCard {...book} />
            </div>
          ))
        ) : (
          <h1 className="text-[25px] font-medium text-second-color">
            Not found any kind of books !
          </h1>
        )}
      </div>
    </div>
  );
};
