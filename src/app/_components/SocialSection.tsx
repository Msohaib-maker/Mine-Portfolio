import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { ArrowIcon } from "./Icons";
import { socials } from "../siteConfig";
import { getYoutubeStats } from "../youtube";

export default async function SocialSection() {
  const youtube = socials.find((social) => social.platform === "youtube");
  const youtubeStats = youtube ? await getYoutubeStats(youtube.handle) : null;

  // Swap in live YouTube counts when available; otherwise keep the fallback values from siteConfig
  const cards = socials.map((social) => {
    if (social.platform === "youtube" && youtubeStats) {
      return {
        ...social,
        stats: [
          { label: "Subscribers", value: youtubeStats.subscribers },
          { label: "Videos", value: youtubeStats.videos },
          { label: "Views", value: youtubeStats.views },
        ],
      };
    }
    return social;
  });

  return (
    <section id="social" className="scroll-mt-24 px-4 sm:px-8 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Social"
          title="Follow along"
          description="Devlogs, behind-the-scenes clips and release news."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-hazel-500/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {social.logo.wordmark ? (
                    // The wordmark sits on a white pill since its text is dark; object-cover trims the image's padding
                    <div className="relative h-11 w-28 overflow-hidden rounded-xl bg-white">
                      <Image src={social.logo.src} alt={social.label} fill sizes="112px" className="object-cover" />
                    </div>
                  ) : (
                    <Image src={social.logo.src} alt="" width={44} height={44} className="h-11 w-11" />
                  )}
                  <div>
                    {!social.logo.wordmark && <p className="font-semibold text-white">{social.label}</p>}
                    <p className="text-sm text-white/50">{social.handle}</p>
                  </div>
                </div>
                <ArrowIcon className="h-5 w-5 text-white/30 transition-all group-hover:text-hazel-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <dl
                className={`mt-8 grid gap-4 border-t border-white/10 pt-6 ${
                  social.stats.length === 3 ? "grid-cols-3" : "grid-cols-2"
                }`}
              >
                {social.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs uppercase tracking-widest text-white/40">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-2xl sm:text-3xl font-bold text-white tabular-nums">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
