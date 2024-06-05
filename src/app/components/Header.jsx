import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b-2 border-gray-300 bg-gray-100 w-full h-[115px] flex items-center justify-between px-[20px] py-[20px] ">
      <div className="w-[75px] h-[75px]">
        <img
          src="https://framerusercontent.com/images/CbSPyXMVIfZHAkc9RBEP7XhXEw.png"
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center">
        <nav className="flex gap-[20px]">
          <Link href="/">Home</Link>
          <Link href="/Blog">Blog</Link>
          <Link href="About">About</Link>
        </nav>
      </div>
    </div>
  );
}
