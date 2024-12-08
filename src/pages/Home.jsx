import CardSection from "@/components/CardSection";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <CardSection />
      <section className="container mx-auto my-10 flex flex-col items-center gap-9">
        <h4>Works with your technologies</h4>
        <div className="flex w-8/12  justify-around">
          <img src="./src/assets/images/js.png" alt="js" />
          <img src="./src/assets/images/ts.png" alt="ts" />
          <img src="./src/assets/images/react.png" alt="react" />
          <img src="./src/assets/images/redux.png" alt="redux" />
          <img src="./src/assets/images/tailwind.png" alt="tailwind" />
          <img src="./src/assets/images/nextjs.png" alt="nextjs" />
        </div>
      </section>

      <section>
        <div className=" container bg-black text-white w-8/12 rounded-md mx-auto h-80 flex items-center justify-center px-8 my-14">
          <div className="flex flex-col items-center h-48 justify-between  ">
            <h2 className="text-3xl md:text-4xl lg:text-6xl py-4">Build faster websites</h2>
            <p>
              Pull content from anywhere and serve it fast with Astro's next-gen
              island architecture
            </p>
            <Button variant="secondary">Get Started</Button>
          </div>
        </div>
      </section>

      <footer className="flex justify-center my-14">
        <div className="flex flex-col items-center">
            <p>Copyright © 2024. All rights reserved</p>
            <p>Made by Hanie</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
