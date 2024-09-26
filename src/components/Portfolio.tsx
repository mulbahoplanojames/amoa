import { useState } from "react";
// import { Routes } from "react-router-dom";
import ButtonScroll from "./ButtonScroll";
import { Button } from "./ui/button";
import { projectsData } from "../Data/Data";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Create a list of unique categories from projectsData
  const categories = [
    "all",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  // Function to filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-12 bg-white dark:bg-transparent" id="/portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Latest Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Explore some of our recent projects and see how we've helped
            businesses achieve their digital goals.
          </p>
        </div>

        <div className="mt-6 text-center">
          {/* Category Buttons */}
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => category && setSelectedCategory(category)}
              variant="outline"
              className="mx-2"
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
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
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
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
