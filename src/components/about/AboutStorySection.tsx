"use client";
import Image from "next/image";

export default function AboutStorySection() {
  return (
    <section className="pb-20 pt-14 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 ">Who We Are</h2>
          <p className="text-lg text-gray-600 dark:text-white">
            From a small startup tech company to an upcoming web development
            firm,
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/ab2.jpg"
                alt="Our story"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-lg"></div>
          </div>

          <div>
            <p className="text-gray-600 mb-6 dark:text-white">
              In today’s digital world, businesses and individuals struggle to
              establish a strong online presence due to poor design, lack of
              technical expertise, and inefficient user experiences. At AMOA, we
              bridge these gaps by offering comprehensive digital solutions
              tailored to businesses and students alike.
            </p>
            <p className="text-gray-600 mb-6 dark:text-white">
              For businesses, we provide expert web development, UI/UX design,
              SEO, content writing, and branding services to help them stand out
              and grow. For university students, we offer structured software
              courses and academic assistance, equipping them with the skills
              needed to thrive in the tech industry.
            </p>
            <p className="text-gray-600  dark:text-white">
              What sets AMOA apart is our all-in-one approach—combining
              creativity, innovation, and 24/7 support to ensure top-notch
              performance. Whether you’re a business looking to captivate your
              audience or a student eager to gain real-world experience, AMOA is
              your trusted partner in digital success.
            </p>
          </div>
        </div>

        {/* Timeline */}
      </div>
    </section>
  );
}
