import { FadeIn } from "@/components/fade-in";
import { siteContent } from "@/content/site";

const bookingUrl = "#booking-link";

export default function HomePage() {
  return (
    <main>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="font-serif text-xl font-semibold text-burgundy">
          {siteContent.businessName}
        </a>
        <a className="button button-small" href={bookingUrl}>
          Book a consultation
        </a>
      </nav>

      <section id="top" className="hero-shell">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
          <FadeIn>
            <p className="eyebrow">{siteContent.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/70">
              {siteContent.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a className="button" href={bookingUrl}>
                Explore support options
              </a>
              <a className="button button-secondary" href="#about">
                Meet Grace
              </a>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="hero-card">
              <span className="hero-card-mark">DH</span>
              <p className="eyebrow">{siteContent.slogan}</p>
              <p className="mt-5 font-serif text-3xl leading-tight text-ink">
                Practical nutrition care for real life.
              </p>
              <p className="mt-5 leading-7 text-ink/70">
                No rigid rules. No confusing food lists. Just thoughtful guidance designed around your health, culture, and goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">A calm, personalized approach</p>
              <h2 className="section-title">Clarity for your next healthy step.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-ink/70">
              <p>
                {siteContent.practitioner.name} is a registered dietitian, certified diabetes educator, and certified craving change expert with {siteContent.practitioner.experience.toLowerCase()}.
              </p>
              <p>
                Together, we make evidence-based nutrition feel practical, flexible, and sustainable—while keeping the foods you love part of the picture.
              </p>
              <p className="font-medium text-burgundy">Serving clients in {siteContent.location} and beyond.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="section-tint" id="support">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <p className="eyebrow">Support for your whole health picture</p>
            <h2 className="section-title max-w-2xl">Nutrition guidance for conditions that deserve more clarity.</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {siteContent.conditions.map((condition) => (
                <span key={condition} className="pill">
                  {condition}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="eyebrow">Ways to work together</p>
            <h2 className="section-title">Choose the level of support that fits your season.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {siteContent.packages.map((item) => (
              <article key={item.name} className={`offer-card ${item.featured ? "offer-card-featured" : ""}`}>
                {item.featured && <span className="offer-badge">Most popular</span>}
                <h3 className="font-serif text-3xl text-ink">{item.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">{item.duration}</p>
                <p className="mt-8 text-4xl font-semibold text-ink">{item.price}</p>
                <p className="mt-5 min-h-24 leading-7 text-ink/70">{item.description}</p>
                <a href={bookingUrl} className="button button-card mt-8">Learn more</a>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="appointments" className="section-dark">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow eyebrow-light">Prefer a single appointment?</p>
                <h2 className="section-title section-title-light">Start with the conversation you need.</h2>
              </div>
              <div className="divide-y divide-white/15 rounded-3xl border border-white/15 bg-white/5 px-6">
                {siteContent.appointments.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-6 py-5 text-white">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-sm text-white/60">{item.duration}</p>
                    </div>
                    <p className="font-semibold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="booking-link" className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <FadeIn>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="section-title mx-auto max-w-2xl">Let&apos;s make your next step feel simpler.</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink/70">Booking and payment are handled securely through the client portal.</p>
          <a href="#" className="button mt-8">Book through the client portal</a>
        </FadeIn>
      </section>

      <footer className="border-t border-burgundy/10 px-6 py-8 text-center text-sm text-ink/60">
        © {new Date().getFullYear()} {siteContent.businessName}. All rights reserved.
      </footer>
    </main>
  );
}
