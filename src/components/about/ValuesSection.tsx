"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Award, BicepsFlexed, Handshake, Layers } from "lucide-react";
import { useRef } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Innovation",
      description:
        "We thrive on creativity and cutting-edge technology, constantly exploring new ways to deliver impactful digital solutions that drive success.",
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      title: "Excellence",
      description:
        "Quality is at the heart of everything we do. From design and development to customer support, we ensure that every project meets the highest industry standards.",
    },
    {
      icon: <BicepsFlexed className="h-8 w-8 text-purple-500" />,
      title: "Empowerment",
      description:
        "We believe in equipping businesses with strong online identities and providing students with the knowledge and skills they need to excel in the tech industry.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-purple-500" />,
      title: "Collaboration",
      description:
        "Success is built on teamwork. We work closely with our clients and students, understanding their needs and turning their visions into reality.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 dark:text-black">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600">
            The principles that guide everything we do at AMOA
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white md:p-4 p-8 rounded-lg shadow-md border border-gray-100 text-center"
              variants={fadeIn}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
