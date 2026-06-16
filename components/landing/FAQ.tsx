"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Who is Beyondbrnd for?",
    answer:
      "We work with founders, consultants, CXOs, and business owners who want to attract more opportunities through LinkedIn",
  },
  {
    question: "Do I need a large LinkedIn following to work with you?",
    answer:
      "No. We've helped clients with small audiences build authority, generate leads, and grow their visibility.",
  },
  {
    question: "Do you only manage LinkedIn content?",
    answer:
      "No. We handle positioning, profile optimisation, content strategy, content creation, and growth support end-to-end.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients start seeing increased visibility and engagement within the first 30-60 days. Business outcomes typically follow with consistency.",
  },
  {
    question: "Can LinkedIn really help me get clients or business opportunities?",
    answer:
      "Yes. When your profile, content, and positioning are aligned, LinkedIn becomes a powerful channel for attracting leads, partnerships, talent, and investors.",
  },
  {
    question: "How much time will I need to dedicate every week?",
    answer:
      "Just 1 hour per week. We'll handle the strategy, content, and execution. Your role is simply to share insights, experiences, and feedback during a short weekly call.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="glass-section py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Frequently Asked <span className="text-[#00bf63]">Questions</span>
            </h2>

            <div className="mt-8 rounded-2xl bg-[#F8F8F8] p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00bf63]">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-black">
                  Still have questions?
                </h3>
              </div>

              <p className="mb-4 text-sm leading-6 text-black/60">
                Can&apos;t find the answer you&apos;re looking for? Feel free to
                contact the founder.
              </p>

              <a
                href="https://www.linkedin.com/in/bhartichilkoti/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#00bf63] hover:underline"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${isOpen
                      ? "border-[#00bf63] bg-[#FAFAFA]"
                      : "border-[#E8E8E8] hover:border-[#CCCCCC]"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[#00bf63]">
                        ?
                      </span>
                      <span className="text-sm font-medium text-black">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                          ? "bg-[#00bf63] text-white"
                          : "bg-[#F5F5F5] text-[#00bf63]"
                        }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[260px]" : "max-h-0"
                      }`}
                  >
                    <div className="px-5 pb-5 pt-0">
                      <p className="pl-6 text-sm leading-relaxed text-black/60">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
