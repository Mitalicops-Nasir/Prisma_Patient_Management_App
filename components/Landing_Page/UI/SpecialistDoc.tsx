import { Button } from "@/components/ui/button";
import { CustomButton } from "@/constants/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaHospital, FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { RiCalendar2Fill, RiUser2Fill } from "react-icons/ri";

interface SpecialistDocProps {
  imgSrc?: string;
  name?: string;
  role?: string;
  rating?: string;
  alt?: string;

  title?: string;
  description?: string;
  icon?: JSX.Element;
  author?: string;
  date?: string;
}

const SpecialistDoc = ({
  imgSrc,
  name,
  role,
  rating,
  alt,
}: SpecialistDocProps) => {
  return (
    <div className="bg-slate-100 shadow-lg p-3 rounded-lg">
      <div className="bg-sky-300 rounded-lg">
        <Image
          src={imgSrc!}
          width={500}
          height={500}
          alt={alt!}
          className="w-full h-full mb-3 aspect-square object-cover"
        />
      </div>
      <div className="mb-2">
        <h1 className="text-xl font-bold text-black">{name}</h1>
      </div>
      <div className="flex items-center justify-between mb-1">
        <p className="text-[1rem] text-gray-500">{role}</p>
        <span className="flex items-center gap-1 text-black font-normal">
          <FaStar size={20} color="#FFC107" />
          {rating}
        </span>
      </div>
      <div>
        <Link href="#" className="text-[13px] text-sky-400">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default SpecialistDoc;

export const ServicesCard = ({
  role,
  description,
  icon,
}: SpecialistDocProps) => {
  return (
    <div className="group transition-all  hover:bg-sky-500 bg-slate-100 rounded-[1rem] p-8 shadow-2xl ">
      <FaHospital className="text-gray-400 text-[50px] mx-auto group-hover:text-white" />
      <h1 className="text-black text-[1.5rem] mt-3 font-bold group-hover:text-white">
        {role}
      </h1>
      <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
        {description}
      </p>
      <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
        Learn More
        <FaLongArrowAltRight size={30} className="group-hover:text-white" />
      </Button>
    </div>
  );
};

export const BlogsCard = ({
  title,
  description,
  imgSrc,
  author,
  alt,
  date,
}: SpecialistDocProps) => {
  return (
    <div className="bg-slate-100 shadow-lg p-2 rounded-xl">
      <div>
        <Image
          src={imgSrc!}
          width={500}
          height={500}
          alt={alt!}
          className="w-full h-full mb-3 rounded-xl object-cover"
        />
      </div>
      <div className="flex items-center justify-start gap-5 mb-2">
        <span className="flex items-center text-[13px] gap-1 text-gray-400 font-normal">
          <RiUser2Fill size={20} className="text-gray-400" />
          {author}
        </span>
        <span className="flex items-center gap-1 text-[13px] text-gray-400 font-normal">
          <RiCalendar2Fill size={20} className="text-gray-400" />
          {date}
        </span>
      </div>
      <div className="mb-2">
        <h1 className="text-[16px] font-bold text-black mb-2">{title}</h1>

        <p className="text-[12px] font-medium text-gray-400">{description}</p>

        <CustomButton className="bg-gray-300 text-black mt-3 py-3 font-semibold justify-center gap-1 w-full hover:bg-sky-400 hover:text-white">
          Read More <AiOutlineArrowRight size={20} />
        </CustomButton>
      </div>
    </div>
  );
};

export const TestimonialsCard = ({
  title,
  description,
  imgSrc,
  author,
  alt,
  icon,
}: SpecialistDocProps) => {
  return (
    <div className="text-center flex gap-3 items-center flex-col bg-slate-100 shadow-xl p-2 rounded-xl">
      <div className="flex justify-center">
        <Image
          src={imgSrc!}
          width={500}
          height={500}
          alt={alt!}
          className="w-[4rem] h-[4rem] rounded-[50%]"
        />
      </div>
      <div className="flex items-center justify-center mb-2 mt-2 ">{icon}</div>
      <div className="mb-2 flex flex-col">
        <h1 className="text-[16px] font-bold text-black">{author}</h1>

        <p className="text-[12px] font-medium text-gray-400">{title}</p>

        <p className="text-[12px] font-medium text-gray-400 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};
