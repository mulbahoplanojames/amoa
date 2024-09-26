import { FaceIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import { ModeToggle } from "../../components/mode-toggle";
import navLinks from "../../Data/Data";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center sm:px-6 lg:px-14 px-3 lg:py-5 py-3 bg-white shadow-lg fixed w-full z-50">
        {/* Logo  */}
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

        {/* NavLinks  */}
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

        {/* Mode Toggle and responsive Nav */}
        <div className="flex justify-center items-center gap-3">
          <ModeToggle />
          <Button className="hidden lg:flex">Get Started</Button>
          <FaceIcon className="h-6 w-6 lg:hidden static" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
