import React from "react";
import Link from "next/link";

const AboutHero = () => {
  return (
    <>
      <div className="px-4 pt-28 pb-24 text-center flex justify-center items-center flex-col   md:pb-28 md:pt-36 md:px-10  dark:text-gray-50">
        <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 text-center">
          Elevate Your Digital Presence with{" "}
          <span className="text-purple-800">AMOA Tech</span>
        </h1>
        <p className="mt-6 mb-8 text-base md:text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
          At TechSpace, we craft stunning websites, powerful applications, and
          seamless user experiences that drive results. Our expert team
          transforms your vision into a dynamic online presence that captivates,
          engages, and grows your business. Let’s build something extraordinary
          together!
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            href="/contact"
            type="button"
            className="px-8 py-2 m-2 text-lg font-semibold rounded bg-purple-800 hover:bg-purple-950 text-white"
          >
            Get started
          </Link>
          <Link
            href="/services"
            type="button"
            className="px-8 py-2 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
          >
            Our Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
