import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Course } from "@/types/types";

interface FeaturedCoursesProps {
  featuredCourses: Course[];
}

const FeaturesCourses = ({ featuredCourses }: FeaturedCoursesProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="md:flex h-full">
              <div className="relative h-60 md:h-auto md:w-2/5">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-6 md:w-3/5">
                <CardHeader className="p-0 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="mb-2">{course.title}</CardTitle>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 pb-4 flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
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
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4 flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {course.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                    {course.tags.length > 2 && (
                      <Badge variant="outline">+{course.tags.length - 2}</Badge>
                    )}
                  </div>
                  <Button asChild>
                    <Link href="/courses/survey">Apply Now</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FeaturesCourses;
