import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQItemType } from "@/types/types";
import { cn } from "@/lib/utils";

export default function FAQItem({
  faq,
  isExpanded,
  onToggle,
  highlightText = "",
}: {
  faq: FAQItemType;
  isExpanded: boolean;
  onToggle: () => void;
  highlightText?: string;
}) {
  // Function to highlight matching text
  const highlightMatches = (text: string) => {
    if (!highlightText) return text;

    const parts = text.split(new RegExp(`(${highlightText})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === highlightText.toLowerCase() ? (
        <span key={i} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={cn(
        "border rounded-lg overflow-hidden transition-all duration-200",
        isExpanded
          ? "border-blue-200 shadow-md bg-white"
          : "border-gray-200 bg-white"
      )}
    >
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <h3 className="font-medium text-gray-900">
          {highlightMatches(faq.question)}
        </h3>
        <div className="ml-2 flex-shrink-0">
          {isExpanded ? (
            <Minus className="h-5 w-5 text-blue-500" />
          ) : (
            <Plus className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 prose max-w-none">
              <div className="pt-2 border-t border-gray-200" />
              <p className="text-gray-600 mt-2">
                {highlightMatches(faq.answer)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
