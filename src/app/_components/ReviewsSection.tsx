import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { ArrowIcon, StarIcon } from "./Icons";

// Copied from the Fiverr profile; Fiverr has no public API, so update these by hand when new reviews arrive.
const fiverr = {
  url: "https://www.fiverr.com/mamir47",
  rating: "5.0",
  reviewCount: 5,
};

const reviews = [
  {
    name: "davinci2k2",
    country: "Uzbekistan",
    text: "I have worked with many people, but I am obliged to say dreamer was exceptional in understanding the core requirements as well as delivering fast. I plan to collaborate further with him in the future",
    duration: "2 days",
    repeat: false,
  },
  {
    name: "user09438978",
    country: "Pakistan",
    text: "Great work! Very professional and skilled. The code was clean, and the developer was quick to respond and easy to work with. Highly recommended!",
    duration: "4 days",
    repeat: true,
  },
  {
    name: "minatoh",
    country: "Nigeria",
    text: "This freelancer is very good and exceptional and fast I recommend",
    duration: "12 days",
    repeat: true,
  },
  {
    name: "user09438978",
    country: "Pakistan",
    text: "Dreamer is a professional freelancer. He has delivered above the expectations. Highly recommended.",
    duration: "1 day",
    repeat: true,
  },
  {
    name: "minatoh",
    country: "Nigeria",
    text: "Simply the best",
    duration: "12 days",
    repeat: true,
  },
];

const Stars = ({ className = "h-4 w-4" }: { className?: string }) => (
  <div className="flex gap-0.5 text-hazel-300" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} className={className} />
    ))}
  </div>
);

export default function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 px-4 sm:px-8 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Reviews"
          title="What clients say"
          description="Verified reviews from clients we've worked with on Fiverr."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Summary card: fills the first grid slot so 5 reviews + summary make an even 3×2 grid */}
          <a
            href={fiverr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-hazel-500/30 bg-hazel-500/[0.06] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-hazel-500/60"
          >
            <div className="flex items-start justify-between">
              <Image
                src="/icons/fiverr-logo.png"
                alt="Fiverr"
                width={112}
                height={56}
                className="h-14 w-28 rounded-2xl"
              />
              <ArrowIcon className="h-5 w-5 text-white/30 transition-all group-hover:text-hazel-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <p className="mt-8 text-6xl font-bold tracking-tight text-white">{fiverr.rating}</p>
            <div className="mt-3">
              <Stars className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm text-white/60">
              {fiverr.reviewCount} reviews · 100% five-star
            </p>
            <p className="mt-auto pt-6 text-sm font-semibold text-hazel-300 group-hover:text-hazel-200">
              View profile on Fiverr
            </p>
          </a>

          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <Stars />
                {review.repeat && (
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/70">
                    Repeat client
                  </span>
                )}
              </div>

              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/80">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hazel-600/20 text-sm font-bold uppercase text-hazel-300">
                  {review.name[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-white/50">
                    {review.country}
                  </p>
                </div>
                <p className="shrink-0 text-right text-xs text-white/50">
                  {review.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
