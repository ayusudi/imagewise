import React from "react";
import CardNavigate from "@elements/CardNavigate";
import CardProfile from "@elements/CardProfile";
import Footer from "@elements/Footer";

interface PageProps {
  params: {
    feature: string;
  };
}
interface State {
  img: string,
  title: string,
  text: string
}

const page: React.FC<PageProps> = ({ params: { feature } }) => {
  const paths: string[] = ["fix-resolution", "colorize", "prompt-to-image", "webp-converter"];
  const state: Record<string, State> = {
    "fix-resolution": { img: "/icons/magic.png", title: "Fix Resolution", text: "AI will fix the image to the great resolution we can do." },
    colorize: { img: "/icons/colorize.png", title: "Colorize Monochrome", text: "Upload monochrome image then our AI set the color." },
    "prompt-to-image": { img: "/icons/generate.png", title: "Prompt to Image", text: "Give our AI some sentance to generate image." },
    "webp-converter": { img: "/icons/webp.png", title: "Webp Converter", text: "Unlimited attempt to try our webp converter feature. " }
  };

  if (paths.includes(feature)) {
    const { title, img, text } = state[feature]
    return (
      <main className="pt-20 text-white bg-page flex h-min-screen md:h-screen w-screen flex-col">
        <div className="lg:w-875 w-11/12 max-w-1260 lg:h-400 flex lg:flex-col flex-col-reverse m-auto items-center  md:items-center lg:flex-wrap content-between justify-between gap-4 lg:gap-0 lg:py-0 py-10" >
          <div className=" lg:w-2/3 md:w-5/6 flex-col md:flex-row flex h-full lg:pr-4 md:flex-wrap content-between justify-between gap-4 md:gap-0 lg:gap-4">
            <div className="dashbox flex rounded-xl  w-full h-full">
              <form method="POST" action={"/api/features/" + feature} className="py-2 flex flex-col justify-around items-center bg-gradfeatureblue bg-shrink bg-no-repeat text-white rounded-xl min-h-400 w-64 md:w-full h-full">
                <img src={img} alt={feature} width={45} height={45} style={{ objectFit: "contain" }} />
                <h1 className="font-pro text-xl md:text-3xl font-bold">{title}</h1>
                <p className="text-center">{text}</p>
                <div className="flex flex-col gap-2 w-full items-center">
                  <div className="w-3/4 bg-gray-200 py-1 flex items-between">
                    <input type="file" className="flex-1 text-black " />
                    <div className="w-1/4 bg-white hidden md:block">
                    </div>
                  </div>
                  <p className="text-bolder text-pro">Or</p>
                  <input name="url_image" type="text" className="w-3/4 py-1 pl-2 text-black bg-white rounded" />
                </div>
                <button type="submit" className="h-9 w-24 bg-white rounded-3xl items-center justify-around flex flex-row">
                  <p className="text-pro text-black text-sm">Submit</p>
                  <img src="/circle.png" alt="" height={30} width={30} style={{ objectFit: "contain" }} />
                </button>
              </form>
            </div>
          </div>
          <div className="lg:order-6 md:w-full lg:w-auto md:flex md:justify-center" >
            <CardNavigate feature="Your Collection" text={null} bg={null} url={null} />
          </div >
          <CardProfile />
        </div>
        <Footer />
      </main >
    );
  }
  // 381.59

  // Return a fallback or error page if the feature is not found
  return (
    <main>
      <h1>Feature not found</h1>
    </main>
  );
};


export default page;
