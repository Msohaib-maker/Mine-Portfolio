"use client";

import React from "react";

type ButtonProps = {
  handleClick: () => void;
};
export default function Button({ handleClick }: ButtonProps) {
  return (
    <button
      className="p-2 bg-white rounded-md border border-white transform transition-transform duration-200 hover:scale-110"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 25 25"
      >
        <path d="M16 20v-4H1V9h15V5l8 7.5z" fill="black" />
      </svg>
    </button>
  );
}
