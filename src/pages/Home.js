import React from "react";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Season from "../components/Season";
import Gallary from "../components/Gallary";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brand />
      <Season />
      <Gallary />
      <About />
    </div>
  );
}
