import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className=" px-14 mx-auto lg:w-11/12 mt-20">
      {" "}
      <div className="flex flex-col-reverse lg:flex-row  items-center">
        <div className="">
          <h1 className="text-4xl lg:text-6xl font-semibold lg:font-bold w-1/2 lg:w-10/12 ">
            Scalable Apps with frameworks
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptate et neque earum iste hic consequatur nulla deserunt
            architecto numquam!
          </p>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row  space-x-2 mt-10">
            <Button className="">Download for Free</Button>
            <Button variant="outline">Github Repo</Button>
          </div>
        </div>
        <div>
          <img src=".\src\assets\images\hero-source.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
