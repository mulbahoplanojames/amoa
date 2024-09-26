import { Button } from "../../components/ui/button";
import { ModeToggle } from "../../components/mode-toggle";
import navLinks from "../../Data/Data";
import { ArrowUpFromLine, Menu, X } from "lucide-react";

import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import logo from "/src/assets/tech.jpg";

const Navbar = () => {
  // State variable to keep track of whether the menu is open or not.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    const handleBegin = (to: string, element: HTMLElement) => {
      console.log("begin", to, element);
    };
    Events.scrollEvent.register("begin", handleBegin);

    // Registering the 'end' event and logging it to the console when triggered.
    const handleEnd = (to: string, element: HTMLElement) => {
      console.log("end", to, element);
    };
    Events.scrollEvent.register("end", handleEnd);

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <>
      <nav
        className={` flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0  bg-white shadow-lg`}
      >
        {/* Link to the home page */}
        <Link
          to="/"
          className={`text-2xl font-bold flex justify-center items-center gap-2 `}
        >
          <img
            src={logo}
            alt="TechSpace_Logo"
            className="md:w-16 md:h-16 w-10 h-10 rounded-md"
          />
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <ul className="max-lg:hidden">
          {navLinks.map((navlink) => (
            <li key={navlink.label} className={`inline-block px-8`}>
              <Link
                to={navlink.path}
                className={`font-montserrat text-base leading-normal cursor-pointer`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        {/*//! Contact Us button */}
        <div className="lg:gap-x-6 gap-x-4 flex items-center justify-center">
          <ModeToggle />
          <Button className="hidden lg:flex">Get Started</Button>
          <Menu
            className="max-lg:block hidden text-3xl cursor-pointer text-black"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-purple-700 fixed top-16 bottom-0 left-0 right-0 z-[8888888] ">
            {/* Close button for the menu */}
            <div
              className="max-lg:block fixed right-0 hidden px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <X className=" text-3xl text-white" />
            </div>
            <ul className=" lg:hidden bg-1 gap-y-7 z-40 flex flex-col items-center justify-center h-full">
              {/* Menu items for smaller devices */}
              {navLinks.map((navlink) => (
                <li
                  key={navlink.label}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    window.scrollTo(0, 8000);
                  }}
                >
                  <Link
                    to={navlink.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="font-montserrat active:text-black text-2xl leading-normal text-white"
                  >
                    {navlink.label}
                  </Link>
                </li>
              ))}
              <Button className="hidden lg:flex">Get Started</Button>
            </ul>
          </nav>
        </div>
      )}

      <button
        className="bg-purple-700 text-white w-14 h-14 rounded-full fixed bottom-[3rem] md:right-12 right-6 z-50 flex justify-center items-center cursor-pointer"
        onClick={() => {
          scrollToTop();
        }}
      >
        <ArrowUpFromLine className="text-4xl" />
      </button>
    </>
  );
};

export default Navbar;
