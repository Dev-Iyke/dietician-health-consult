import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  Clock3,
  Leaf,
  MapPin,
} from "lucide-react";
import { siteContent } from "@/content/site";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-12 -z-10 size-80 rounded-full bg-blush/70 blur-3xl"
      />

      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] pb-16 pt-12 sm:w-[calc(100%-4rem)] sm:pb-20 sm:pt-16 lg:py-14">
        <div className="grid items-center gap-12 lg:min-h-[600px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <FadeIn>
            <div className="max-w-[650px]">
              <p className="mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
                <span className="flex size-8 items-center justify-center rounded-full border border-burgundy/20 bg-white/70">
                  <Leaf aria-hidden="true" size={18} strokeWidth={2} />
                </span>
                {siteContent.hero.eyebrow}
              </p>

              <h1
                id="hero-title"
                className="max-w-[680px] font-display text-[clamp(3.25rem,7vw,6.25rem)] leading-[0.98] tracking-[-0.045em] text-burgundy-dark"
              >
                {siteContent.hero.title}{" "}
                <span className="text-burgundy">{siteContent.hero.titleAccent}</span>
              </h1>

              <p className="mt-7 max-w-[560px] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
                {siteContent.hero.description}
              </p>

              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
                <Button
                  href="#discovery-call"
                  icon={<ArrowUpRight aria-hidden="true" size={17} />}
                >
                  {siteContent.hero.primaryCta}
                </Button>
                <Link
                  href="#services"
                  className="group hidden sm:inline-flex items-center gap-2 py-2 text-sm font-medium text-burgundy-dark transition-colors duration-200 hover:text-burgundy focus-visible:text-burgundy"
                >
                  {siteContent.hero.secondaryCta}
                  <ArrowDownRight
                    aria-hidden="true"
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative mx-auto w-full max-w-[450px] pb-5 pl-3 pr-2 pt-2 sm:max-w-[510px] sm:pl-7 sm:pr-5">
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-0 top-8 rounded-t-[48%] rounded-b-[1.5rem] bg-sand sm:inset-x-12 sm:top-10"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[1.5rem] border-[6px] border-cream shadow-[0_28px_70px_-38px_rgba(75,20,43,0.5)]">
                <Image
                  src="/images/prof-imgs/grace-three.webp"
                  alt={siteContent.hero.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 90vw"
                  className="object-cover object-[center_25%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#27171c]/45 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/15 backdrop-blur-sm">
                    <MapPin aria-hidden="true" size={17} />
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    {siteContent.location}
                  </span>
                </div>
              </div>

              <div className="absolute -left-1 top-[22%] hidden max-w-[180px] items-center gap-3 border border-burgundy/10 bg-white/95 px-3 py-2 shadow-[0_16px_35px_-24px_rgba(75,20,43,0.55)] sm:flex">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-blush text-burgundy">
                  <Leaf aria-hidden="true" size={18} strokeWidth={2} />
                </span>
                <span className="text-xs leading-5 text-burgundy-dark font-display">
                  Care shaped around your life
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <dl
            aria-label="Dietitian qualifications and experience"
            className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4"
          >
            <div className="flex min-h-[92px] items-center gap-4 border border-burgundy/10 bg-white/70 p-4 shadow-[0_14px_35px_-30px_rgba(75,20,43,0.6)] md:px-5">
              <span className="flex size-11 shrink-0 items-center justify-center bg-blush text-burgundy">
                <BadgeCheck aria-hidden="true" size={21} strokeWidth={1.7} />
              </span>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Professional designation
                </dt>
                <dd className="mt-1 text-sm font-medium leading-5 text-burgundy-dark">
                  {siteContent.practitioner.title}
                </dd>
              </div>
            </div>

            <div className="flex min-h-[92px] items-center gap-4 border border-burgundy/10 bg-white/70 p-4 shadow-[0_14px_35px_-30px_rgba(75,20,43,0.6)] md:px-5">
              <span className="flex size-11 shrink-0 items-center justify-center bg-blush text-burgundy">
                <BookOpenCheck aria-hidden="true" size={21} strokeWidth={1.7} />
              </span>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Specialized credential
                </dt>
                <dd className="mt-1 text-sm font-medium leading-5 text-burgundy-dark">
                  {siteContent.practitioner.credentials[0]}
                </dd>
              </div>
            </div>

            <div className="flex min-h-[92px] items-center gap-4 border border-burgundy/10 bg-white/70 p-4 shadow-[0_14px_35px_-30px_rgba(75,20,43,0.6)] md:px-5">
              <span className="flex size-11 shrink-0 items-center justify-center bg-blush text-burgundy">
                <Clock3 aria-hidden="true" size={21} strokeWidth={1.7} />
              </span>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Clinical experience
                </dt>
                <dd className="mt-1 text-sm font-medium leading-5 text-burgundy-dark">
                  {siteContent.practitioner.experience}
                </dd>
              </div>
            </div>
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
