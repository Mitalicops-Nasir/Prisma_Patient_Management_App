import React from "react";
import { Section } from "../../constants/Section";


const Achievements = () => {
  return (
    <Section bgColor="bg-slate-900">
      <div className="flex justify-between items-center flex-col md:flex-row gap-7">
        <div>
          <h1 className="text-5xl">400+</h1>
          <p className="text-[1rem]">Best Doctors</p>
        </div>
        <div>
          <h1 className="text-5xl">350+</h1>
          <p className="text-[1rem]">Patients Consul</p>
        </div>
        <div>
          <h1 className="text-5xl">12+</h1>
          <p className="text-[1rem]">Surgery Room</p>
        </div>
        <div>
          <h1 className="text-5xl">10+</h1>
          <p className="text-[1rem]">Years Experience</p>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;
