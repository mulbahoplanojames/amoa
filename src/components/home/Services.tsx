import { servicesData } from "@/data/services-data";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Services = () => {
  return (
    <>
      <section className="md:py-20 py-16 bg-s1 " id="/services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase ">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Everything you need to succeed online
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From concept to execution, we provide end-to-end digital solutions
              tailored to your unique needs.
            </p>
          </div>

          <div className="mt-14">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {servicesData.map((service) => (
                <Card
                  key={service.title}
                  className="dark:bg-white hover:scale-105 transition-all duration-300"
                >
                  <CardHeader>
                    <service.icon className="h-10  w-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-gray-900 text-xl ">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-500 md:text-base text-lg">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
