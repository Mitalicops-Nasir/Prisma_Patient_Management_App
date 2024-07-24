"use client";

import React from "react";

import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import Slider from "react-slick";
import { Section } from "../../constants/Section";

interface StarIconProps {
  count?: number;
}

const Stars: React.FC<StarIconProps> = ({ count = 1 }) => {
  const stars: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    stars.push(<IoMdStar key={i} color="#FFC107" size={20} />);
  }

  return <>{stars}</>;
};

const Testimonials = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section>
      <div className="text-center mb-7">
        <h1 className="text-3xl text-black font-bold">
          Our Special Patients Say!
        </h1>
        <p className="text-[1rem] mt-2 text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.lafjaljf
          ajflajf ajflajie ajfajf lafjaf
        </p>
      </div>

      <div className="grid gap-6  grid-cols-[minmax(200px,1fr)] grid-flow-row mt-14">
        <Slider {...settings}>
          <div className="text-center flex gap-3 items-center flex-col bg-slate-100 shadow-xl p-2 rounded-xl">
            <div className="flex justify-center">
              <Image
                src="/assets/Blog-1.jpg"
                width={500}
                height={500}
                alt="specialist-1"
                className="w-[4rem] h-[4rem] rounded-[50%]"
              />
            </div>
            <div className="flex items-center justify-center mb-2 mt-2 ">
              <Stars count={5} />
            </div>
            <div className="mb-2 flex flex-col">
              <h1 className="text-[16px] font-bold text-black">Well Jack</h1>

              <p className="text-[12px] font-medium text-gray-400">
                Great Service
              </p>

              <p className="text-[12px] font-medium text-gray-400 mt-2">
                lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>

          <div className="text-center flex gap-3 items-center flex-col bg-slate-100 shadow-lg p-2 rounded-xl">
            <div className="flex justify-center">
              <Image
                src="/assets/Blog-1.jpg"
                width={500}
                height={500}
                alt="specialist-1"
                className="w-[4rem] h-[4rem] rounded-[50%]"
              />
            </div>
            <div className="flex items-center justify-center mb-2 mt-2">
              <Stars count={5} />
            </div>
            <div className="mb-2 flex flex-col">
              <h1 className="text-[16px] font-bold text-black">Maria Johnson</h1>

              <p className="text-[12px] font-medium text-gray-400">
                The ER Service is Swift and Efficient
              </p>

              <p className="text-[12px] font-medium text-gray-400 mt-2">
                lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>

          <div className="text-center flex gap-3 items-center flex-col bg-slate-100 shadow-lg p-2 rounded-xl">
            <div className="flex justify-center">
              <Image
                src="/assets/Blog-1.jpg"
                width={500}
                height={500}
                alt="specialist-1"
                className="w-[4rem] h-[4rem] rounded-[50%]"
              />
            </div>
            <div className="flex items-center justify-center mb-2 mt-2">
              <Stars count={3} />
            </div>
            <div className="mb-2 flex flex-col">
              <h1 className="text-[16px] font-bold text-black">Hugh Thomas</h1>

              <p className="text-[12px] font-medium text-gray-400">
                The Dentist is Doable
              </p>

              <p className="text-[12px] font-medium text-gray-400 mt-2">
                lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>

          <div className="text-center flex gap-3 items-center flex-col bg-slate-100 shadow-lg p-2 rounded-xl">
            <div className="flex justify-center">
              <Image
                src="/assets/Blog-1.jpg"
                width={500}
                height={500}
                alt="specialist-1"
                className="w-[4rem] h-[4rem] rounded-[50%]"
              />
            </div>
            <div className="flex items-center justify-center mb-2 mt-2">
              <Stars count={4} />
            </div>
            <div className="mb-2 flex flex-col">
              <h1 className="text-[16px] font-bold text-black">Nancy Smith</h1>

              <p className="text-[12px] font-medium text-gray-400">
                Nutrition Services are Good
              </p>

              <p className="text-[12px] font-medium text-gray-400 mt-2">
                lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                amet
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
