"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search } from "lucide-react";
import FAQItem from "./FAQItem";
import { faqItems } from "@/data/faq-list";

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Filter FAQ items based on search query
  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get unique categories
  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  // Toggle FAQ item expansion
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto relative">
            Find answers to the most common questions about AMOA.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="Search for questions or keywords.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ Categories and Items */}
        {searchQuery ? (
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Search Results</h3>
            {filteredFAQs.length === 0 ? (
              <p className="text-center py-8 text-gray-500">
                No results found. Please try a different search term.
              </p>
            ) : (
              filteredFAQs.map((faq, index) => (
                <FAQItem
                  key={index}
                  faq={faq}
                  isExpanded={expandedIndex === index}
                  onToggle={() => toggleExpand(index)}
                  highlightText={searchQuery}
                />
              ))
            )}
          </div>
        ) : (
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className="grid grid-cols-5 md:grid-cols-6 mb-3 bg-purple-50 p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category}
                value={category}
                className="space-y-4 mt-2"
              >
                {faqItems
                  .filter((item) => item.category === category)
                  .map((faq, index) => (
                    <FAQItem
                      key={index}
                      faq={faq}
                      isExpanded={
                        expandedIndex ===
                        faqItems.findIndex((f) => f.question === faq.question)
                      }
                      onToggle={() =>
                        toggleExpand(
                          faqItems.findIndex((f) => f.question === faq.question)
                        )
                      }
                    />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        )}

        {/* Contact section */}
        <div className="mt-8 p-6 bg-purple-600 text-white rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-700 rounded-full -ml-20 -mb-20 opacity-50" />

          <div className="relative">
            <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
            <p className="mb-4 text-blue-100">
              Our customer support team is here to help you with any questions
              you may have.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              Get in touch
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual FAQ Item component with animations
