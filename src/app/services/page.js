import React from "react";
import Hero from "@/app/components/services/hero";
import Services from "@/app/components/services/services";
import ServicesCounter from "@/app/components/services/servicesCounter";
import ServicesGraph from "@/app/components/services/servicesGraph";
const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ServicesCounter />
      <ServicesGraph />
    </div>
  );
};

export default page;
