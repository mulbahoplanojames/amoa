import { whyChooseUsData } from "@/Data/Data_2";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const WhyChooseUs = () => {
  return (
    <>
      <section className="py-12 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-200">
              Build a Website That Your Customers Will Love
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto dark:text-slate-400">
              Our team of experts has years of experience crafting websites and
              web applications. We have a proven track record of delivering fast
              and on time
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 gap-y-6 md:px-14 px-2 mt-12 place-items-center">
          {whyChooseUsData.map((service) => (
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
      </section>
    </>
  );
};

export default WhyChooseUs;
