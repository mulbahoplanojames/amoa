import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const faqList = [
  {
    isActive: true,
    question: "What is Easy Frontend?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Who is Easy Frontend for?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "How does Easy Frontend work?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "How often does your team upload resources?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Can I get a refund if I cancel my subscription?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Can I use Easy Frontend designs in my portfolio?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Can I buy Easy Frontend extended license?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive || false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen && "active"}>
      <a
        href="#!"
        className="btn px-0 py-4 w-full text-start flex justify-between items-center"
        onClick={toggleFaq}
      >
        <span>{faq.question}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } border-l-2 border-blue-600 mb-4`}
      >
        <div className="px-6">
          <p className="opacity-50">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

const Faq11 = () => {
  return (
    <section className="ezy__faq11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-16 md:px-8 lg:px-28">
        <div className="grid grid-cols-12 justify-between relative gap-6">
          <div className="col-span-12 md:col-span-4 col-md-4">
            <div
              className="bg-center bg-no-repeat bg-cover min-h-[150px] w-full rounded-2xl md:w-screen float-right -mr-[150px] h-full"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg)",
              }}
            ></div>
          </div>

          <div className="col-span-12 md:col-span-8 lg:pl-12 lg:py-12">
            <div className="bg-white shadow dark:shadow-none dark:bg-[#1E2735] p-6 md:my-24">
              {faqList.map((faq, i) => (
                <FaqItem faq={faq} key={i} />
              ))}

              <button className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white rounded transition py-3 px-9 my-6">
                View All FAQ's
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
