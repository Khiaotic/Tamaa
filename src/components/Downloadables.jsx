import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import TamaSketchyGif from "../../public/TamaDownloads/tamasketchygif.gif";
import TamaLogoNameSide from "../../public/TamaDownloads/tamaLogoNameSide.png";
import TamaLogoNameMiddle from "../../public/TamaDownloads/tamaLogoNameMiddle.png";
import TamaHero from "../../public/TamaDownloads/TamaHero.jpg";

const downloadables = () => {
  return (
    <Section crosses id="assets">
      <div className="container ">
        <div className="flex justify-center items-center">
          <Heading
            title="Downloadable Assets"
            text="assets for content creation {created by KHIAOTIC}"
          />
        </div>

        <div className="relative">
          <div className="bg-blue-600 relative z-1 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 p-8 border border-n-[1/10] rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {[
              {
                src: TamaSketchyGif,
                alt: "Tama Sketchy Gif",
                width: 300,
                height: 300,
                name: "tamasketchygif.gif",
              },
              {
                src: TamaLogoNameSide,
                alt: "Tama Logo Side",
                width: 800,
                height: 800,
                name: "tamaLogoNameSide.png",
              },
              {
                src: TamaLogoNameMiddle,
                alt: "Tama Logo Middle",
                width: 800,
                height: 800,
                name: "tamaLogoNameMiddle.png",
              },
              {
                src: TamaHero,
                alt: "TamaHero",
                width: 800,
                height: 800,
                name: "TamaHero.jpg",
                colspan: 2,
                rowSpan: 2,
              },
            ].map(({ src, alt, width, height, name, colSpan, rowSpan }) => (
              <div
                key={name}
                className="{`flex items-center justify-center relative ${colSpan ? `col-span-${colSpan} ` : ``}${rowSpan ? `row-span-${rowSpan} ` : ``}`}"
              >
                <a href={src} download={name} className="group">
                  <img
                    src={src}
                    alt={alt}
                    className="object-contain max-w-full h-auto"
                    width={width}
                    height={height}
                  />
                  <div className="absolute inset=0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-white font-nunito bg-pink-400 px-4 py-2 rounded">
                      DOWNLOAD
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default downloadables;
