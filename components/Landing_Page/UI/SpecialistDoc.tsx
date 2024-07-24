import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

interface SpecialistDocProps {
  imgSrc: string;
  name: string;
  role: string;
  rating: string;
  alt: string;
}

const SpecialistDoc = ({ imgSrc, name, role, rating, alt }: SpecialistDocProps) => {
  return (
    <div className="bg-slate-100 shadow-lg p-3 rounded-lg">
      <div className="bg-sky-300 rounded-lg">
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt={alt}
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
