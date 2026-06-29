import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'

export function ApprovedModelsSection() {
  return (
    <SectionWrapper background="gradient" id="approved-models">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel variant="voltage">MODEL REGISTRY</SectionLabel>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-text-plasma md:text-4xl lg:text-5xl">
              Approved Model Distribution
            </h2>
            <p className="text-lg leading-relaxed text-text-muted md:text-xl">
              Anchor nodes should not pull arbitrary public models directly. AetherPro&apos;s model
              registry pattern validates model bundles, publishes approved manifests, and lets
              PresenceOS load only approved model slots.
            </p>
          </div>

          <div className="rounded-lg border border-accent-voltage/30 bg-bg-orbital p-8 lg:p-10">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent-voltage">
              Images are shipped. Models are mounted. Manifests are governed.
            </p>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Predictable owned capacity instead of vendor-imposed rate limits — with governed
              bundles that keep inference slots auditable and operator-controlled.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}