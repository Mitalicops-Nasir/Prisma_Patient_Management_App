import React from "react";

import { FaHospital, FaLongArrowAltRight } from "react-icons/fa";
import { Section } from "../../constants/Section";
import { CustomButton as Button } from "../../constants/Button";

const Services = () => {
  return (
    <Section>
      <div>
        <h1 className="text-black text-[2rem] font-bold text-center">
          Your Health is Met With our services.
        </h1>
        <p className="text-gray-600 text-[1rem] font-normal text-center">
          lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka hhfahfhakfkh
          afkafh hakfhakf
        </p>
        <div className="grid md:grid-cols-3 gap-7 grid-cols-[minmax(200px,1fr)]  text-center grid-flow-row mt-14">
          <div className="group transition-all  hover:bg-sky-500 bg-slate-100 rounded-[1rem] p-8 shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Cardiology
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Neurology
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3 font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Physiotheraphy
            </h1>
            <p className="text-gray-600 mt-3 text-[1rem] font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Body Check Up
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Dental Care
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Pedritician
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Surgery
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>

          <div className="group transition-all p-8 hover:bg-sky-500 bg-slate-100 rounded-[1rem] shadow-2xl ">
            <FaHospital
              size={50}
              className="text-gray-400 mx-auto group-hover:text-white"
            />
            <h1 className="text-black text-[1.5rem] font-bold group-hover:text-white">
              Eye Care
            </h1>
            <p className="text-gray-600 text-[1rem] mt-3  font-normal group-hover:text-white">
              lorem ipsum dolor sit amet pqra lhafk aahfahfka afhakhfka
              hhfahfhakfkh afkafh hakfhakf
            </p>
            <Button className="bg-transparent py-1.5 mt-5 text-sky-500 group-hover:text-white gap-2 items-center">
              Learn More
              <FaLongArrowAltRight
                size={30}
                className="group-hover:text-white"
              />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button className=" items-center gap-3 justify-center ">
            View All Services
            <FaLongArrowAltRight size={30} className="group-hover:text-white" />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Services;
