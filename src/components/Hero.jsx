import Section from "./Section";
import lossless from "../assets/hero/lossless";

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
          <div className="relative z-1 padding-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounted-t-[0.9rem]" />
            </div>
            <img src={lossless} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
