import { ArrowUpRight, Check, Clock3 } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

export function Packages() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="scroll-mt-20 border-t border-burgundy/10 bg-white"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-16 sm:w-[calc(100%-4rem)] sm:py-20 lg:py-24">
        <FadeIn>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
              {siteContent.packageSection.eyebrow}
            </p>
            <h2
              id="packages-title"
              className="font-display text-4xl leading-[1.08] tracking-[-0.035em] text-burgundy-dark sm:text-5xl"
            >
              {siteContent.packageSection.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              {siteContent.packageSection.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid items-stretch gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.packages.map((program) => {
            const featured = "featured" in program && program.featured;

            return (
              <div key={program.name}>
                <FadeIn className="h-full w-full">
                  <article
                    className={`flex h-full flex-col rounded-lg border p-4 shadow-[0_14px_38px_-32px_rgba(75,20,43,0.65)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_45px_-26px_rgba(75,20,43,0.35)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-xl sm:p-7 ${featured ? "border-burgundy-dark bg-burgundy-dark text-white" : "border-burgundy/15 bg-cream text-burgundy-dark"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${featured ? "text-white/65" : "text-stone-500"}`}
                        >
                          Nutrition program
                        </p>
                        <h3 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
                          {program.name}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 border px-2.5 py-1.5 text-xs ${featured ? "border-white/25 bg-white/10 text-white/90" : "border-burgundy/15 bg-white/70 text-burgundy-dark"}`}
                      >
                        <Clock3 aria-hidden="true" size={14} />
                        {program.duration}
                      </span>
                    </div>

                    <div
                      className={`mt-6 border-t pt-5 ${featured ? "border-white/20" : "border-burgundy/15"}`}
                    >
                      <p className="font-display text-4xl leading-none sm:text-5xl">
                        {program.price}
                      </p>
                    </div>

                    <p
                      className={`mt-4 text-sm leading-6 ${featured ? "text-white/80" : "text-stone-700"}`}
                    >
                      {program.description}
                    </p>

                    <p
                      className={`mt-4 border-l-2 pl-3 text-sm leading-6 ${featured ? "border-white/50 text-white/80" : "border-burgundy/40 text-stone-700"}`}
                    >
                      <span className="font-semibold">Best for: </span>
                      {program.bestFor}
                    </p>

                    <div className="mt-6">
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${featured ? "text-white/65" : "text-stone-500"}`}
                      >
                        What’s included
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {program.includes.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2.5 text-sm leading-5 ${featured ? "text-white/90" : "text-stone-700"}`}
                          >
                            <Check
                              aria-hidden="true"
                              size={16}
                              className={`mt-0.5 shrink-0 ${featured ? "text-[#f1c7d0]" : "text-burgundy"}`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-7">
                      <Button
                        className="w-full"
                        href={siteContent.bookingUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant={featured ? "secondary" : "outline"}
                        icon={<ArrowUpRight aria-hidden="true" size={16} />}
                      >
                        Book {program.name}
                      </Button>
                    </div>
                  </article>
                </FadeIn>
              </div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-stone-500 sm:text-sm">
          {siteContent.packageSection.bookingNote}
        </p>

      </div>
    </section>
  );
}
