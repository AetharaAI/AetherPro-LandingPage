'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const initialForm = {
  fullName: '',
  companyName: '',
  professionalEmail: '',
  primaryUseCase: '',
  referral: '',
}

export function RequestAccessSection() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (field: keyof typeof initialForm) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data?.error ?? 'Unable to submit request')
      }

      setStatus('success')
      setMessage('Thanks for your request. We will be in touch shortly.')
      setFormData(initialForm)
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Unable to submit request')
    }
  }

  return (
    <SectionWrapper>
      <div className="max-w-5xl mx-auto" id="request-access">
        <SectionLabel variant="voltage">REQUEST ACCESS</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Request Private AI Access
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-3xl">
          Tell us where voice agents, secure automation, or controlled inference can create leverage.
          We will follow up with architecture guidance and the right deployment path.
        </p>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange('fullName')}
            required
          />
          <Input
            type="text"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange('companyName')}
            required
          />
          <Input
            type="email"
            placeholder="Professional Email"
            value={formData.professionalEmail}
            onChange={handleChange('professionalEmail')}
            required
          />
          <Input
            type="text"
            placeholder="Primary Use Case (e.g., after-hours voice intake)"
            value={formData.primaryUseCase}
            onChange={handleChange('primaryUseCase')}
            required
          />
          <div className="md:col-span-2">
            <Input
              type="text"
              placeholder="Referral: How did you hear about AetherPro?"
              value={formData.referral}
              onChange={handleChange('referral')}
              required
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <Button variant="voltage" size="lg" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
            </Button>
            {message && (
              <span
                className={`text-sm font-mono ${
                  status === 'success' ? 'text-status-active' : 'text-status-critical'
                }`}
              >
                {message}
              </span>
            )}
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}
