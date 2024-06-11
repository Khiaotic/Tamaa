import Section from "./Section";
import lossless from "../assets/hero/lossless.png";
import tamaBackground from "../assets/hero/tama-background.jpg";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffest="lg:translate-y-[5.25rem]"
      customPadding
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">Manifesting Lyrical Dreams into A Reality</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            sub heading sub heading subheading blah blah blah idk what she wants
            to say here yet
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 padding-0.5 rounded-2xl ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="rounted-t-[0.9rem]" />
            </div>

            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
              <img
                className="relative w-full transition-colors "
                width={1024}
                height={490}
                src={lossless}
                href=""
                alt="lastest music video"
              />
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
        </div>
      </div>
    </Section>
  );
};

export default Hero;
