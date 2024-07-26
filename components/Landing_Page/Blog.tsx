import React from "react";
import { BlogsCard } from "./UI/SpecialistDoc";
import Section from "@/constants/Section";

const Blog = () => {
  return (
    <section className="p-[5%]">
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
        <BlogsCard
          title="Study Reveals Medicine Overdose Side Effects. How to Proetct
          Yourself?"
          description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          author="Chris Tucker"
          date="25th Oct, 2022"
          imgSrc="/assets/Blog-1.jpg"
          alt="specialist-1"
        />

        <BlogsCard
          title="It is Important To Take The Doctors Advice For Good Health"
          description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          author="Johana Elizabeth"
          date="25th Oct, 2020"
          imgSrc="/assets/Blog-2.jpg"
          alt="specialist-2"
        />

        <BlogsCard
          title="Pulmonary Surgery Made Possible By New Technology"
          description="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
          author="Alex John"
          date="25th Oct, 2022"
          imgSrc="/assets/Blog-3.jpg"
          alt="specialist-3"
        />
      </div>
    </section>
  );
};

export default Blog;
