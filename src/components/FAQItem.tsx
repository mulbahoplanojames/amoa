"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { FaqListType } from "@/types/types";

const FaqItem = ({ faq }: { faq: FaqListType }) => {
  const { question, answer } = faq;
  const [isOpen, setIsOpen] = useState(faq.isActive || false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen ? "active" : ""}>
      <a
        href="#!"
        className="btn px-0 py-4 w-full text-start flex justify-between items-center"
        onClick={toggleFaq}
      >
        <span>{question}</span>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } border-l-2 border-blue-600 mb-4`}
      >
        <div className="px-6">
          <p className="opacity-50">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
