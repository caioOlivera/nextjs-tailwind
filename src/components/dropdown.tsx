import React from "react";
import Link from "next/link";

const dropdown = ({ isOpen, toggle }: any) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link href="/">About me</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Contact</Link>
    </div>
  );
};

export default dropdown;
