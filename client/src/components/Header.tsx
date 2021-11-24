import React from "react";

interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return <div className={"text-2xl text-center py-2 my-3"}>{text}</div>;
};