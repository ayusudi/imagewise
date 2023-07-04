"use client"

import React from "react";
import { useSession } from "next-auth/react"

const CardProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-16 lg:mt-0 w-64 md:h-52 md:w-5/6 relative bg-gradientapp flex justify-content-center flex-col lg:w-96 sm:h-60 lg:h-60 bg-shrink bg-no-repeat text-white text-sm rounded-2xl rounded-x p-5">
      <img
        style={{
          top: "-100px",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          border: "8px solid #5A9BD7",
          width: 200,
        }}
        className="rounded-full m-auto aspect-square object-contain flex justify-center" src={session?.user.image || ''} alt="" />
      <div style={{ display: "flex", gap: 8, flexDirection: "column", paddingTop: 95 }}>
        <p className="text-base text-center">{session?.user.name || ''}</p>
        <div className="flex w-100 justify-between">
          <p className="text-base">{session?.user.userName || ''}</p>
          <p>0 / 3 Credits</p>
        </div>
      </div>
    </div >
  );
};

export default CardProfile;