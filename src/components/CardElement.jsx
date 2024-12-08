import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const CardElement = ({ data: { title, description, img } }) => {
  return (
    <Card className="flex shadow-none outline-none border-none p-10 hover:shadow-xl ">
      <div>
        <img src={img} alt={title} className="w-36" />
      </div>
      <CardContent>
        <CardTitle className="text-[18px] font-medium ">{title}</CardTitle>
        <CardDescription className="text-gray-700">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardElement;
