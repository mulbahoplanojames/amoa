"use client";
import { team } from "@/data/team";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            The passionate people behind AMOA
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {team.map((member, index) => (
            <motion.div key={index} className="group" variants={fadeIn}>
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <div className="flex space-x-4 mt-2">
                {member?.socials?.map((social, socialIndex) => (
                  <Link
                    key={socialIndex}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-800"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
