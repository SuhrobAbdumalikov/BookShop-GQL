import { MouseEventHandler } from "react";

export interface Props {
  children: string;
  className?: string;
  onClick?: (e: any) => void;
}
