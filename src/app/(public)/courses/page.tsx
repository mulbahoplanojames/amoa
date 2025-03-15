import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, Users, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FeaturesCourses from "@/components/courses/FeaturesCourses";
import Survey from "./Survey";

export interface Course {
  id: number;
  image: string;
  title: string;
  level: string;
  description: string;
  duration: string;
  startDate: string;
  students: number;
  tags: string[];
  featured: boolean;
}

// Sample course data - in a real app, this would come from a database or API
const courses: Course[] = [
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

export const metadata = {
  title: "Courses | TechFusion",
  description:
    "Explore our technology courses and advance your career with cutting-edge skills",
};

export default function CoursesPage() {
  const featuredCourses: Course[] = courses.filter((course) => course.featured);
  const regularCourses: Course[] = courses.filter((course) => !course.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Tech Courses</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Advance your career with our industry-leading technology courses
          taught by experienced professionals.
        </p>
      </div>

      {featuredCourses.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <FeaturesCourses featuredCourses={featuredCourses} />
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold mb-8">All Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularCourses.map((course) => (
            <Card key={course.id} className="flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                <CardTitle className="mb-2">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{course.startDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{course.tags.length} modules</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full">
                  <Link href="/courses/survey">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <Survey />
    </div>
  );
}
