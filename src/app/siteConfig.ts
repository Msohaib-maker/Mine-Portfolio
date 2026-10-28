// Central place for agency details. YouTube stats are fetched live; Instagram stats are hardcoded.

export const agency = {
  name: "OMNIEDSYS",
  logo: "/profile-cover.png",
  tagline: "Games, VR and automation, built to ship.",
  email: "afzalsohaib59@gmail.com",
};

// Founders without a `video` path show a "Coming soon" placeholder.
export type Founder = { name: string; role: string; video?: string };

export const founders: Founder[] = [
  { name: "Sohaib Amir", role: "Founder · Engineering", video: "/videos/Founder Introduction.mp4" },
];

export type SocialPlatform = "youtube" | "instagram";

export type Social = {
  platform: SocialPlatform;
  label: string;
  handle: string;
  url: string;
  // Wordmark logos (logo + name) render wider and replace the text label
  logo: { src: string; wordmark?: boolean };
  stats: { label: string; value: string }[];
};

export const socials: Social[] = [
  {
    platform: "youtube",
    label: "YouTube",
    handle: "@GameXRants22",
    url: "https://www.youtube.com/@GameXRants22",
    logo: { src: "/icons/youtube.png", wordmark: true },
    // Fallback only: live counts are fetched in SocialSection when YOUTUBE_API_KEY is set
    stats: [
      { label: "Subscribers", value: "—" },
      { label: "Videos", value: "—" },
      { label: "Views", value: "—" },
    ],
  },
  {
    platform: "instagram",
    label: "Instagram",
    handle: "@omniedsys",
    url: "https://www.instagram.com/omniedsys/",
    logo: { src: "/icons/instagram.png" },
    stats: [
      { label: "Followers", value: "100+" },
      { label: "Following", value: "44" },
    ],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "social", label: "Social" },
];
