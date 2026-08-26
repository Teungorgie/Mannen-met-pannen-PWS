"use client";

import { useState } from "react";
import { FAQS } from "@/lib/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-olive-dark/10 rounded-xl border border-olive-dark/10 bg-cream-soft">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span className="font-display text-lg text-bark">{item.question}</span>
              <span
                aria-hidden="true"
                className={`shrink-0 text-2xl text-terracotta transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-bark/75">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
