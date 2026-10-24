import {
  ArrowUpRight,
  ClipboardPlus,
  NotebookTabs,
  RotateCcw,
  MessageCircleMore,
} from "lucide-react";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

const serviceIcons = [ClipboardPlus, RotateCcw, NotebookTabs];

export function OneOffAppointments() {
  return (
    <section
      id="one-off-appointments"
      aria-labelledby="one-off-title"
      className="scroll-mt-20 border-t border-burgundy/10 bg-[#f8f3ed]"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-16 sm:w-[calc(100%-4rem)] sm:py-20 lg:py-24">
        <FadeIn>
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
              {siteContent.oneOffSection.eyebrow}
            </p>
            <h2
              id="one-off-title"
              className="font-display text-4xl leading-[1.08] tracking-[-0.035em] text-burgundy-dark sm:text-5xl"
            >
              {siteContent.oneOffSection.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              {siteContent.oneOffSection.description}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid items-stretch gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
          {siteContent.oneOffServices.map((service, index) => {
            const ServiceIcon = serviceIcons[index];

            return (
              <FadeIn key={service.name} className="h-full">
                <article className="group flex h-full flex-col border border-burgundy/15 bg-white p-5 shadow-[0_14px_38px_-34px_rgba(75,20,43,0.55)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-burgundy/30 hover:shadow-[0_24px_44px_-30px_rgba(75,20,43,0.32)] motion-reduce:transform-none motion-reduce:transition-none sm:rounded-lg sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm text-burgundy/65">
                      0{index + 1}
                    </span>
                    <span className="flex size-10 items-center justify-center bg-[#f5eeee] text-burgundy transition-colors duration-300 group-hover:bg-burgundy group-hover:text-white">
                      <ServiceIcon
                        aria-hidden="true"
                        size={19}
                        strokeWidth={1.7}
                      />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl leading-tight text-burgundy-dark sm:text-[1.7rem]">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-stone-500 sm:text-xs">
                    {service.duration}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-stone-700 sm:text-[15px]">
                    {service.description}
                  </p>
                  <p className="mt-3 border-t border-burgundy/10 pt-3 text-xs leading-5 text-burgundy-dark/75 sm:text-sm">
                    {service.note}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <p className="font-display text-2xl text-burgundy-dark sm:text-3xl">
                      {service.price}
                    </p>
                    <Button
                      className="px-3 text-xs sm:px-4 sm:text-sm"
                      href={siteContent.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                      icon={<ArrowUpRight aria-hidden="true" size={15} />}
                    >
                      Choose in Colib
                    </Button>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <aside className="mt-7 grid gap-5 border border-burgundy/15 bg-white p-5 shadow-[0_18px_42px_-38px_rgba(75,20,43,0.7)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:rounded-lg sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center bg-[#f5eeee] text-burgundy">
                <MessageCircleMore
                  aria-hidden="true"
                  size={21}
                  strokeWidth={1.7}
                />
              </span>
              <div>
                <p className="inline-flex border border-burgundy/15 bg-[#f8f3ed] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-burgundy sm:text-xs">
                  {siteContent.quickCheckIn.eligibility}
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-burgundy-dark sm:text-3xl">
                  {siteContent.quickCheckIn.name}
                </h3>
                <p className="mt-2 max-w-[650px] text-sm leading-6 text-stone-700 sm:text-base">
                  {siteContent.quickCheckIn.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pl-[3.75rem] sm:flex-col sm:items-end sm:justify-center sm:pl-0">
              <p className="font-display text-2xl text-burgundy-dark sm:text-3xl">
                {siteContent.quickCheckIn.price}
                <span className="ml-2 font-sans text-sm font-normal text-stone-500 sm:text-base">
                  <span className="text-2xl"> · </span>
                  {siteContent.quickCheckIn.duration}
                </span>
              </p>
              <Button
                className="px-3 text-xs sm:px-4 sm:text-sm"
                href={siteContent.bookingUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                icon={<ArrowUpRight aria-hidden="true" size={15} />}
              >
                Book check-in
              </Button>
            </div>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
