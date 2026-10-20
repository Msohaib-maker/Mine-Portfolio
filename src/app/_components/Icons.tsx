import type { SVGProps } from "react";
import type { SocialPlatform } from "../siteConfig";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export const PlayIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M8 5.5v13l10.5-6.5L8 5.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const MobileIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </svg>
);

export const DesktopIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
    <path d="M8.5 20.5h7M12 16.5v4" />
  </svg>
);

export const VrIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 8.5A2 2 0 0 1 5 6.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3.6l-1.9-2.4a1.9 1.9 0 0 0-3 0l-1.9 2.4H5a2 2 0 0 1-2-2v-6z" />
    <circle cx="8" cy="11.5" r="1.6" />
    <circle cx="16" cy="11.5" r="1.6" />
  </svg>
);

export const BotIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3.5 17.5l5-5.5 4 3.5 8-9" />
    <path d="M15.5 6.5h5v5" />
    <path d="M3.5 21h17" />
  </svg>
);

export const MathIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M17.5 4.5h-11l6 7.5-6 7.5h11" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </svg>
);

export const ArrowIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 17L17 7M8.5 7H17v8.5" />
  </svg>
);

const YoutubeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="M10 9.2v5.6l4.8-2.8L10 9.2z" fill="currentColor" stroke="none" />
  </svg>
);

const InstagramIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const SocialIcon = ({
  platform,
  ...props
}: IconProps & { platform: SocialPlatform }) => {
  if (platform === "youtube") return <YoutubeIcon {...props} />;
  return <InstagramIcon {...props} />;
};

export const PauseIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="6.5" y="5" width="3.5" height="14" rx="1" fill="currentColor" stroke="none" />
    <rect x="14" y="5" width="3.5" height="14" rx="1" fill="currentColor" stroke="none" />
  </svg>
);

export const VolumeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4v-5z" fill="currentColor" />
    <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
  </svg>
);

export const MuteIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4v-5z" fill="currentColor" />
    <path d="M16 9.5l5 5M21 9.5l-5 5" />
  </svg>
);

export const FullscreenIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
  </svg>
);

export const StarIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path
      d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L12 3.5z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);
