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
// Data/ProjectsData.js

export const projectsData: ProjectsType[] = [
  // Web Development
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive online store with seamless checkout experience.",
    image: projectImg_1,
    category: "web development",
    link: "https://example.com/e-commerce",
  },
  {
    title: "Corporate Website",
    description: "Modern and professional website for a Fortune 500 company.",
    image: projectImg_2,
    category: "web development",
    link: "https://example.com/corporate-website-1",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase skills and projects.",
    image: projectImg_3,
    category: "web development",
    link: "https://example.com/portfolio-website",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform for writers and readers.",
    image: "path/to/projectImg_4.jpg",
    category: "web development",
    link: "https://example.com/blog-platform",
  },
  {
    title: "Online Learning Portal",
    description:
      "An interactive platform for online courses and learning resources.",
    image: "path/to/projectImg_5.jpg",
    category: "web development",
    link: "https://example.com/online-learning",
  },

  // Mobile Development
  {
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts and nutrition.",
    image: "path/to/projectImg_6.jpg",
    category: "mobile development",
    link: "https://example.com/fitness-app",
  },
  {
    title: "Recipe Finder App",
    description: "An application to discover and save recipes.",
    image: "path/to/projectImg_7.jpg",
    category: "mobile development",
    link: "https://example.com/recipe-app",
  },
  {
    title: "Travel Planner App",
    description: "An app to help users plan their travel itineraries.",
    image: "path/to/projectImg_8.jpg",
    category: "mobile development",
    link: "https://example.com/travel-planner",
  },
  {
    title: "Expense Tracker App",
    description: "An application for tracking personal finances and expenses.",
    image: "path/to/projectImg_9.jpg",
    category: "mobile development",
    link: "https://example.com/expense-tracker",
  },
  {
    title: "Language Learning App",
    description: "An interactive app for learning new languages.",
    image: "path/to/projectImg_10.jpg",
    category: "mobile development",
    link: "https://example.com/language-learning",
  },

  // UI/UX Design
  {
    title: "E-commerce App Redesign",
    description:
      "UI/UX redesign of a popular e-commerce app to enhance user experience.",
    image: "path/to/projectImg_11.jpg",
    category: "ui/ux design",
    link: "https://example.com/ecommerce-redesign",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Design of a dashboard for managing social media accounts effectively.",
    image: "path/to/projectImg_12.jpg",
    category: "ui/ux design",
    link: "https://example.com/social-media-dashboard",
  },
  {
    title: "Corporate Branding Project",
    description:
      "UI/UX design for a corporate branding project, including logo and website.",
    image: "path/to/projectImg_13.jpg",
    category: "ui/ux design",
    link: "https://example.com/corporate-branding",
  },
  {
    title: "Mobile App UX Research",
    description: "User research and testing for a mobile application project.",
    image: "path/to/projectImg_14.jpg",
    category: "ui/ux design",
    link: "https://example.com/mobile-app-research",
  },
  {
    title: "Landing Page Design",
    description:
      "Design of a high-converting landing page for a marketing campaign.",
    image: "path/to/projectImg_15.jpg",
    category: "ui/ux design",
    link: "https://example.com/landing-page-design",
  },

  // Digital Marketing
  {
    title: "SEO Optimization Project",
    description:
      "SEO strategy and implementation for a local business website.",
    image: "path/to/projectImg_16.jpg",
    category: "digital marketing",
    link: "https://example.com/seo-optimization",
  },
  {
    title: "Social Media Marketing Campaign",
    description:
      "A comprehensive marketing campaign across various social media platforms.",
    image: "path/to/projectImg_17.jpg",
    category: "digital marketing",
    link: "https://example.com/social-media-campaign",
  },
  {
    title: "Email Marketing Strategy",
    description: "Development and execution of an email marketing strategy.",
    image: "path/to/projectImg_18.jpg",
    category: "digital marketing",
    link: "https://example.com/email-marketing",
  },
  {
    title: "Content Marketing Plan",
    description:
      "Creation of a content marketing strategy to increase brand visibility.",
    image: "path/to/projectImg_19.jpg",
    category: "digital marketing",
    link: "https://example.com/content-marketing",
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Management of a PPC advertising campaign for a startup.",
    image: "path/to/projectImg_20.jpg",
    category: "digital marketing",
    link: "https://example.com/ppc-advertising",
  },
];
