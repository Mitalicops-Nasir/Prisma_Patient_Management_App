import React from "react";

import { FaHospital, FaLongArrowAltRight } from "react-icons/fa";

import { CustomButton as Button } from "../../constants/Button";
import { ServicesCard } from "./UI/SpecialistDoc";
import Section from "@/constants/Section";

const Services = () => {
  return (
    <section className="p-[5%]">
      <div>
        <h1 className="text-black text-[2rem] font-bold text-center">
          Your Health is Met With our services.
        </h1>
        <p className="text-gray-600 text-[1rem] font-normal text-center">
          lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh
          afkafh hakfhakf
        </p>
        <div className="grid md:grid-cols-3 gap-7 grid-cols-[minmax(200px,1fr)]  text-center grid-flow-row mt-14">
          <ServicesCard
            role="Neurology"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Cardiology"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Pedriatician"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Dentist"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Surgeon"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="ENT"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Opthomology"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Orthopedics"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
          <ServicesCard
            role="Dermatologist"
            description="lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh afkafh hakfhakf"
          />
        </div>
        <div className="flex justify-center mt-6">
          <Button className=" items-center gap-3 justify-center ">
            View All Services
            <FaLongArrowAltRight size={30} className="group-hover:text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
