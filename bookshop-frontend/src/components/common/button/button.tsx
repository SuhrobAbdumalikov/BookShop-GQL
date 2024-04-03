import React from "react";
import { Props } from "./types";
import { cn } from "@/lib/utils";

export const Button: React.FC<Props> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={cn(
      "border-2 border-main-color px-5 rounded-full py-1 transition-colors duration-200 ease-in-out hover:bg-main-color hover:text-white",
      className
    )}
  >
    {children}
  </button>
);
