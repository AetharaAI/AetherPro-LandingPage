import Link from 'next/link'

export function EducationSection() {
  return (
    <section aria-labelledby="education-title" className="border-y border-border-dim bg-bg-orbital px-6 py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div>
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-[#edce8d]">Free learning modules</p>
          <h2 id="education-title" className="mb-4 text-3xl font-bold tracking-tight text-text-plasma sm:text-4xl">
            Own Your AI
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            Five practical lessons explain what you rent or control, what AI agents can do, how cloud and private deployments differ, and how to protect your data. Use the readiness assessment and starter guide to choose a first project for your business.
          </p>
          <Link
            href="/learn"
            className="mt-6 inline-flex min-h-12 items-center rounded-md border border-[#92e5ef] px-5 py-2.5 font-semibold text-[#92e5ef] hover:bg-[#92e5ef]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edce8d]"
          >
            Explore the Education Hub
          </Link>
        </div>
        <div className="rounded-lg border border-border-dim bg-bg-void p-5 sm:p-7">
          <p className="mb-2 font-mono text-sm uppercase tracking-wider text-[#edce8d]">Upcoming animated series</p>
          <h3 className="mb-3 text-2xl font-semibold text-text-plasma">Aethara &amp; Aether</h3>
          <p className="text-base leading-relaxed text-text-muted">
            Aethara and Aether will walk through AI concepts with business examples and technical demonstrations. We’re also planning read-aloud versions of the lessons for learners who need or prefer to listen.
          </p>
        </div>
      </div>
    </section>
  )
}
