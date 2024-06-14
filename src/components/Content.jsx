import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { IndexContent } from "../constants/IndexContent";
// import ytIcon from "../assets/benefits/yt_icon.svg"


const Content = () => {
  return (
    <Section id="content">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl"
          title="Check Out TAMA's Latest Content"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {IndexContent.map((item) => (
            <div 
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] 
             md:max-w-[24rem]"
             style={{
              backgroundImage:`url(${item.backgroundUrl})`,
             }}
            key={item.id}>
              
              <div className="relative z-2 flex flex-col min-h-[22rem] p-6 pointer-events-none">
                <h5 className="h2 text-center mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div>
                  
                    <img
                    src={item.thumbnail}
                    className="w-full h-auto"
                    width={800}
                    height={300}
                     />
                  
                </div>
                <div className="flex pl-6 items-center mt-auto">
               <svg id="a" xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 192 192">
               <path d="M180.32,53.36c-2.02-7.62-7.99-13.62-15.56-15.66-13.73-3.7-68.76-3.7-68.76-3.7,0,0-55.04,0-68.76,3.7-7.57,2.04-13.54,8.04-15.56,15.66-3.68,13.81-3.68,42.64-3.68,42.64,0,0,0,28.82,3.68,42.64,2.02,7.62,7.99,13.62,15.56,15.66,13.73,3.7,68.76,3.7,68.76,3.7,0,0,55.04,0,68.76-3.7,7.57-2.04,13.54-8.04,15.56-15.66,3.68-13.81,3.68-42.64,3.68-42.64,0,0,0-28.82-3.68-42.64Z" fill="red" strokeWidth="0"/>
               <polygon points="78 122.17 124 96 78 69.83 78 122.17" fill="#fff" strokeWidth="0"/>
               </svg>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Content;
