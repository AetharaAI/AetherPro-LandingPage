'use client'

import { HeroSection } from '@/components/sections/hero'
import { SiteHeader } from '@/components/layout/site-header'
import { PartnersSection } from '@/components/sections/partners'
import { DifferenceSection } from '@/components/sections/difference'
import { AnchorSection } from '@/components/sections/anchor'
import { PresenceOSSection } from '@/components/sections/presenceos'
import { ApprovedModelsSection } from '@/components/sections/approved-models'
import { SovereignComputeSection } from '@/components/sections/sovereign-compute'
import { AetherAIStackSection } from '@/components/sections/aetherai-stack'
import { SovereignVoiceSection } from '@/components/sections/sovereign-voice'
import { AetherForgeSection } from '@/components/sections/aetherforge'
import { InfrastructureSection } from '@/components/sections/infrastructure'
import { RoadmapSection } from '@/components/sections/roadmap'
import { FounderSection } from '@/components/sections/founder'
import { RequestAccessSection } from '@/components/sections/request-access'
import { FinalCTASection } from '@/components/sections/final-cta'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <PartnersSection />
      <DifferenceSection />
      <AnchorSection />
      <PresenceOSSection />
      <ApprovedModelsSection />
      <SovereignComputeSection />
      <AetherAIStackSection />
      <SovereignVoiceSection />
      <AetherForgeSection />
      <InfrastructureSection />
      <RoadmapSection />
      <FounderSection />
      <RequestAccessSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
