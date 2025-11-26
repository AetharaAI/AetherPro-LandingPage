import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { StackComponent } from '@/components/shared/stack-component'
import { Eye, Ear, Volume2, Hand, Brain, Database } from 'lucide-react'

export function AetherAIStackSection() {
  return (
    <SectionWrapper>
      <div className="max-w-6xl mx-auto text-center">
        <SectionLabel variant="voltage">INTELLIGENCE</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Intelligence That Sees, Hears, Speaks, and Acts.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-16 max-w-3xl mx-auto leading-relaxed">
          AetherAI is a complete sensory and cognitive stack for autonomous systems. Six modular components. Infinite configurations. One unified intelligence layer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StackComponent
            icon={Eye}
            name="EYES"
            title="Vision Models"
            description="Real-time visual understanding. OCR. Scene analysis. Object detection. Your AI sees what you see."
          />
          <StackComponent
            icon={Ear}
            name="EARS"
            title="Speech Recognition"
            description="Whisper-class transcription running locally. Real-time speech-to-text with zero cloud latency."
          />
          <StackComponent
            icon={Volume2}
            name="VOICE"
            title="Text-to-Speech"
            description="Natural voice synthesis. Voice cloning. Your AI speaks with presence."
          />
          <StackComponent
            icon={Hand}
            name="HANDS"
            title="Grounding & Action"
            description="Tool use. UI control. API execution. Your AI doesn't just think — it does."
          />
          <StackComponent
            icon={Brain}
            name="BRAIN"
            title="Triad Intelligence"
            description="Three specialized reasoning cores working in concert: Strategist for planning. Operator for execution. Critic for verification. Consensus-driven decision making."
          />
          <StackComponent
            icon={Database}
            name="MEMORY"
            title="Distributed State"
            description="Persistent context across sessions. Distributed storage across nodes. Your AI remembers everything it needs to."
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
