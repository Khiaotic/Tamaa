import React from "react";
import Section from "./Section";
import Button from "./Button";
const collab = () => {
  return (
    <Section crosses>
      <div className="container ">
        <div className="max-w-[25rem] mx-auto">
          <h2 className=" text-blue-400 h2 font-bebas mb-4 md:mb-8">
            Want To Collaborate?
          </h2>
          <div className="flex justify-center items-start gap-4 ">
            <div className="relative flex justify center items-start gap-4 p-0.5 md:max-w-[24rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-500 rounded-md"
              ></div>
              {/* /////////////Gradient Start/////////////////// */}
              <div className="relative  p-6 rounded-md">
                <div className="mx-auto mb-10 w-full max-w-[550px] md:mb-14 ">
                  {/* ///////////////////FORM START///////////// */}
                  <form>
                    <div>
                      <label
                        for="name"
                        className="mb-2 block text-base font-medium "
                      >
                        Name
                      </label>
                      <input
                        className="w-full rounded-md bg-white py-3 px-6 text-base font-medium focus:shadow-md"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name or Artist Name"
                      />
                    </div>
                    <div className="mt-10">
                      <label
                        for="email"
                        className="mb-3 block text-base font-medium"
                      >
                        Email
                      </label>
                      <input
                        className="w-full rounded-md bg-white py-3 px-6 text-base font-medium focus:shadow-md"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@thisdomain.com"
                      />
                    </div>
                    <div className="mt-10">
                      <label
                        for="subject"
                        className="mb-3 block text-base font-medium"
                      >
                        Collaboration Subject
                      </label>
                      <input
                        className="w-full rounded-md bg-white py-3 px-6 text-base font-medium focus:shadow-md"
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your collaboration idea's subject"
                      />
                    </div>
                    <div className="mt-10">
                      <label
                        for="message"
                        className="mb-3 block text-base font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        className="w-full rounded-md bg-white py-3 px-6 text-base font-medium focus:shadow-md"
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Elaborate Your Thoughts and Ideas"
                      />
                    </div>
                  </form>
                  {/* ////////FORM END//////// */}
                </div>
                {/* //////////////SUBMIT BUTTON////////////////// */}
                <div className="flex items-center justify-center mt-6">
                  <Button>Submit</Button>
                </div>
                {/* //////Gradeint End///////////////// */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////SVG///////////// */}
      {/* <div className="flex items-center justify-center">
        <svg
          className="w-18 h-18 logo "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 219.2 161.1"
        >
          <path
            className="cls-3"
            d="M95.1,23.3c.9.5,1.3,1.7.7,2.7-7,11.6-22.8,18.9-33.6,19s-30.2-7.9-33.8-26.3c-.9-7-3.4-8.8,27.3-6.1,5.1.5,11.5,1.3,16.1,2.3,9.6,2.2,16.1,4.5,23.3,8.4Z"
          />
          <path
            className="cls-1"
            d="M36,10.7s-9.9-.8-17.6,3.3c-5.2,2.7,2.4,1.5,4.1,1.4s2.1.1,3.6.8-1.3.9-2.7,1.3-3.3,2-2.7,2.8,4.6-.9,6.3-.5,1.6,2,1.8.8-.8-6.5-.1-7.4,1.6-1.1,2.2-1.4,5.2-1.1,5.2-1.1Z"
          />
          <path
            className="cls-1"
            d="M27,10s6-.4,2.1-6.1,3.6.6,4.6,1.5,1.8,1.4,3,2,.6-1.2-.5-2.3-3.5-3.6-2.7-3.6,5.1,2.7,6.5,3.8,6,5.3,5.4,6-9-1.6-9.3-.8-3.1,0-3.1.7-6-1.2-6-1.2Z"
          />
          <path
            className="cls-1"
            d="M31.5,28.8c0,0-4.2-.5-5.8.1s-2.1,1.2-2.2,1.9-.1,2.5,1.1,1.6,1.7-1.3,2.2-.9,1.4.6,1.9.4.7-.8,1.2-.9,1.2-.2,1.4,0,.5.9-.3,1-1.2,0-1.8.7-1.3,1.2-2,1.3c-1.2.1-3.5-.6-2,1.4s5.1-.3,5.9-.6,1.2-.5,1.1-.1-.8.8-1.3,1.5-.7,1.8-.7,2.8.5,1.9,1.4,1.9,1.1-.3,1.2-1-.5-1.9.7-2.6,1.4,0,2.1-.5,1.4-.7,1.1-1.5-5.1-6.4-5.1-6.4Z"
          />
          <path
            className="cls-1"
            d="M63.4,14.3c-5.7-.7-13.9-1.3-15.9-1.4-2.4,2.7-3.2,5.5-3.2,9.4,0,8.6,7,15.5,15.5,15.5s15.5-7,15.5-15.5,0-3.7-1.2-6c-1.9-.5-6.4-1.5-10.8-2Z"
          />
          <circle className="cls-2" cx="73.7" cy="26.4" r="5" />
          <path
            className="cls-1"
            d="M43.6,10.5S24.9,5.9,21.1,1.5c-3.9-4.5-.6,3.1.7,5s3.5,4.5,5.9,5,16-.9,16-.9Z"
          />
          <path
            className="cls-3"
            d="M125.2,23.3c-.9.5-1.3,1.7-.7,2.7,7,11.6,22.8,18.9,33.6,19s30.2-7.9,33.8-26.3c.9-7,3.4-8.8-27.3-6.1-5.1.5-11.5,1.3-16.1,2.3-9.6,2.2-16.1,4.5-23.3,8.4Z"
          />
          <path
            className="cls-1"
            d="M184.3,10.7s9.9-.8,17.6,3.3-2.4,1.5-4.1,1.4-2.1.1-3.6.8,1.3.9,2.7,1.3,3.3,2,2.7,2.8-4.6-.9-6.3-.5-1.6,2-1.8.8.8-6.5.1-7.4-1.6-1.1-2.2-1.4-5.2-1.1-5.2-1.1Z"
          />
          <path
            className="cls-1"
            d="M193.3,10s-6-.4-2.1-6.1-3.6.6-4.6,1.5-1.8,1.4-3,2-.6-1.2.5-2.3,3.5-3.6,2.7-3.6-5.1,2.7-6.5,3.8-6,5.3-5.4,6,9-1.6,9.3-.8,3.1,0,3.1.7,6-1.2,6-1.2Z"
          />
          <path
            className="cls-1"
            d="M188.8,28.8c0,0,4.2-.5,5.8.1s2.1,1.2,2.2,1.9.1,2.5-1.1,1.6-1.7-1.3-2.2-.9-1.4.6-1.9.4-.7-.8-1.2-.9-1.2-.2-1.4,0-.5.9.3,1,1.2,0,1.8.7,1.3,1.2,2,1.3c1.2.1,3.5-.6,2,1.4s-5.1-.3-5.9-.6-1.2-.5-1.1-.1.8.8,1.3,1.5.7,1.8.7,2.8-.5,1.9-1.4,1.9-1.1-.3-1.2-1,.5-1.9-.7-2.6-1.4,0-2.1-.5-1.4-.7-1.1-1.5,5.1-6.4,5.1-6.4Z"
          />
          <path
            className="cls-1"
            d="M156.9,14.3c5.7-.7,13.9-1.3,15.9-1.4,2.4,2.7,3.2,5.5,3.2,9.4,0,8.6-7,15.5-15.5,15.5s-15.5-7-15.5-15.5c0-2.7,0-3.7,1.2-6,1.9-.5,6.4-1.5,10.8-2Z"
          />
          <path
            className="cls-1"
            d="M176.7,10.5s18.7-4.6,22.6-9c3.9-4.5.6,3.1-.7,5s-3.5,4.5-5.9,5-16-.9-16-.9Z"
          />
          <path
            className="cls-1"
            d="M48.9,50.7s.5-1.4-.7-1.5c-2.9-.2-7.9-1.1-11-4.2-1.1-1.1-2.8-2.2-2.9,1.8s-1.8,13.4-3.6,13.1c-13.1-2.4-20.4,9.1-25.2,21.2C.8,93.1-.4,111.2.7,124.4c.9,11.3,5,28,12.8,35.5,1,.9-.7-6-2.7-14.7-.3-1.2-1.8-12.7-1.8-13.6,0-4.5,0-11.1.6-17.8,1.2-12.8,3.6-19.5,8.1-27.5,6.2-11,8.4-12.3,14.3-13.2,5.5-.8,9,4.6,11-1.8,2-6.4,5.9-20.7,5.9-20.7Z"
          />
          <path
            className="cls-1"
            d="M170.4,51.7s-.5-1.4.7-1.5c2.9-.2,7.9-1.1,11-4.2s2.8-2.2,2.9,1.8c0,1.5,1.8,13.4,3.6,13.1,13.1-2.4,20.4,9.1,25.2,21.2,4.8,12.1,6,30.2,4.9,43.4-.9,11.3-5,28-12.8,35.5-1,.9.7-6,2.7-14.7.3-1.2,1.8-12.7,1.8-13.6,0-4.5,0-11.1-.6-17.8-1.2-12.8-3.6-19.5-8.1-27.5-6.2-11-8.4-12.3-14.3-13.2s-9,4.6-11-1.8c-2-6.4-5.9-20.7-5.9-20.7Z"
          />
          <circle className="cls-2" cx="145.2" cy="26.4" r="5" />
        </svg>
      </div> */}
    </Section>
  );
};

export default collab;
