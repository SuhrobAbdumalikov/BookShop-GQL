import React from "react";
import { Link } from "react-router-dom";

import { BookProps } from "@/types/book";
import { Button } from "..";

export const BookCard: React.FC<BookProps> = ({ title, cost, author, id }) => {
  const handleBuyBook = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    alert("Please pay from your credit to buy this book !");
  };

  return (
    <Link to={`/all-books/${id}`}>
      <div className="w-[230px] h-[320px] border-2 border-main-color relative rounded-[5px] cursor-pointer">
        <div className="w-full h-[200px] rounded-t-[5px] bg-main-color"></div>
        <div className="p-2 flex flex-col items-center">
          <h2 className="text-[14px] font-bold truncate w-52">{title}</h2>
          <div className="flex items-center justify-between w-full py-2">
            <p className="text-gray-500 text-[14px] italic truncate w-[110px]">
              {author}
            </p>
            <p className="text-red-500 font-medium">
              price: <span className="text-black font-mono">{cost}$</span>
            </p>
          </div>
          <Button className="w-full" onClick={(e: any) => handleBuyBook(e)}>
            Buy book
          </Button>
        </div>
        {/* <div className="absolute top-3 right-3 bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">
          <IoIosHeartEmpty size={19} className="cursor-pointer" />
        </div> */}
      </div>
    </Link>
  );
};
