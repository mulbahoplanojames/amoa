import CallToAction from "@/components/CallToAction";
import FAQSection from "@/components/FAQ";
import Services from "@/components/home/Services";
import ServiceHero from "@/components/service/ServiceHero";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <ServiceHero />
      <Services />
      <FAQSection />
      <CallToAction />
    </>
  );
};

export default ServicesPage;
