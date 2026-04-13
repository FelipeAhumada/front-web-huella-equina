import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SponsorsSection } from "@/components/sponsors-section"
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
      <AboutSection />
      <SponsorsSection />
      <SeasonsSection />
      <WelfareSection />
      <CommunitySection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
