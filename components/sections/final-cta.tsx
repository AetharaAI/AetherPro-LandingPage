import { Button } from '@/components/ui/button'

export function FinalCTASection() {
  return (
    <div className="bg-gradient-to-b from-bg-orbital to-bg-void py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          The Future Runs Local.
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-12 leading-relaxed">
          AetherPro is building AI infrastructure for people who refuse to rent their intelligence from someone else's cloud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="voltage" size="lg">
            READ THE WHITEPAPER
          </Button>
          <Button variant="default" size="lg">
            CONTACT US
          </Button>
        </div>
      </div>
    </div>
  )
}
