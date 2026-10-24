import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-cream"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-16 sm:w-[calc(100%-4rem)] sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <FadeIn>
            <figure className="mx-auto max-w-[460px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-[0_24px_60px_-36px_rgba(75,20,43,0.48)] ring-4 ring-white/70">
                <Image
                  src="/images/prof-imgs/grace-one.webp"
                  alt={siteContent.about.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 38vw, (min-width: 640px) 65vw, 90vw"
                  className="object-cover object-[center_42%]"
                />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 pl-1 text-sm">
                <span className="font-medium text-burgundy-dark">
                  {siteContent.practitioner.name}
                </span>
                <span aria-hidden="true" className="text-burgundy/50">
                  ·
                </span>
                <span className="text-stone-600">{siteContent.location}</span>
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn>
            <div className="mx-auto max-w-[650px]">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
                {siteContent.about.eyebrow}
              </p>
              <h2
                id="about-title"
                className="font-display text-4xl leading-[1.08] tracking-[-0.035em] text-burgundy-dark sm:text-5xl"
              >
                {siteContent.about.title}
              </h2>
              <p className="mt-6 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
                {siteContent.practitioner.bio}
              </p>

              <div className="mt-9">
                <h3 className="font-display text-2xl text-burgundy-dark sm:text-3xl">
                  {siteContent.about.approachTitle}
                </h3>
                <ol className="mt-3">
                  {siteContent.approach.map((step) => (
                    <li
                      key={step.number}
                      className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-burgundy/15 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-5"
                    >
                      <span className="pt-0.5 font-display text-xl text-burgundy sm:text-2xl">
                        {step.number}
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-burgundy-dark sm:text-lg">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-stone-600 sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
