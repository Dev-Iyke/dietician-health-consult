"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, Clock3, PhoneCall } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

const contactTopics = siteContent.discoveryCall.topics;

type SubmissionState = "idle" | "sending" | "success" | "error";

export function DiscoveryCall() {
  const [numberRegion, setNumberRegion] = useState<"canada" | "international" | "">("");
  const [whatsappReady, setWhatsappReady] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [topicsMissing, setTopicsMissing] = useState(false);
  const canSubmit =
    consentGiven &&
    (numberRegion === "canada" ||
      (numberRegion === "international" && whatsappReady));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTopicsMissing(false);
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      numberRegion: String(formData.get("numberRegion") ?? ""),
      topics: formData.getAll("topics").map(String),
      callbackWindow: String(formData.get("callbackWindow") ?? ""),
      whatsappReady: formData.get("whatsappReady") === "on",
      consent: formData.get("consent") === "on",
      companyWebsite: String(formData.get("companyWebsite") ?? ""),
    };

    if (payload.topics.length === 0) {
      setTopicsMissing(true);
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/discovery-request.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean };

      if (!response.ok || result.ok !== true) {
        throw new Error("The request could not be sent.");
      }

      setStatus("success");
      form.reset();
      setNumberRegion("");
      setWhatsappReady(false);
      setConsentGiven(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="discovery-call"
      aria-labelledby="discovery-call-title"
      className="scroll-mt-20 border-t border-burgundy/10 bg-cream"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-16 sm:w-[calc(100%-4rem)] sm:py-20 lg:py-24">
        <FadeIn>
          <div className="mx-auto max-w-[800px] text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-burgundy sm:text-sm">
              {siteContent.discoveryCall.eyebrow}
            </p>
            <h2
              id="discovery-call-title"
              className="font-display text-4xl leading-[1.08] tracking-[-0.035em] text-burgundy-dark sm:text-5xl"
            >
              {siteContent.discoveryCall.title}
            </h2>
            <p className="mx-auto mt-5 max-w-[670px] text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
              {siteContent.discoveryCall.description}
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-[1080px] overflow-hidden border border-burgundy/15 bg-white shadow-[0_24px_70px_-48px_rgba(75,20,43,0.5)] sm:mt-12 sm:rounded-xl lg:grid-cols-[0.78fr_1.22fr]">
          <FadeIn className="h-full">
            <aside className="h-full bg-burgundy-dark p-6 text-white sm:p-8 lg:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                A simple first step
              </p>
              <h3 className="mt-4 max-w-sm font-display text-3xl leading-tight sm:text-4xl">
                A little clarity, before you commit.
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Use this complimentary 15-minute call to ask general questions
                and learn which nutrition support option may suit you.
              </p>

              <dl className="mt-8 space-y-5 border-t border-white/15 pt-6">
                <div className="flex gap-3">
                  <CalendarDays
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-white/65"
                    size={18}
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                      Callback window
                    </dt>
                    <dd>
                      <ul className="mt-1 space-y-1 text-sm leading-6 sm:text-base">
                        {siteContent.discoveryCall.callbackWindows.map((window) => (
                          <li key={window.value}>{window.label}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-white/65"
                    size={18}
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                      Call length
                    </dt>
                    <dd className="mt-1 text-sm sm:text-base">
                      15 minutes · no charge
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PhoneCall
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-white/65"
                    size={18}
                  />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                      How we’ll reach you
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-white/80">
                      Canadian number: phone call. <br />
                      International number: WhatsApp message or call.
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-7 border-l border-white/35 pl-4 text-xs leading-5 text-white/65">
                This is a callback request, not a confirmed appointment. Please
                be available during the full window you select.
              </p>
            </aside>
          </FadeIn>

          <FadeIn>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-5 sm:p-8 lg:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-burgundy-dark">
                  Your name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    required
                    className="mt-2 min-h-12 w-full border border-burgundy/20 bg-white px-3.5 text-base font-normal text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-burgundy focus-visible:outline-none"
                    placeholder="Name"
                  />
                </label>
                <label className="block text-sm font-medium text-burgundy-dark">
                  Phone number (with country code)
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    required
                    className="mt-2 min-h-12 w-full border border-burgundy/20 bg-white px-3.5 text-base font-normal text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-burgundy focus-visible:outline-none"
                    placeholder="Eg. +12505550199"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-burgundy-dark">
                  Is this a Canadian phone number?
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    { value: "canada", label: "Yes, it’s Canadian" },
                    { value: "international", label: "No, it’s international" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex min-h-12 cursor-pointer items-center gap-3 border px-3.5 text-sm transition-colors ${numberRegion === option.value ? "border-burgundy bg-[#fcf6f4] text-burgundy-dark" : "border-burgundy/20 text-stone-700 hover:border-burgundy/45"}`}
                    >
                      <input
                        type="radio"
                        name="numberRegion"
                        value={option.value}
                        required
                        checked={numberRegion === option.value}
                        onChange={() => {
                          setNumberRegion(
                            option.value as "canada" | "international",
                          );
                          setWhatsappReady(false);
                        }}
                        className="size-4 accent-burgundy"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              {numberRegion === "international" ? (
                <label className="flex cursor-pointer items-start gap-3 border border-burgundy/15 bg-[#fcf8f3] p-3.5 text-sm leading-6 text-stone-700">
                  <input
                    type="checkbox"
                    name="whatsappReady"
                    required
                    checked={whatsappReady}
                    onChange={(event) => setWhatsappReady(event.target.checked)}
                    className="mt-1 size-4 shrink-0 accent-burgundy"
                  />
                  <span>
                    WhatsApp is active on this number, and I can receive a
                    message or call there.
                  </span>
                </label>
              ) : null}

              <fieldset>
                <legend className="text-sm font-medium text-burgundy-dark">
                  What would you like to ask about?{" "}
                  <span className="font-normal text-stone-500">
                    (choose all that apply)
                  </span>
                </legend>
                <div className="mt-3 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {contactTopics.map((topic) => (
                    <label
                      key={topic}
                      className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-stone-700"
                    >
                      <input
                        type="checkbox"
                        name="topics"
                        value={topic}
                        className="mt-0.5 size-4 shrink-0 accent-burgundy"
                      />
                      {topic}
                    </label>
                  ))}
                </div>
                {topicsMissing ? (
                  <p
                    className="mt-3 border border-burgundy/15 bg-[#fcf1f1] px-3 py-2 text-sm text-burgundy-dark"
                    role="alert"
                  >
                    Please select at least one topic.
                  </p>
                ) : null}
              </fieldset>

              <fieldset>
                <legend className="text-sm font-medium text-burgundy-dark">
                  Preferred callback window
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {siteContent.discoveryCall.callbackWindows.map((window) => (
                    <label
                      key={window.value}
                      className="flex cursor-pointer items-center gap-3 border border-burgundy/20 px-3.5 py-3 text-sm text-stone-700 transition-colors hover:border-burgundy/45"
                    >
                      <input
                        type="radio"
                        name="callbackWindow"
                        value={window.value}
                        required
                        className="size-4 shrink-0 accent-burgundy"
                      />
                      {window.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="border-t border-burgundy/10 pt-5">
                <p className="text-xs leading-5 text-stone-600 sm:text-sm sm:leading-6">
                  Dietitian Health Consult will use the information you
                  submit—your name, phone number, whether the number is Canadian
                  or international, selected general topics, and preferred
                  callback window—to respond to your free discovery-call
                  request. Canadian numbers will be contacted by phone;
                  international numbers may be contacted by WhatsApp message or
                  call, so please ensure WhatsApp is active on the number
                  provided. Please do not include medical or health details.
                  This is a callback request, not a confirmed appointment. The
                  request will be sent to the practice inbox, which only Grace
                  Kanu can access. For privacy questions, contact{" "}
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="font-medium text-burgundy underline decoration-burgundy/40 underline-offset-2 hover:decoration-burgundy"
                  >
                    {siteContent.contact.email}
                  </a>
                  .
                </p>
                <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm leading-5 text-burgundy-dark">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={consentGiven}
                    onChange={(event) => setConsentGiven(event.target.checked)}
                    className="mt-0.5 size-4 shrink-0 accent-burgundy"
                  />
                  <span>
                    I have read this notice and agree to be contacted about this
                    request.
                  </span>
                </label>
              </div>

              <div
                aria-hidden="true"
                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
              >
                <label>
                  Website
                  <input
                    name="companyWebsite"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!canSubmit || status === "sending"}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-burgundy px-5 text-sm font-medium text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-burgundy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy disabled:cursor-not-allowed disabled:transform-none disabled:bg-stone-300 disabled:text-stone-600 disabled:opacity-100 motion-reduce:transform-none sm:w-auto"
              >
                {status === "sending"
                  ? "Sending request…"
                  : "Request my free call"}
                <ArrowRight aria-hidden="true" size={17} />
              </button>
              {!canSubmit && status !== "sending" ? (
                <p className="text-xs leading-5 text-stone-500">
                  {!consentGiven
                    ? "Please read the notice and agree before submitting."
                    : numberRegion === "international"
                      ? "Confirm WhatsApp is active on your number to continue."
                      : "Choose whether your phone number is Canadian or international to continue."}
                </p>
              ) : null}

              <div aria-live="polite" className="min-h-6 text-sm">
                {status === "success" ? (
                  <p className="border border-green-200 bg-green-50 px-4 py-3 font-medium text-green-900">
                    Your request has been received. It isn’t confirmed until the
                    practice contacts you.
                  </p>
                ) : null}
                {status === "error" && !topicsMissing ? (
                  <p className="border border-burgundy/15 bg-[#fcf1f1] px-4 py-3 text-burgundy-dark">
                    {topicsMissing
                      ? "Please select at least one topic."
                      : "We couldn’t send your request just now. Please try again or email "}
                    {!topicsMissing ? (
                      <a
                        className="underline"
                        href={`mailto:${siteContent.contact.email}`}
                      >
                        {siteContent.contact.email}
                      </a>
                    ) : null}
                    {!topicsMissing ? "." : null}
                  </p>
                ) : null}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
