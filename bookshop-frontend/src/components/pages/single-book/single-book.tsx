import { Button } from "@/components/common";
import { useQuery } from "@apollo/client";
import { MdOutlineStar } from "react-icons/md";
import { MdKeyboardBackspace } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import { SINGLE_BOOK } from "./gql";

export const SinglePage = () => {
  const { id } = useParams();

  const { data: { bookById } = {}, loading } = useQuery(SINGLE_BOOK, {
    variables: { bookByIdId: id },
  });

  if (loading) {
    return (
      <h1 className="text-[25px] text-second-color font-medium fixed bottom-8 h-full">
        Loading...
      </h1>
    );
  }

  return (
    <div className="px-[100px] flex flex-col items-start gap-5 w-full">
      <Link
        to="/all-books"
        className="flex items-center gap-1 pt-3 text-[#008000] cursor-pointer"
      >
        <MdKeyboardBackspace size={20} />
        <h2>Back</h2>
      </Link>
      <div className="flex items-start gap-10">
        <div className="w-[400px] h-[520px] bg-main-color rounded-md"></div>
        <div className="w-[900px]">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-[40px] font-bold text-[#007200]">
              {bookById?.title}
            </h1>
            {bookById?.subtitle && (
              <p className="text-[20px] text-gray-600 font-medium">
                {bookById?.subtitle}
              </p>
            )}
            <p className="italic font-medium">
              Author:
              <span className="italic font-normal"> {bookById?.author}</span>
            </p>
          </div>
          <div className="flex items-center gap-3 my-2">
            <div className="flex items-center">
              {Array.from({ length: bookById?.rating }).map((_, index) => {
                return (
                  <span key={index}>
                    <MdOutlineStar size={18} className="text-[#FF8A00]" />
                  </span>
                );
              })}
            </div>
            {"•"}
            <p className="font-medium text-gray-500">5 reviews</p>
            {"•"}
            <p className="font-medium text-gray-500">
              pages:{" "}
              <span className="font-normal font-mono text-black">
                {bookById?.pages}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-5 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[#B3B3B3] text-[20px] font-mono line-through">
                $48.00
              </span>
              <span className="text-[#2C742F] text-[24px] font-medium font-mono">
                ${bookById?.cost}
              </span>
            </div>
            <p className="text-[#EA4B48] text-[14px] bg-[#EA4B481A] rounded-full px-2 py-[2px] font-medium">
              20% off
            </p>
          </div>
          <hr className="w-full" />
          <p className="text-gray-500 my-5">{bookById?.description}</p>
          <hr />
          <Button
            className="w-full my-5"
            onClick={() =>
              alert("Please pay from your credit to buy this book !")
            }
          >
            Buy this Book
          </Button>
          <hr />
          <div className="flex items-center gap-2 mt-5">
            <p className="font-medium">Categories:</p>
            <p className="text-gray-500 capitalize">{bookById.categories}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
