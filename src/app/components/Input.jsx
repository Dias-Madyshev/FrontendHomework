import React from "react";

export default function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-lg w-full sm:w-[300px] lg:w-[390px] h-[73px] p-2 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2"
    />
  );
}
