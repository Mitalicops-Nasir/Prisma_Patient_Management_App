import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { RiCalendar2Fill, RiUser2Fill } from "react-icons/ri";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Section } from "../../constants/Section";
import { CustomButton } from "../../constants/Button";

const Blog = () => {
  return (
    <Section>
      <div className="text-center mb-7">
        <h1 className="text-3xl text-black font-bold">
          Latest Blog and Events
        </h1>
        <p className="text-[1rem] mt-2 text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.lafjaljf
          ajflajf ajflajie ajfajf lafjaf
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 grid-cols-[minmax(200px,1fr)] grid-flow-row mt-14">
        <div className="bg-slate-100 shadow-lg p-2 rounded-xl">
          <div>
            <Image
              src="/assets/Blog-1.jpg"
              width={500}
              height={500}
              alt="specialist-1"
              className="w-full h-full mb-3 rounded-xl object-cover"
            />
          </div>
          <div className="flex items-center justify-start gap-5 mb-2">
            <span className="flex items-center text-[13px] gap-1 text-gray-400 font-normal">
              <RiUser2Fill size={20} className="text-gray-400" />
              Maria Rogers
            </span>
            <span className="flex items-center gap-1 text-[13px] text-gray-400 font-normal">
              <RiCalendar2Fill size={20} className="text-gray-400" />
              25th Oct, 2022
            </span>
          </div>
          <div className="mb-2">
            <h1 className="text-[16px] font-bold text-black mb-2">
              Study Reveals Medicine Overdose Side Effects. How to Proetct
              Yourself?
            </h1>

            <p className="text-[12px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet
            </p>

            <CustomButton className="bg-gray-300 text-black mt-3 py-3 font-semibold justify-center gap-1 w-full hover:bg-sky-400 hover:text-white">
              Read More <AiOutlineArrowRight size={20} />
            </CustomButton>
          </div>
        </div>

        <div className="bg-slate-100 shadow-lg p-2 rounded-xl">
          <div>
            <Image
              src="/assets/Blog-2.jpg"
              width={500}
              height={500}
              alt="specialist-1"
              className="w-full h-full mb-3 rounded-xl object-cover"
            />
          </div>
          <div className="flex items-center justify-start gap-5 mb-2">
            <span className="flex items-center text-[13px] gap-1 text-gray-400 font-normal">
              <RiUser2Fill size={20} className="text-gray-400" />
              Chris Tucker
            </span>
            <span className="flex items-center gap-1 text-[13px] text-gray-400 font-normal">
              <RiCalendar2Fill size={20} className="text-gray-400" />
              25th Oct, 2022
            </span>
          </div>
          <div className="mb-2">
            <h1 className="text-[16px] font-bold text-black mb-2">
              It is Important To Take The Doctors Advice For Good Health
            </h1>

            <p className="text-[12px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet
            </p>

            <CustomButton className="bg-gray-300 text-black mt-3 py-3 font-semibold justify-center gap-1 w-full hover:bg-sky-400 hover:text-white">
              Read More <AiOutlineArrowRight size={20} />
            </CustomButton>
          </div>
        </div>

        <div className="bg-slate-100 shadow-lg p-2 rounded-xl">
          <div>
            <Image
              src="/assets/Blog-3.jpg"
              width={500}
              height={500}
              alt="blog-3"
              className="w-full h-full mb-3 rounded-xl object-cover"
            />
          </div>
          <div className="flex items-center justify-start gap-5 mb-2">
            <span className="flex items-center text-[13px] gap-1 text-gray-400 font-normal">
              <RiUser2Fill size={20} className="text-gray-400" />
              Alex John
            </span>
            <span className="flex items-center gap-1 text-[13px] text-gray-400 font-normal">
              <RiCalendar2Fill size={20} className="text-gray-400" />
              25th Oct, 2022
            </span>
          </div>
          <div className="mb-2">
            <h1 className="text-[16px] font-bold text-black mb-2">
              Pulmonary Surgery Made Possible By New Technology
            </h1>

            <p className="text-[12px] font-medium text-gray-400">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet
            </p>

            <CustomButton className="bg-gray-300 text-black mt-3 py-3 font-semibold justify-center gap-1 w-full hover:bg-sky-400 hover:text-white">
              Read More <AiOutlineArrowRight size={20} />
            </CustomButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
