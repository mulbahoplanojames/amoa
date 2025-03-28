import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
// import { GradientAnimatedText } from "../GradientAnimatedText";

const AboutUs = () => {
  return (
    <>
      <section className="grid grid-cols-1 px-2 md:grid-cols-2 md:gap-8 gap-y-4 place-items-center md:px-16 md:pt-28 md:pb-14 pt-14 pb-3">
        <div className="bg-blue-30 w-full h-[400px] p-2 relative">
          <div className="absolute z-10 w-40 h-40 overflow-hidden md:w-44 bottom-1 md:right-20 right-2">
            <div className="w-full h-full relative">
              <Image
                src="/assets/wave1.png"
                alt="A wave"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          </div>
          <div className="absolute z-10 w-40 h-40 overflow-hidden bg-gray-60 md:w-44 top-1 md:left-1 -left-3">
            <div className="w-full h-full relative">
              <Image
                src="/assets/wave1.png"
                alt="A wave"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          </div>
          <div className=" md:w-64 w-60 h-56 absolute top-2 md:right-[6rem] right-2 overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src="/assets/ab2.jpg"
                alt="Student with a laptop"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          </div>
          <div className="absolute h-56 overflow-hidden md:w-64 w-52 bottom-2 left-2">
            <div className="w-full h-full relative">
              <Image
                src="/assets/ab3.jpg"
                alt="Student with a laptop"
                className="object-cover w-full h-full"
                fill
              />
            </div>
          </div>
        </div>
        <div className="w-full px-1 py-8 h-fit md:px-2">
          <h2 className="pb-3 text-base font-semibold tracking-wide text-indigo-600 uppercase md:pb-4">
            About Us
          </h2>
          {/* <GradientAnimatedText label="About Us" /> */}
          <p className="mt-2 text-3xl font-extrabold leading-10 tracking-tight text-gray-900 capitalize sm:text-4xl dark:text-slate-200">
            A place of Creative and Inovation for Your Business
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto dark:text-slate-300">
            At <span className="text-indigo-600">AMOA</span>, we are dedicated
            to being a hub of creativity and innovation, specializing in
            designing stunning websites and apps tailored to elevate your
            business, and offering professional courses. Our expert team works
            closely with you to transform your vision into a dynamic online
            presence that captivates your audience
          </p>
          <div className="mt-8">
            <Button variant="outline" size={"lg"} className="cursor-pointer">
              Our Team
            </Button>
            <Link href="/contact">
              <Button
                size={"lg"}
                className="ml-4 bg-primary_clr hover:bg-primary_clr/80 cursor-pointer"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
