import React from "react";
import { CustomButton } from "../../constants/Button";
import Section from "@/constants/Section";


const CTA = () => {
  return (
    <section className="p-[5%]">
      <div className="p-5 xl:p-20 bg-sky-400 rounded-2xl w-full h-full shadow-2xl text-center">
        <h1 className="text-2xl  md:text-4xl text-stone-50 font-bold">
          Subscribe For Any News and Updates From Us
        </h1>
        <p className="text-stone-50 font-normal text-[12px] sm:text-[15.4px] mb-5 mt-5">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
          dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor
        </p>
        <div className="relative mx-auto max-w-[400px] w-full">
          <input
            placeholder="Enter Your Email..."
            className="relative bg-stone-50 text-black rounded-3xl  w-full h-full p-4 ring-sky-400 outline-none borde"
            type="email"
          />
          <CustomButton className="relative sm:absolute sm:right-[0] bg-black px-4 text-white">
            Subscribe
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default CTA;
