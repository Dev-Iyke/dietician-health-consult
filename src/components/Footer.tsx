import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { siteContent } from "@/content/site";

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "About Grace", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "One-off appointments", href: "#one-off-appointments" },
  { label: "FAQs", href: "#faqs" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      aria-labelledby="footer-title"
      className="scroll-mt-20 border-t border-white/10 bg-burgundy-dark text-white"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1320px] py-14 sm:w-[calc(100%-4rem)] sm:py-16 lg:py-20">
        <h2 id="footer-title" className="sr-only">
          Contact Dietitian Health Consult
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[1.1fr_0.7fr_0.9fr_1.15fr] lg:gap-10">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link
              href="#top"
              aria-label={`${siteContent.businessName} home`}
              className="rounded-full outline-none transition-transform duration-200 hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-burgundy-dark motion-reduce:transform-none motion-reduce:transition-none"
            >
              <Image
                src="/images/logo/dhc-logo.png"
                alt="Dietitian Health Consult — Better health with foods you love"
                width={200}
                height={200}
                sizes="(max-width: 640px) 176px, 200px"
                className="h-44 w-44 object-contain sm:h-48 sm:w-48"
              />
            </Link>
            <p className="mt-4 text-sm font-medium text-white/90">
              {siteContent.practitioner.name}, {siteContent.practitioner.title}
            </p>
            <p className="mt-1 text-sm text-white/65">{siteContent.location}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 underline decoration-white/0 underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-white hover:decoration-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              Get in touch
            </h3>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="mt-4 inline-flex items-start gap-3 text-sm text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Mail aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
              <span className="break-all">{siteContent.contact.email}</span>
            </a>
            {siteContent.contact.phone ? (
              <a
                href={`tel:${siteContent.contact.phone}`}
                className="mt-3 inline-flex items-start gap-3 text-sm text-white/90 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
                <span>{siteContent.contact.phone}</span>
              </a>
            ) : null}
            <div className="mt-4 flex items-start gap-3 text-sm text-white/75">
              <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-white/60" size={17} />
              <span>{siteContent.location}</span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {siteContent.contact.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream p-5 text-burgundy-dark sm:p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                  Ready to book?
                </h3>
                <p className="mt-2 max-w-[260px] text-sm leading-6 text-stone-700">
                  Scan the code to open Grace’s secure booking portal.
                </p>
              </div>
              <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-burgundy" size={20} />
            </div>

            <a
              href={siteContent.bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Scan or open the Colib booking page"
              className="mt-5 inline-flex border border-burgundy/10 bg-white p-2 outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <Image
                src="/images/colib-booking-qrcode.png"
                alt="QR code for the Colib booking page"
                width={152}
                height={152}
                sizes="152px"
                className="size-32 sm:size-36"
              />
            </a>
            <div>
              <Button
                className="mt-5 w-full"
                href={siteContent.bookingUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<ArrowUpRight aria-hidden="true" size={16} />}
              >
                Open booking page
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteContent.businessName}. All rights reserved.
          </p>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="w-fit transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Contact Grace
          </a>
        </div>
      </div>
    </footer>
  );
}
