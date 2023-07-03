"use client"

import CardNavigate from "@elements/CardNavigate";
import Footer from "@elements/Footer";
import React from "react";
import { useSession } from "next-auth/react"
import CardProfile from "@elements/CardProfile";

const features = [
  { feature: "Webp Converter", text: "Unlimited attempt to try webp converter. " },
  { feature: "Colorize Monochrome", text: "Monochrome image to the colorful image.", },
  { feature: "Fix Resolution", text: "Set image to the great resolution we can do.", },
  { feature: "Prompt to Image", text: "Give our AI some sentance to generate image.", }
]

const page = () => {
  return (
    <main className="pt-20 text-white bg-page flex h-screen w-screen flex-col">
      <div style={{
        margin: "auto",
        display: "flex",
        height: "60%",
        width: "90%",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "space-evenly",
        alignContent: "space-evenly",
        flexDirection: "column"
      }}>
        {
          features.map((el, i) => <CardNavigate key={i} feature={el.feature} text={el.feature} bg={null} />)
        }
        <CardProfile />
        <CardNavigate feature="Your Collection" text={null} bg={null} />
      </div>
      <Footer />
    </main >
  );
};

export default page;
