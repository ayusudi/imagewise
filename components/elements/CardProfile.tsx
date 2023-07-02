"use client"

import React from "react";
import { useSession } from "next-auth/react"

const CardProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="relative h-60 bg-gradientapp flex flex-col w-96 bg-shrink bg-no-repeat text-white text-sm rounded-2xl rounded-x p-5">
      <img
        style={{
          position: "absolute",
          left: "25%",
          width: 200,
          height: 200,
          margin: "auto",
          marginTop: -100,
          border: "8px solid #5A9BD7"
        }}
        className="rounded-full w-5 aspect-square object-contain" src={session?.user.image || ''} alt="" />
      <div style={{ marginTop: 110, display: "flex", gap: 8, flexDirection: "column" }}>
        <p className="text-base text-center">{session?.user.name || ''}</p>
        <div className="flex w-100 justify-between">
          <p className="text-base">{session?.user.userName || ''}</p>
          <p>0 / 3 Credits</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;