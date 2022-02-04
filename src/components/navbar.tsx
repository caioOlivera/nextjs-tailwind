import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }: any) => {
  return (
    <div className="flex items-center justify-center w-8/10 h-10 bg-slate-800 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full flex items-center justify-evenly pr-8 md:flex hidden">
        <Link href="/">About me</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
