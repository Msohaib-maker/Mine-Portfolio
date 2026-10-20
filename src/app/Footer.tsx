import Image from "next/image";
import { agency, navLinks, socials } from "./siteConfig";
import { MailIcon, SocialIcon } from "./_components/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 sm:px-8">
      {/* Call to action, the target of every Contact / Start a project button */}
      <div id="contact" className="scroll-mt-24 max-w-6xl mx-auto py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            Tell us about your game, VR experience or automation idea and
            we&apos;ll get back to you within two working days.
          </p>
        </div>
        <a
          href={`mailto:${agency.email}`}
          className="inline-flex items-center gap-3 self-start md:self-auto rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-hazel-300 hover:text-black"
        >
          <MailIcon className="h-5 w-5" />
          {agency.email}
        </a>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 py-12">
        <div className="col-span-2">
          <p className="flex items-center gap-2 text-lg font-bold text-white">
            <Image src={agency.logo} alt="" width={44} height={44} className="h-11 w-11 rounded-full ring-1 ring-white/20 shadow-[0_0_10px_rgba(255,255,255,0.25)]" />
            {agency.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/50 leading-relaxed">
            {agency.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Follow
          </h3>
          <ul className="mt-4 space-y-3">
            {socials.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <SocialIcon platform={social.platform} className="h-4 w-4" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/40">
        <p>© {new Date().getFullYear()} {agency.name}. All rights reserved.</p>
        <p>Remote studio · Working worldwide</p>
      </div>
    </footer>
  );
}
