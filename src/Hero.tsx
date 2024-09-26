import { Button } from "./components/ui/button";

const Hero = () => {
  return (
    <>
      <div
        className="relative bg-green-400 overflow-hidden md:mt-[5.5rem] mt-[4rem]
      "
      >
        <div className="max-w-7xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-red-300">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 bg-yellow-300">
              <div className="sm:text-center lg:text-left bg-purple-600">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Crafting Digital</span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    Experiences
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We specialize in creating stunning websites, powerful
                  applications, and intuitive user experiences that drive
                  results for your business.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button size="lg">Get Started</Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-blue-400">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/src/assets/tech1.jpg"
            alt="Hero image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
