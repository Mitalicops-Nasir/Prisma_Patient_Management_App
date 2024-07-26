"use client";

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import SpecialistDoc from "./UI/SpecialistDoc";
import Section from "@/constants/Section";

const Faculty = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 3,
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
    <section className="p-[5%]">
      <div className="text-center mb-7">
        <h1 className="text-3xl text-black font-bold ">
          Meet Our Specialist Doctors
        </h1>
        <p className="text-[1rem] mt-2 text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.lafjaljf
          ajflajf ajflajie ajfajf lafjaf
        </p>
      </div>

      <div className="grid gap-20 grid-cols-[minmax(200px,1fr)] grid-flow-row mt-14">
        <Slider {...settings}>
          <SpecialistDoc
            imgSrc="/assets/Specialist-1.png"
            name="Dr. John"
            role="Cardiologist"
            rating="7K"
            alt="specialist-1"
          />
          <SpecialistDoc
            imgSrc="/assets/Specialist-2.png"
            name="Dr. Elina"
            role="Dentist"
            rating="7K"
            alt="specialist-2"
          />
          <SpecialistDoc
            imgSrc="/assets/Specialist-3.png"
            name="Dr. Joshua"
            role="Opthalmologist"
            rating="7K"
            alt="specialist-3"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Faculty;
