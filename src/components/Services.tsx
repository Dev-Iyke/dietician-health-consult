import Image from "next/image";
import {
  Activity,
  HeartPulse,
  Leaf,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

const areaIcons: LucideIcon[] = [Activity, HeartPulse, Leaf, Sparkles];
const serviceImages = [
  {
    src: "/images/stock/balanced-home-meal.webp",
    alt: "Colorful home-cooked meals with vegetables, greens, and a variety of ingredients",
  },
  {
    src: "/images/stock/registered-dietitian-counselling.webp",
    alt: "A dietitian having a warm, collaborative nutrition conversation with a client",
  },
  {
    src: "/images/stock/meals-and-notebook.webp",
    alt: "An open meal-planning notebook beside fresh salad and ingredients",
  },
];
const areaLayouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];
const areaThemes = [
  {
    card: "bg-burgundy text-white",
    icon: "bg-white/15 text-white",
    detail: "text-white/80",
    concern: "border-white/30 text-white",
    number: "text-white/10",
  },
  {
    card: "bg-[#f2e8df] text-burgundy-dark",
    icon: "bg-white/70 text-burgundy",
    detail: "text-stone-700",
    concern: "border-stone-300 text-burgundy-dark",
    number: "text-stone-400",
  },
  {
    card: "bg-[#f5eeee] text-burgundy-dark",
    icon: "bg-white/75 text-burgundy",
    detail: "text-stone-700",
    concern: "border-stone-300 text-burgundy-dark",
    number: "text-stone-400",
  },
  {
    card: "bg-[#e2e8dc] text-burgundy-dark",
    icon: "bg-white/70 text-burgundy",
    detail: "text-stone-700",
    concern: "border-stone-300 text-burgundy-dark",
    number: "text-stone-400",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-20 border-t border-burgundy/10 bg-white"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-16 sm:w-[calc(100%-4rem)] sm:py-20 lg:py-24">
        <FadeIn>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
              {siteContent.services.eyebrow}
            </p>
            <h2
              id="services-title"
              className="mx-auto max-w-[760px] font-display text-4xl leading-[1.08] tracking-[-0.035em] text-burgundy-dark sm:text-5xl"
            >
              {siteContent.services.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[660px] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              {siteContent.services.description}
            </p>
            <Button
              className="mt-6"
              href={siteContent.bookingUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              icon={<ArrowUpRight aria-hidden="true" size={16} />}
            >
              Explore booking options
            </Button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto mt-10 grid max-w-[1040px] grid-cols-2 gap-3 sm:mt-12 sm:gap-4 md:grid-cols-3">
            {serviceImages.map((image, index) => (
              <figure
                key={image.src}
                className={`relative overflow-hidden rounded-lg bg-sand shadow-[0_18px_42px_-32px_rgba(75,20,43,0.45)] sm:rounded-xl ${index === 0 ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-[4/3]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 330px, (min-width: 640px) 44vw, 90vw"
                  className="object-cover object-center"
                />
              </figure>
            ))}
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-12">
          {siteContent.services.areas.map((area, index) => {
            const Icon = areaIcons[index];
            const theme = areaThemes[index];

            return (
              <div key={area.title} className={areaLayouts[index]}>
                <FadeIn className="h-full w-full">
                  <article
                    className={`group relative isolate flex h-full w-full min-h-[300px] flex-col overflow-hidden rounded-xl p-6 shadow-[0_10px_28px_-24px_rgba(75,20,43,0.5)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_45px_-24px_rgba(75,20,43,0.35)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[320px] sm:p-8 ${theme.card}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-4 top-3 font-display text-[5.5rem] leading-none sm:right-6 sm:top-5 sm:text-[5rem] ${theme.number}`}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={`relative flex size-12 items-center justify-center ${theme.icon}`}
                    >
                      <Icon aria-hidden="true" size={23} strokeWidth={1.7} />
                    </span>
                    <h3 className="relative mt-8 max-w-[460px] font-display text-3xl leading-tight sm:text-4xl">
                      {area.title}
                    </h3>
                    <p
                      className={`relative mt-3 max-w-[460px] text-sm leading-6 sm:text-base sm:leading-7 ${theme.detail}`}
                    >
                      {area.description}
                    </p>
                    <ul
                      aria-label={`${area.title} concerns`}
                      className="relative mt-auto flex flex-wrap gap-2 pt-6"
                    >
                      {area.concerns.map((concern) => (
                        <li
                          key={concern}
                          className={`border px-3 py-1.5 text-xs leading-5 sm:text-sm ${theme.concern}`}
                        >
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
