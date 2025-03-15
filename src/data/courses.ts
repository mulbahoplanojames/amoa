import { Course } from "@/types/types";

export const courses: Course[] = [
  {
    id: 1,
    title: "Advanced Web Development",
    description:
      "Master modern web technologies including React, Next.js, and serverless architecture.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Advanced",
    duration: "12 weeks",
    startDate: "April 15, 2024",
    students: 24,
    tags: ["React", "Next.js", "JavaScript", "Serverless"],
    featured: true,
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    description:
      "Learn the core concepts of machine learning and build practical AI applications.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate",
    duration: "10 weeks",
    startDate: "May 1, 2024",
    students: 18,
    tags: ["Python", "TensorFlow", "Data Science", "AI"],
    featured: true,
  },
  {
    id: 3,
    title: "Cloud Architecture & DevOps",
    description:
      "Design scalable cloud solutions and implement modern DevOps practices.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Advanced",
    duration: "8 weeks",
    startDate: "April 10, 2024",
    students: 16,
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    featured: false,
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile applications using React Native and JavaScript.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Intermediate",
    duration: "8 weeks",
    startDate: "May 20, 2024",
    students: 20,
    tags: ["React Native", "JavaScript", "Mobile", "iOS", "Android"],
    featured: false,
  },
  {
    id: 5,
    title: "Blockchain Development",
    description:
      "Learn to build decentralized applications and smart contracts on blockchain platforms.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Advanced",
    duration: "10 weeks",
    startDate: "June 5, 2024",
    students: 15,
    tags: ["Blockchain", "Ethereum", "Solidity", "Web3"],
    featured: false,
  },
  {
    id: 6,
    title: "UI/UX Design Principles",
    description:
      "Master the fundamentals of user interface and experience design for digital products.",
    image: "/placeholder.svg?height=400&width=600",
    level: "Beginner",
    duration: "6 weeks",
    startDate: "April 25, 2024",
    students: 22,
    tags: ["UI", "UX", "Figma", "Design Systems"],
    featured: false,
  },
];
