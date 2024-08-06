import React from "react";
import Image from "next/image";

import { RiShieldCheckFill } from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";
import Section from "@/constants/Section";

const Hero = () => {
  return (
    <section className="p-[5%]">
      <div className="grid lg:grid-cols-2 gap-12 mb-8 grid-cols-1">
        <div className="w-full">
          <h1 className="text-[2.25rem] xl:text-[3rem] leading-[1.2] text-black font-semibold mt-3">
            We place your health at the top of our priority list
          </h1>
          <p className="text-[1rem] font-medium w-full text-gray-400 mt-4 leading-7">
            We are not just a fitness center we&apos;re a community of
            passionate individuals dedicated transforming lives through health
            and wellness, our Hospitals are equipped with top notch equipment to
            heal and save our patients{" "}
          </p>
          <Button asChild variant="landing_page" size="lg" className="mt-4">
            <Link href="/auth/register">Register Now</Link>
          </Button>
        </div>

        <div className="relative">
          <Image
            src="/assets/hero-img.jpg"
            alt="hero"
            className="w-full h-full rounded-xl shadow-2xl"
            width={500}
            height={500}
          />

          <div className="absolute p-5 bg-slate-100 shadow-xl rounded-xl right-0 bottom-0 sm:bottom-10 sm:right-2">
            <span className="flex gap-2 items-center text-black">
              <RiShieldCheckFill color="green" size={25} />
              Lorem Ipsum Dolor
            </span>
          </div>

          <div className="absolute p-3.5 sm:p-5 bg-slate-100 shadow-xl rounded-xl left-0 top-0 sm:left-2 sm:top-8">
            <Image
              src="/assets/people.png"
              alt="people"
              width={100}
              height={100}
              className="w-full h-full"
            />
            <p className="text-black font-semibold mt-1">100K+ Happy Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
