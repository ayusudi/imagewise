"use client"

import CardNavigate from "@elements/CardNavigate";
import Footer from "@elements/Footer";
import React from "react";
import CardProfile from "@elements/CardProfile";

const features = [
  { feature: "Webp Converter", text: "Unlimited attempt to try webp converter. " },
  { feature: "Colorize Monochrome", text: "Monochrome image to the colorful image.", },
  { feature: "Fix Resolution", text: "Set image to the great resolution we can do.", },
  { feature: "Prompt to Image", text: "Give our AI some sentance to generate image.", }
]

const page = () => {
  return (
    <main className="pt-20 text-white bg-page flex h-min-screen md:h-screen w-screen flex-col">
      <div className="lg:w-875 w-11/12  lg:h-3/5 flex lg:flex-col flex-col-reverse m-auto items-center sm:items-center md:items-start lg:flex-wrap content-evenly justify-evenly gap-4 lg:gap-0 lg:py-0 py-10" >
        <div className="lg:w-2/3 md:w-full flex flex-col md:flex-row flex-wrap h-full md:justify-center sm:justify-around lg:justify-around content-evenly gap-4 lg:gap-0">
          {
            features.map((el, i) => <CardNavigate key={i} feature={el.feature} text={el.feature} bg={null} />)
          }
        </div>
        <div className="md:mt-0 lg:w-1/3 md:w-full w-5/6 flex flex-col justify-evenly h-full lg:items-between items-center gap-4 lg:gap-0">
          <CardProfile />
          <CardNavigate feature="Your Collection" text={null} bg={null} />
        </div>

      </div>
      <Footer />
    </main >
  );
};

export default page;
