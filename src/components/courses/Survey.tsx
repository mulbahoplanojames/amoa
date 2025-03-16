import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Survey = () => {
  return (
    <>
      <section className="mt-20 bg-muted/50 rounded-xl p-8 md:p-12 container mx-auto px-2 ">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to advance your tech career?
            </h2>
            <p className="text-muted-foreground mb-4">
              Our courses are designed to give you the skills employers are
              looking for. Fill out our quick survey to help us understand your
              goals and learning preferences.
            </p>
            <Button size="lg" asChild>
              <Link href="/courses/survey">
                Take the Survey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:w-1/3 relative h-60 md:h-80">
            <Image
              src="/assets/ab3.jpg"
              alt="Student learning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Survey;
