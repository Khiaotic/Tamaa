import React from "react";
import Section from "./Section";
import Heading from "./Heading";
// import benefits from "../";

const Content = () => {
  return (
    <Section id="content">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl"
          title="Check Out TAMA's Latest Content"
        />
        {/* <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div key={item.id}>
              <div>
                <h5>{item.title}</h5>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </Section>
  );
};

export default Content;
