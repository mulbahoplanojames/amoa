import { Globe, Palette, Smartphone, Users } from "lucide-react";
import { NavlinksType } from "../Types/NavTypes";

const navLinks: NavlinksType[] = [
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default navLinks;

// Services Data

export const servicesData = [
  {
    title: "Website Design",
    description:
      "Create stunning, responsive websites that captivate your audience and drive conversions.",
    icon: Globe,
  },
  {
    title: "App Development",
    description:
      "Build powerful, user-friendly applications for web and mobile platforms.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft intuitive interfaces and seamless user experiences that delight your customers.",
    icon: Palette,
  },
  {
    title: "Graphic Design",
    description:
      "Develop eye-catching visuals that communicate your brand message effectively.",
    icon: Users,
  },
];
