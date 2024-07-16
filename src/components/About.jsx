import React from "react";
import Section from "./Section";
import Heading from "./Heading";

const About = () => {
  return (
    <Section crosses id="about">
      <div className="container">
        <div className="flex justify-center items-center">
          <Heading title="ABOUT"/>
        </div>
      <div>
        <p className="font-nunito text-3xl sm:text-xl">"TAMA is a genre-bending artist who creates an unique soundscape where
            dreamy alternative embraces the edges of hip-hop/rap. Her music characterized by emotional depth and narratives
            that navigate through love, defiance, and self awareness. TAMA's lyrics resonate with her fans who reclaim their 
            emotions, space, and voice. TAMA's artistry is a testament to self empowerment and dreaming to its full potential."
        </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
