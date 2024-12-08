import CardSection from "@/components/CardSection";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import React from "react";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <CardSection />
      <div className="container mx-auto my-10 flex flex-col items-center gap-9">
        <h4>Works with your technologies</h4>
        <div className="flex w-8/12  justify-around">
          <img src="./src/assets/images/js.png" alt="js" />
          <img src="./src/assets/images/ts.png" alt="ts" />
          <img src="./src/assets/images/react.png" alt="react" />
          <img src="./src/assets/images/redux.png" alt="redux" />
          <img src="./src/assets/images/tailwind.png" alt="tailwind" />
          <img src="./src/assets/images/nextjs.png" alt="nextjs" />
        </div>
      </div>
    </>
  );
};

export default Home;
