import { Analytics } from "@vercel/analytics/react";
import IntroSection from "./_components/IntroSection";
import VideoSection from "./_components/VideoSection";
import SkillsSection from "./_components/SkillsSection";
import ServicesSection from "./_components/ServicesSection";
import ReviewsSection from "./_components/ReviewsSection";
import SocialSection from "./_components/SocialSection";

export default function Home() {
  return (
    <main>
      <IntroSection />
      <VideoSection />
      <SkillsSection />
      <ServicesSection />
      <ReviewsSection />
      <SocialSection />
      <Analytics />
    </main>
  );
}
