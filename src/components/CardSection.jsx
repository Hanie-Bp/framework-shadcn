import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";

const CardSection = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((data) => data.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <section className=" px-10   mx-auto mt-24">
      <div className="py-16">
        <h2 className="text-2xl  lg:text-3xl font-bold">
          Everything you need to start a website
        </h2>
        <p className="block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consequuntur.
        </p>
      </div>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards?.map((card) => (
          <CardElement key={card.title} data={card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
