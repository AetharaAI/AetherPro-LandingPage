'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SectionWrapper } from '@/components/layout/section-wrapper'
import { SectionLabel } from '@/components/ui/section-label'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const initialForm = {
  fullName: '',
  companyName: '',
  professionalEmail: '',
  serviceInterest: '',
  notes: '',
}

const serviceOptions = [
  'VoiceOps',
  'Passport / APIS Identity',
  'CollabFabric Multi-Agent Coordination',
  'RedWatch Compliance Readiness',
  'Managed Private Cloud or Dedicated Deployment',
  'Other',
]

export function RequestAccessSection() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange =
    (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          professionalEmail: formData.professionalEmail,
          primaryUseCase: formData.serviceInterest,
          referral: formData.notes,
        }),
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
      <div className="mx-auto max-w-5xl scroll-mt-32" id="request-access">
        <SectionLabel variant="voltage">REQUEST ACCESS</SectionLabel>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-plasma mb-6 leading-tight">
          Request Private AI Access
        </h2>
        <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-3xl">
          Tell us which AetherPro surface you want to evaluate and we will follow up with the right
          deployment path, architecture guidance, and access steps.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
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
          <Select value={formData.serviceInterest} onChange={handleChange('serviceInterest')} required>
            <option value="" disabled>
              Service Interested In
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <div className="md:col-span-2">
            <Textarea
              placeholder="What are you trying to solve? Optional context helps us route the request."
              value={formData.notes}
              onChange={handleChange('notes')}
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
