import { ServiceDataType } from "@/types/types";

import {
  Globe,
  Palette,
  Users,
  ChartNoAxesCombined,
  NotebookPen,
  MonitorCog,
  ServerCog,
  BookCopy,
} from "lucide-react";

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
    title: "Professional Courses",
    description:
      "Learn from a wide range of courses to enhance your skills and knowledge.",
    icon: BookCopy,
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
