import { faqList } from "@/data/faq-list";
import FaqItem from "./FAQItem";
import { FaqListType } from "@/types/types";

const FAQ = () => {
  return (
    <section className="text-zinc-900 dark:text-white pb-12">
      <h2 className="md:text-4xl text-center text-3xl pb-4 font-semibold">
        Frequently Asked Questions
      </h2>
      <div className="container px-3  mx-auto">
        <div className="bg-white  dark:bg-[#1E2735] p-6 ">
          {faqList.map((faq: FaqListType) => (
            <FaqItem faq={faq} key={faq.question} />
          ))}

          <button className="bg-transparent hover:bg-purple-700 border border-purple-700 hover:text-white rounded transition py-3 px-9 my-6">
            Have a Question?
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
