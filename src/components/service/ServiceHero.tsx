import React from "react";
import Link from "next/link";

const ServiceHero = () => {
  return (
    <>
      <div className="px-4 pt-28 pb-14 text-center flex justify-center items-center flex-col   md:pb-28 md:pt-36 md:px-10  dark:text-gray-50">
        <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 text-center">
          Our Services
        </h1>
        <p className="mt-6 mb-8 text-base md:text-lg sm:mb-6 xl:max-w-3xl dark:text-gray-50">
          From custom websites to powerful applications, AMOA Tech delivers
          cutting-edge solutions tailored to your business needs.
        </p>
        <div className="flex justify-center md:gap-0 gap-x-4">
          <Link
            href="/contact"
            type="button"
            className="md:px-8 px-3 py-2 md:m-2 text-lg font-semibold rounded bg-purple-800 hover:bg-purple-950 text-white"
          >
            Get started
          </Link>
          <Link
            href="/templates"
            type="button"
            className="md:px-8 px-3 py-2 md:m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50"
          >
            Our Templates
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;
