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
import { Course } from "@/types/types";
import { courses } from "@/data/courses";
import FeaturedCourses from "@/components/courses/FeaturedCourses";
import Survey from "@/components/courses/Survey";

export const metadata = {
  title: "Courses | TechFusion",
  description:
    "Explore our technology courses and advance your career with cutting-edge skills",
};

export default function CoursesPage() {
  const featuredCourses: Course[] = courses.filter((course) => course.featured);
  const regularCourses: Course[] = courses.filter((course) => !course.featured);

  return (
    <div className="">
      <div className="mb-12 text-center pt-32 pb-12 bg-slate-50">
        <h1 className="text-4xl font-bold mb-4">Our Tech Courses</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Advance your career with our industry-leading technology courses
          taught by experienced professionals.
        </p>
      </div>

      {featuredCourses.length > 0 && (
        <section className="mb-16 container mx-auto px-2 ">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <FeaturedCourses featuredCourses={featuredCourses} />
        </section>
      )}

      <section className="container mx-auto px-2 ">
        <h2 className="text-2xl font-bold mb-8">All Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {regularCourses.map((course) => (
            <Card key={course.id} className="flex flex-col h-full">
              <div className="relative h-56">
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
