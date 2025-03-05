"use client";

import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    category: "Insurance",
    questions: [
      {
        question: "What types of insurance can I compare on CompareWise?",
        answer:
          "CompareWise allows you to compare various insurance types including car insurance, home insurance, life insurance, and business insurance from Namibia's leading providers.",
      },
      {
        question: "How long does it take to get an insurance quote?",
        answer:
          "Most quotes are instant. However, some specialized insurance types might take up to 24 hours as they require additional verification from providers.",
      },
      {
        question: "Are the quotes binding?",
        answer:
          "No, quotes are estimates based on the information you provide. Final premiums may vary after detailed assessment by the insurance provider.",
      },
    ],
  },
  {
    category: "Loans",
    questions: [
      {
        question: "What loan types are available for comparison?",
        answer:
          "We offer comparisons for personal loans, home loans, business loans, and debt consolidation loans from major Namibian banks and financial institutions.",
      },
      {
        question: "What factors affect loan interest rates?",
        answer:
          "Interest rates are influenced by your credit score, income, loan amount, term length, and current market conditions.",
      },
    ],
  },
  {
    category: "Account & Security",
    questions: [
      {
        question: "Is my personal information secure?",
        answer:
          "Yes, we use bank-level encryption to protect your data. We never share your personal information without your explicit consent.",
      },
      {
        question: "Do I need to create an account to get quotes?",
        answer:
          "While you can browse rates without an account, creating one allows you to save quotes and track applications.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-full">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-200 text-center max-w-2xl mx-auto">
            Find answers to common questions about insurance, loans, and our
            services
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {faqs.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => (
                  <Disclosure key={index}>
                    {({ open }) => (
                      <div className="border border-gray-200 rounded-lg">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-left">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open ? "transform rotate-180" : ""
                            } w-5 h-5 text-gray-500`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 py-4 text-gray-600 border-t border-gray-100">
                          {faq.answer}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
