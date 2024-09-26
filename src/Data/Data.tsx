import {
  Globe,
  Palette,
  Smartphone,
  Users,
  ChartNoAxesCombined,
  NotebookPen,
  MonitorCog,
  ServerCog,
} from "lucide-react";
import { NavlinksType, ProjectsType, ServiceDataType } from "../Types/Types";
import { Description } from "@radix-ui/react-dialog";

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

// --------------------------------------------------------------------------------------
// Services Data

export const servicesData: ServiceDataType[] = [
  {
    title: "Website Design",
    description:
      "Create stunning, responsive websites that captivate your audience and drive conversions.",
    icon: Globe,
  },
  {
    title: "Web Development",
    description:
      "Develop custom web applications tailored to your business needs.",
    icon: ChartNoAxesCombined,
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
  {
    title: "SEO & Content Writing",
    description:
      "Boost your online visibility and drive organic traffic to your website.",
    icon: NotebookPen,
  },
  {
    title: "Top Performance",
    description:
      "Our team of experts ensures that your website is optimized for search engines.",
    icon: MonitorCog,
  },
  {
    title: "24/7 Support",
    description:
      "We offer 24/7 support to ensure that your website is always up and running.",
    icon: ServerCog,
  },
];

// --------------------------------------------------------------------------------------
// Projects Data

import projectImg_1 from "/src/assets/tech.jpg";
import projectImg_2 from "/src/assets/tech1.jpg";
import projectImg_3 from "/src/assets/logo.jpg";
import projectImg_4 from "/src/assets/logo.jpg";
import projectImg_5 from "/src/assets/logo1.jpg";
import projectImg_6 from "/src/assets/tech.jpg";

export const projectsData: ProjectsType[] = [
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive online store with seamless checkout experience.",
    image: projectImg_1,
  },
  {
    title: "Fitness App",
    description: "Mobile application for tracking workouts and nutrition.",
    image: projectImg_2,
  },
  {
    title: "Corporate Website",
    description: "Modern and professional website for a Fortune 500 company.",
    image: projectImg_3,
  },
  {
    title: "Corporate Website",
    description: "Modern and professional website for a Fortune 500 company.",
    image: projectImg_4,
  },
  {
    title: "Corporate Website",
    description: "Modern and professional website for a Fortune 500 company.",
    image: projectImg_5,
  },
  {
    title: "Corporate Website",
    description: "Modern and professional website for a Fortune 500 company.",
    image: projectImg_6,
  },
];
