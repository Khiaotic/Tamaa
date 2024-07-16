import Section from "./Section";
import lossless from "../assets/hero/lossless.png";
import tamaBackground from "../assets/hero/tama-background.jpg";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffest="lg:translate-y-[5.25rem]"
      customPadding
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[80rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 font-bebas mb-6">Lyrical Dreams into A Reality</h1>
          <p className="body-1 max-w-3xl font-nunito mx-auto mb-6 text-n-2 lg:mb-8">
          👇🏾 CLICK THE IMAGE TO SEE MY NEW MUSIC VIDEO 👇🏾
          </p>
        </div>
        <div className="relative max-w-[50rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 padding-0.5 rounded-2xl ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="rounted-t-[0.9rem]" />
            </div>

            <div className="aspect-16/9] rounded-b-[0.9rem] overflow-hidden md:aspect-[16/9] lg:aspect-[16/9] ">
              <a
              href="">
              <img
                className="relative w-full transition-colors "
                width={1024}
                height={576}
                src={lossless}
                href=""
                alt="lastest music video"
                />
                </a>
                
            </div>
          </div>
        </div>
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] blur">
          <img
            src={tamaBackground}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />
          <ScrollParallax isAbsolutelyPositioned>
            <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl xl:flex"></ul>
          </ScrollParallax>
        </div>
      </div>
      {/* <Gradient /> */}
      <BackgroundCircles />
    </Section>
  );
};

export default Hero;
