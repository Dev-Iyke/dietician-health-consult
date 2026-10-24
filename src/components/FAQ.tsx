"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="scroll-mt-20 border-t border-burgundy/10 bg-white"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-16 sm:w-[calc(100%-4rem)] sm:py-20 lg:py-24">
        <FadeIn>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
              {siteContent.faqSection.eyebrow}
            </p>
            <h2
              id="faqs-title"
              className="font-display text-4xl leading-[1.08] tracking-[-0.035em] text-burgundy-dark sm:text-5xl"
            >
              {siteContent.faqSection.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              {siteContent.faqSection.description}
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 max-w-[900px] border-t border-burgundy/20 sm:mt-12">
          {siteContent.faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <FadeIn key={item.question}>
                <article
                  className={`border-b border-burgundy/20 transition-colors duration-200 ${isOpen ? "border-l-2 border-l-burgundy bg-[#fcf9f6] pl-4 sm:pl-6" : "pl-4 hover:bg-cream/60 sm:pl-6"}`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy sm:py-6"
                      onClick={() =>
                        setOpenIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                    >
                      <span className="flex items-start gap-4 sm:gap-5">
                        <span className="mt-0.5 font-display text-sm text-burgundy/55 sm:text-base">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-medium leading-6 text-burgundy-dark sm:text-lg sm:leading-7">
                          {item.question}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex size-8 shrink-0 items-center justify-center border border-burgundy/15 text-burgundy transition-[background-color,color,transform] duration-200 ${isOpen ? "rotate-180 bg-burgundy text-white" : "bg-white"}`}
                      >
                        <ChevronDown size={17} strokeWidth={1.8} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={answerId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-[740px] pb-6 pl-9 pr-3 text-sm leading-6 text-stone-700 sm:pb-7 sm:pl-11 sm:text-base sm:leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
