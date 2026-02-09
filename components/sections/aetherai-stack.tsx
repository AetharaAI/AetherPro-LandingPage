import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { StackComponent } from '@/components/shared/stack-component'
import { Eye, KeyRound, Network, Volume2 } from 'lucide-react'

export function AetherAIStackSection() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel variant="voltage">SOVEREIGN STACK</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          A Live Portfolio of Sovereign AI Products.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl mx-auto leading-relaxed">
          AetherPro Technologies operates a composable ecosystem of production platforms that power AetherOS and the sovereign agent stack.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <StackComponent
            icon={KeyRound}
            name="PASSPORT"
            title="PassPort IAM (passport.aetherpro.us)"
            description="A sovereign identity layer extending Keycloak with AI agency primitives, delegation, and mandates."
          />
          <StackComponent
            icon={Network}
            name="FABRIC"
            title="MCP Fabric (mcpfabric.space)"
            description="An open-source A2A communication protocol using asynchronous Redis Streams for non-blocking messaging."
          />
          <StackComponent
            icon={Eye}
            name="PERCEPTOR"
            title="Perceptor (perceptor.us)"
            description="A sentinel sensor-fusion layer featuring YOLO, PaddleOCR, and InsightFace for multimodal grounding."
          />
          <StackComponent
            icon={Volume2}
            name="AUDIO"
            title="BlackBox Audio (blackboxaudio.tech)"
            description="A dedicated audio AI platform running specialized reasoning models for voice-first interactions."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
