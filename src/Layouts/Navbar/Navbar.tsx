import { Button } from "../../components/ui/button";
import { ModeToggle } from "../../components/mode-toggle";
import navLinks from "../../Data/Data";
import { ArrowUpFromLine, Menu, X } from "lucide-react";

import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

import logo from "/src/assets/logo.png";

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
            src={"logo"}
            alt="logo"
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
            className="max-lg:block hidden text-3xl cursor-pointer "
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-slate-950 fixed top-16 bottom-0 left-0 right-0 z-[9999999] ">
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
        className="bg-white w-14 h-14 rounded-full fixed bottom-[3rem] md:right-12 right-6 z-50 flex justify-center items-center cursor-pointer"
        onClick={() => {
          scrollToTop();
        }}
      >
        <ArrowUpFromLine className="text-4xl" />
      </button>
      {/* <nav className="flex justify-between items-center sm:px-6 lg:px-14 px-3 lg:py-5 py-3 bg-white shadow-lg fixed w-full z-50">

        <a href="/">
          <div className="flex items-center justify-center gap-2">
            <img
              className="md:h-12 h-8 w-8 md:w-12 rounded-full bg-red-400"
              src="/src/assets/logo.jpg"
              alt="TechSpace_Logo"
            />
            <span className="md:text-xl text-lg font-bold dark:text-slate-900">
              TechSpace
            </span>
          </div>
        </a>

 
        <div className="">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className="hidden lg:inline-block px-8  rounded-md text-md text-t1 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

 
        <div className="flex justify-center items-center gap-3">
          <ModeToggle />
          <Button className="hidden lg:flex">Get Started</Button>

          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className="h-6 w-6 lg:hidden static" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4"></div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
