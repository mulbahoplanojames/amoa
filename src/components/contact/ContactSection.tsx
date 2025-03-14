"use client";

import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contact_message_subject: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  interface ApiResponse {
    success: boolean;
    message: string;
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    setFormStatus("submitting");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data: ApiResponse = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormStatus("success");
      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        contact_message_subject: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setFormStatus("error");
      setResult(data.message);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: "Our Location",
      details: ["KG 123", "Gisozi, Kigali", "Rwanda"],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary_clr" />,
      title: "Phone Number",
      details: ["(+250) 791 676 207 ", "(+250) 792 574 452"],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary_clr" />,
      title: "Email Address",
      details: ["mulbahjamesoplano@gmail.com", "abdallahaleer@gmail.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary_clr" />,
      title: "Working Hours",
      details: ["Monday - Sunday: 24/7"],
    },
  ];

  return (
    <section className="pb-20 pt-16">
      <div className="container mx-auto px-2 md:px-10">
        <div className="max-w-8xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              ref={ref}
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h2 className="text-2xl font-bold mb-4">
                Let&apos;s Start a Conversation
              </h2>
              <p className=" mb-6">
                Have a project in mind or just want to say hello? Fill out the
                form and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    variants={fadeIn}
                  >
                    <div className="flex-shrink-0 md:w-12 w-6 md:h-12 h-6 p-1 bg-purple-50 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold md:text-lg text-base mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p
                          key={i}
                          className="text-gray-600 text-sm md:text-base"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. We&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="subject"
                    value="Customer Support: New Submission from Newcasa Global -- Contact Form Page"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="contact_message_subject"
                        value={formData.contact_message_subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option selected hidden>
                          Select a subject
                        </option>
                        <option value="Website Design">Website Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Professional Courses">
                          Professional Courses
                        </option>
                        <option value="UX/UI Design">UX/UI Design</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="SEO & Content Writing">
                          SEO & Content Writing
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex items-center justify-center bg-primary_clr text-white px-6 py-3 rounded-lg font-medium hover:bg-primary_clr/80 cursor-pointer transition-colors disabled:bg-blue-400"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-500 mt-2">{result}</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
