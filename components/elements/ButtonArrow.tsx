import React from "react";

const ButtonArrow = () => {
  return (
    <button className="flex text-sky-800 font-bold bg-white text-sm rounded-3xl p-1 font-pro w-36 justify-center items-center gap-1">
      <p>Try It Now!</p>
      <img src="icons/arrow.png" className="object-contain aspect-square h-10 w-auto" alt="" />
    </button>
  )
};

export default ButtonArrow;