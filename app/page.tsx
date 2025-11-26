'use client'

import { HeroSection } from '@/components/sections/hero'
import { DifferenceSection } from '@/components/sections/difference'
import { SovereignComputeSection } from '@/components/sections/sovereign-compute'
import { AetherAIStackSection } from '@/components/sections/aetherai-stack'
import { AetherForgeSection } from '@/components/sections/aetherforge'
import { InfrastructureSection } from '@/components/sections/infrastructure'
import { RoadmapSection } from '@/components/sections/roadmap'
import { FounderSection } from '@/components/sections/founder'
import { FinalCTASection } from '@/components/sections/final-cta'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <DifferenceSection />
      <SovereignComputeSection />
      <AetherAIStackSection />
      <AetherForgeSection />
      <InfrastructureSection />
      <RoadmapSection />
      <FounderSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
