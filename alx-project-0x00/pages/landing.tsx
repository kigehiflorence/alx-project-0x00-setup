import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Landing() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to the Landing Page!</h1>
      <div className="flex flex-col gap-4 mt-6">
        <Button title="Small Rounded" styles="rounded-sm text-sm px-3 py-1" />
        <Button title="Medium Rounded" styles="rounded-md text-base px-5 py-2" />
        <Button title="Large Rounded Full" styles="rounded-full text-lg px-8 py-3" />
      </div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}


const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
    </div>
  );
};

export default Landing;
