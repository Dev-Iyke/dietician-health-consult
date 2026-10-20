import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";

export function BrandLink() {
  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-burgundy/60"
      aria-label={`${siteContent.businessName} home`}
    >
      <span className="relative size-12 shrink-0 overflow-hidden">
        <Image
          fill
          src="/images/logo/dhc-logo.png"
          alt=""
          sizes="48px"
          className="object-cover"
          priority
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block whitespace-nowrap text-sm font-semibold tracking-tight text-[#4b142b]">
          {siteContent.practitioner.name}
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-[0.6rem] uppercase tracking-[0.13em] text-[#766c68]">
          {siteContent.practitioner.title}
        </span>
      </span>
    </Link>
  );
}
555
