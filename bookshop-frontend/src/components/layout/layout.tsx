import React, { useState } from "react";
import { Props } from "./types";
import { GiBookAura } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";

export const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const handleSearchBooks = () => {
    navigate(`/products?query=${value}`);
    setValue("");
  };

  return (
    <>
      <div className="flex items-center w-full z-50 fixed bg-white justify-between shadow-xl px-[100px] py-2 shad border-b-2 border-b-main-color">
        <Link className="flex items-center gap-1 cursor-pointer" to="/">
          <GiBookAura size={60} className="text-main-color" />
          <p className="text-[27px] font-bold text-[#007200]">BookShop</p>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center relative">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="border-2 rounded-full py-1 px-3 pr-12 w-[500px] focus:outline-none placeholder:text-gray-500"
              placeholder="Search for books by title / author / categories"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleSearchBooks();
                }
              }}
            />
            <button
              className="absolute right-0 h-full w-[40px] bg-main-color rounded-e-full pl-2"
              onClick={handleSearchBooks}
            >
              <IoSearchOutline className="right-0 h-full w-[20px] text-white" />
            </button>
          </div>
          {/* <div className="flex items-center gap-3">
            <div className="relative cursor-pointer">
              <IoIosHeartEmpty size={30} className="text-second-color" />
              {has && (
                <span className="absolute -top-1 -right-2 bg-red-500 rounded-full flex items-center justify-center text-white w-5 h-5 text-[10px]">
                  0
                </span>
              )}
            </div>
            <div className="relative cursor-pointer">
              <PiShoppingCartSimple size={30} className="text-second-color" />
              {has && (
                <span className="absolute -top-1 -right-2 bg-red-500 rounded-full flex items-center justify-center text-white w-5 h-5 text-[10px]">
                  0
                </span>
              )}
            </div>
          </div> */}
        </div>
      </div>
      <div className="pt-[77px]">{children}</div>
    </>
  );
};
