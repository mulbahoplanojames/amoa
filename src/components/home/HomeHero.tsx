import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const HomeHero = () => {
  return (
    <>
      <section className="relative overflow-hidden md:mt-[5.5rem] mt-[5rem] ">
        <div className="py-3 mx-auto max-w-7xl md:py-2">
          <div className="relative z-10 pb-8 bg-white dark:bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 ">
            <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
              <div className="sm:text-center lg:text-left ">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline dark:text-white">
                    Crafting Digital
                  </span>
                  <span className="block text-purple-600 xl:inline">
                    Experiences
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We specialize in creating stunning websites, powerful
                  web-applications, intuitive user experiences that drive
                  results for your business, and professional courses.
                </p>
                <div className="mt-8 space-x-4">
                  <Link href="/contact">
                    <Button size="lg" className="cursor-pointer bg-primary_clr">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="cursor-pointer"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <Image
              className="object-cover w-full h-full "
              src={"/assets/tech1.jpg"}
              alt="techSpace HomeHero image"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
