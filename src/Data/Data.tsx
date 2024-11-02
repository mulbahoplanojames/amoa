// Importing icons from lucide
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

// Importing Types from Types
import {
  NavlinksType,
  ProjectsType,
  ServiceDataType,
  TestimonialType,
} from "../Types/Types";

// Navlinks Data
const navLinks: NavlinksType[] = [
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Templates",
    path: "/templates",
  },

  {
    label: "Testimonials",
    path: "/testimonials",
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

// Web images
import web_1 from "/src/assets/booksaw_template.png";
import web_2 from "/src/assets/wilmaHealth.png";
// import web_3 from "/src/assets/portfolio.png";
import web_4 from "/src/assets/wlifix.png";
// import web_5 from "/src/assets/web1.jpg";

// mobile images
import mobile_1 from "/src/assets/mobile1.jpg";
import mobile_2 from "/src/assets/mobile2.jpg";
import mobile_3 from "/src/assets/mobile3.jpg";
// import mobile_4 from "/src/assets/mobile4.jpg";
// import mobile_5 from "/src/assets/mobile5.jpg";

// UI/UX Design images
import ux_1 from "/src/assets/tech.jpg";
import ux_2 from "/src/assets/tech1.jpg";
import ux_3 from "/src/assets/logo.jpg";
// import ux_4 from "/src/assets/logo.jpg";

export const projectsData: ProjectsType[] = [
  // Web Development
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive online book store with seamless checkout experience.",
    image: web_1,
    category: "web development",
    link: "https://booksaw.vercel.app/",
  },
  {
    title: "Booking System",
    description: "An online booking system for Doctor health and wellness.",
    image: web_2,
    category: "web development",
    link: "https://wilmahealth.vercel.app/",
  },
  {
    title: "Movie App",
    description: "This is a movie app that allows you to search for movies.",
    image: web_4,
    category: "web development",
    link: "https://wilfixmovieapp.vercel.app/",
  },
  // {
  //   title: "Blog Platform",
  //   description: "A blogging platform for writers and readers.",
  //   image: web_4,
  //   category: "web development",
  //   link: "https://example.com/blog-platform",
  // },
  // {
  //   title: "Online Learning Portal",
  //   description:
  //     "An interactive platform for online courses and learning resources.",
  //   image: web_5,
  //   category: "web development",
  //   link: "https://example.com/online-learning",
  // },

  // Mobile Development
  {
    title: "Fitness Tracker App",
    description: "Mobile application for tracking workouts and nutrition.",
    image: mobile_1,
    category: "mobile development",
    link: "https://example.com/fitness-app",
  },
  {
    title: "Recipe Finder App",
    description: "An application to discover and save recipes.",
    image: mobile_2,
    category: "mobile development",
    link: "https://example.com/recipe-app",
  },
  {
    title: "Travel Planner App",
    description: "An app to help users plan their travel itineraries.",
    image: mobile_3,
    category: "mobile development",
    link: "https://example.com/travel-planner",
  },
  // {
  //   title: "Expense Tracker App",
  //   description: "An application for tracking personal finances and expenses.",
  //   image: mobile_3,
  //   category: "mobile development",
  //   link: "https://example.com/expense-tracker",
  // },
  // {
  //   title: "Language Learning App",
  //   description: "An interactive app for learning new languages.",
  //   image: "path/to/projectImg_10.jpg",
  //   category: "mobile development",
  //   link: "https://example.com/language-learning",
  // },

  // UI/UX Design
  {
    title: "E-commerce App Redesign",
    description:
      "UI/UX redesign of a popular e-commerce app to enhance user experience.",
    image: ux_1,
    category: "ui/ux design",
    link: "https://example.com/ecommerce-redesign",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Design of a dashboard for managing social media accounts effectively.",
    image: ux_2,
    category: "ui/ux design",
    link: "https://example.com/social-media-dashboard",
  },
  {
    title: "Corporate Branding Project",
    description:
      "UI/UX design for a corporate branding project, including logo and website.",
    image: ux_3,
    category: "ui/ux design",
    link: "https://example.com/corporate-branding",
  },
  // {
  //   title: "Mobile App UX Research",
  //   description: "User research and testing for a mobile application project.",
  //   image: ux_4,
  //   category: "ui/ux design",
  //   link: "https://example.com/mobile-app-research",
  // },
  // {
  //   title: "Landing Page Design",
  //   description:
  //     "Design of a high-converting landing page for a marketing campaign.",
  //   image:ux_4,
  //   category: "ui/ux design",
  //   link: "https://example.com/landing-page-design",
  // },

  // Digital Marketing
  // {
  //   title: "SEO Optimization Project",
  //   description:
  //     "SEO strategy and implementation for a local business website.",
  //   image: "path/to/projectImg_16.jpg",
  //   category: "digital marketing",
  //   link: "https://example.com/seo-optimization",
  // },
  // {
  //   title: "Social Media Marketing Campaign",
  //   description:
  //     "A comprehensive marketing campaign across various social media platforms.",
  //   image: "path/to/projectImg_17.jpg",
  //   category: "digital marketing",
  //   link: "https://example.com/social-media-campaign",
  // },
  // {
  //   title: "Email Marketing Strategy",
  //   description: "Development and execution of an email marketing strategy.",
  //   image: "path/to/projectImg_18.jpg",
  //   category: "digital marketing",
  //   link: "https://example.com/email-marketing",
  // },
  // {
  //   title: "Content Marketing Plan",
  //   description:
  //     "Creation of a content marketing strategy to increase brand visibility.",
  //   image: "path/to/projectImg_19.jpg",
  //   category: "digital marketing",
  //   link: "https://example.com/content-marketing",
  // },
  // {
  //   title: "Pay-Per-Click Advertising",
  //   description: "Management of a PPC advertising campaign for a startup.",
  //   image: "path/to/projectImg_20.jpg",
  //   category: "digital marketing",
  //   link: "https://example.com/ppc-advertising",
  // },
];

// ---------------------------------------------------------------------------------
// Testimonial Data

import client_1 from "/src/assets/logo1.jpg";
import client_2 from "/src/assets/logo.jpg";
import client_3 from "/src/assets/tech1.jpg";
import client_4 from "/src/assets/logo.jpg";
import client_5 from "/src/assets/tech1.jpg";

export const testimonialsData: TestimonialType[] = [
  {
    content:
      "Working with this team was a game-changer for our online presence. They delivered a website that exceeded our expectations and significantly boosted our conversions.",
    author: "Jane Cooper",
    role: "CEO, TechCorp",
    image: client_1,
  },
  {
    content:
      "The UI/UX design for our app was spot-on. Our users love the intuitive interface, and we've seen a marked increase in user engagement since the redesign.",
    author: "John Doe",
    role: "Founder, FitnessPro",
    image: client_2,
  },
  {
    content:
      "Their graphic design work perfectly captured our brand essence. The new visual identity has received overwhelmingly positive feedback from our clients and partners.",
    author: "Alice Smith",
    role: "Marketing Director, CreativeCo",
    image: client_3,
  },
  {
    content:
      "The UI/UX design for our app was spot-on. Our users love the intuitive interface, and we've seen a marked increase in user engagement since the redesign.",
    author: "John Doe",
    role: "Founder, FitnessPro",
    image: client_4,
  },
  {
    content:
      "Their graphic design work perfectly captured our brand essence. The new visual identity has received overwhelmingly positive feedback from our clients and partners.",
    author: "Alice Smith",
    role: "Marketing Director, CreativeCo",
    image: client_5,
  },
];
