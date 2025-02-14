"use client";

import { templateData } from "@/data/template-data";
import { useState } from "react";
import { Button } from "../ui/button";
// import { Routes } from "react-router-dom";

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Create a list of unique categories from projectsData
  const categories = [
    "all",
    ...new Set(templateData.map((project) => project.category)),
  ];

  // Function to filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? templateData
      : templateData.filter((project) => project.category === selectedCategory);

  return (
    <section className="pb-12 bg-white dark:bg-transparent pt-32">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Templates
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Latest Templates
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500 dark:text-gray-300">
            Explore some of our recent templates and see how we&apos;ve helped
            businesses achieve their digital goals.
          </p>
        </div>

        <div className="mt-8 text-center md:mt-10">
          {/* Category Buttons */}
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => category && setSelectedCategory(category)}
              variant="outline"
              className="mx-4 my-2 md:mx-2"
            >
              {category && category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-72 md:h-80"
                    src={project.image}
                    alt={project.title}
                    width={400}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.link)}
                    >
                      View Template
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg">View All Templates</Button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
