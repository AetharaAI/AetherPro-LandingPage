type ContactPayload = {
  email: string
  fullName?: string
  companyName?: string
  primaryUseCase?: string
  referral?: string
  source: string
}

export async function writeContact(payload: ContactPayload) {
  const { AETHERPRO_CONTACTS_API_URL, AETHERPRO_CONTACTS_API_KEY } = process.env

  if (!AETHERPRO_CONTACTS_API_URL) {
    throw new Error('AETHERPRO_CONTACTS_API_URL is not configured')
  }

  const body = {
    email: payload.email,
    full_name: payload.fullName ?? null,
    company_name: payload.companyName ?? null,
    primary_use_case: payload.primaryUseCase ?? null,
    referral: payload.referral ?? null,
    source: payload.source,
  }

  const response = await fetch(`${AETHERPRO_CONTACTS_API_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(AETHERPRO_CONTACTS_API_KEY ? { Authorization: `Bearer ${AETHERPRO_CONTACTS_API_KEY}` } : {}),
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Failed to write contact')
  }
}
