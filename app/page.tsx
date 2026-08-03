import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TvChannelsStrip } from "@/components/tv-channels-strip"
import { AboutSection } from "@/components/about-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { EventsSection } from "@/components/events-section"
import { AssociationsSection } from "@/components/associations-section"
import { SeasonsSection } from "@/components/seasons-section"
import { WelfareSection } from "@/components/welfare-section"
import { CommunitySection } from "@/components/community-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TvChannelsStrip />
      <AboutSection />
      <SponsorsSection />
      <EventsSection />
      <SeasonsSection />
      <WelfareSection />
      <CommunitySection />
      <PartnersSection />
      <AssociationsSection />
      <Footer />
    </main>
  )
}
