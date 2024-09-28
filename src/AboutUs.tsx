import { Link } from "react-scroll";
import { Button } from "./components/ui/button";

const AboutUs = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-4 place-items-center md:px-16 px-2 md:py-20 py-14">
        <div className="bg-blue-30 w-full h-[400px] p-2 relative">
          <div className="md:w-44 w-40  h-40  absolute bottom-1 md:right-32 right-2 z-10 overflow-hidden ">
            <img
              src="/src/assets/wave1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" md:w-44 w-40  h-40 absolute top-1 md:left-10 -left-3 z-10 overflow-hidden ">
            <img
              src="/src/assets/wave1.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" md:w-64 w-60 h-56 absolute top-2 md:right-[6rem] right-2 overflow-hidden">
            <img
              src="/src/assets/ab2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" md:w-64 w-52 h-56 absolute bottom-2 left-2 overflow-hidden">
            <img
              src="/src/assets/ab3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" w-full h-fit py-8 md:px-2 px-1">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase md:pb-4 pb-3">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl capitalize">
            A place of Creative and Inovation for Your Business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At <span className="text-indigo-600">TechSpace</span>, we are
            dedicated to being a hub of creativity and innovation, specializing
            in designing stunning websites and apps tailored to elevate your
            business. Our expert team works closely with you to transform your
            vision into a dynamic online presence that captivates your audience
          </p>
          <div className="mt-8">
            <Button variant="outline" size={"lg"}>
              Our Team
            </Button>
            <Link
              to="/contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button size={"lg"} className="ml-4 ">
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
