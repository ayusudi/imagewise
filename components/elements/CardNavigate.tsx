import React from "react";
import ButtonArrow from "./ButtonArrow";

const CardFeatureNavigate = ({ feature, text, bg }: { feature: string | null, text: string | null, bg: string | null }) => {
  if (!bg) bg = "bg-gcardfeature flex gap-3"
  if (feature == "Your Collection") {
    return (
      <div className="w-60 bg-gradientapp bg-shrink bg-no-repeat lg:w-96 flex-col md:flex-row md:w-5/6 rounded-xl justify-center md:justify-between md:items-center items-start flex px-4" style={{ height: 98, gap: 6 }}>
        <h1 className="font-pro text-xl">Your Collection</h1>
        <button className="flex text-sky-800 font-bold bg-white text-sm rounded-3xl p-0.5 font-pro w-36 justify-center items-center gap-1">
          <p>Try It Now!</p>
          <img src="icons/arrow.png" className="object-contain aspect-square h-10 w-auto" alt="" />
        </button>
      </div>
    )
  }
  return (
    <div className={bg + " w-60 p-5 lg:w-96 md:w-2/5  flex-col rounded-xl"}>
      <h1 className="font-pro text-2xl">{feature}</h1>
      {
        text ? <p className="text-base">{text}</p> : <></>
      }
      <ButtonArrow />
    </div>
  );
};

export default CardFeatureNavigate;