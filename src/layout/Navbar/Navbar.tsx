"use client";

import { Button } from "../../components/ui/button";
import { ArrowUpFromLine, Menu, X } from "lucide-react";

import { useState } from "react";

import Link from "next/link";
import { navLinks } from "@/data/nav-data";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={` flex justify-between items-center py-4 md:px-10 px-4 fixed z-50 w-full top-0  bg-white shadow-lg`}
      >
        <Link
          href="/"
          className={`relative w-10 h-10 rounded-md cursor-pointer `}
        >
          <Image src="/logo.webp" alt="TechSpace_Logo" className="" fill />
        </Link>
        {/*//! Menu items for larger devices and mapping through the links */}
        <ul className="max-lg:hidden">
          {navLinks.map((navlink) => (
            <li key={navlink.label} className={`inline-block px-8`}>
              <Link
                href={navlink.path}
                className={`font-montserrat text-base leading-normal cursor-pointer text-slate-600 hover:text-slate-900`}
              >
                {navlink.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center lg:gap-x-6 gap-x-4">
          <ModeToggle />
          <Link href="/contact">
            <Button className="hidden lg:flex bg-[#0f172a] text-white hover:bg-[#111728]">
              Contact Us
            </Button>
          </Link>
          <Menu
            className="hidden text-3xl text-black cursor-pointer max-lg:block"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </div>
      </nav>

      {/*//! Responsive menu for smaller devices */}
      {isMenuOpen && (
        <div>
          <nav className="lg:bottom-auto bg-[#111728] fixed top-16 bottom-0 left-0 right-0 z-[8888888] ">
            {/* Close button for the menu */}
            <div
              className="fixed right-0 hidden px-8 py-4 cursor-pointer max-lg:block"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <X className="text-3xl text-white " />
            </div>
            <ul className="z-40 flex flex-col items-center justify-center h-full lg:hidden bg-1 gap-y-7">
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
                    href={navlink.path}
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    className="text-2xl leading-normal text-white font-montserrat active:text-black"
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
