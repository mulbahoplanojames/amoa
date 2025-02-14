import { testimonialsData } from "@/data/testimonials";
import { Card, CardContent } from "./ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="md:py-20 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-auto mt-12"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="dark:bg-white">
                    <CardContent className="flex flex-col rounded-lg shadow-lg overflow-hidden p-6">
                      <div className="flex-1">
                        <p className="text-lg font-medium text-gray-900">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 md:-left-8" />
          <CarouselNext className="absolute -right-5 md:-right-8" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
