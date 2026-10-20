import SectionHeading from "./SectionHeading";
import { BotIcon, DesktopIcon, MathIcon, MobileIcon, VrIcon } from "./Icons";

const services = [
  {
    title: "Mobile Games",
    Icon: MobileIcon,
    description:
      "Casual to mid-core games for iOS and Android, built in Unity with store-ready builds, ads and in-app purchases.",
    tags: ["Unity", "iOS", "Android"],
  },
  {
    title: "PC Games",
    Icon: DesktopIcon,
    description:
      "Prototypes through full releases for Windows and Steam, with gameplay systems, AI and performance tuning.",
    tags: ["Unity", "Steam", "C#"],
  },
  {
    title: "VR Experiences",
    Icon: VrIcon,
    description:
      "Immersive games, simulations and training apps for Meta Quest and PC VR headsets.",
    tags: ["Meta Quest", "OpenXR", "Unity"],
  },
  {
    title: "Trading Bots & Automation",
    Icon: BotIcon,
    description:
      "Algorithmic trading bots, data pipelines and workflow automation that run on their own around the clock.",
    tags: ["Go", "Node.js", "Python"],
  },
  {
    title: "Math Services",
    Icon: MathIcon,
    description:
      "Applied mathematics for games, simulations and finance, from physics and procedural generation to statistical modelling.",
    tags: ["Modelling", "Simulation", "Statistics"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-4 sm:px-8 py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What we build"
          description="From your first prototype to launch, across every platform your players and users are on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ title, Icon, description, tags }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-hazel-500/50 hover:bg-hazel-500/[0.04]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-hazel-600/15 text-hazel-300 transition-colors group-hover:bg-hazel-300 group-hover:text-black">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 flex-1">
                {description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li key={tag} className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
