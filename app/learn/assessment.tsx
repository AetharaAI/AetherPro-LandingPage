'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { recommend, type Result } from './recommendation.mjs'
import styles from './learn.module.css'

const questions = {
  objective: {
    label: 'What is your primary business objective?',
    options: [
      ['website', 'Improve my website and handle ordinary visitor inquiries'],
      ['workflow', 'Help my team with an everyday business workflow'],
      ['private', 'Run AI inside a private or customer-controlled environment'],
    ],
  },
  sensitivity: {
    label: 'What data would the AI handle?',
    options: [
      ['ordinary', 'Public or routine business information approved for this use'],
      ['confidential', 'Confidential business or customer information'],
      ['restricted', 'Restricted information, or I am unsure whether use is permitted'],
    ],
  },
  integration: {
    label: 'What does the AI need to connect to?',
    options: [
      ['simple', 'A website, public content, or a single low-risk tool'],
      ['complex', 'Multiple systems, private records, or consequential write actions'],
    ],
  },
  operations: {
    label: 'Who can operate the system after launch?',
    options: [
      ['managed', 'We need a provider to handle day-to-day operations'],
      ['supported', 'We have a technical team or contracted operator for updates, monitoring, and recovery'],
    ],
  },
  investment: {
    label: 'How would you prefer to invest?',
    options: [
      ['usage', 'Start with a subscription or usage-based pilot'],
      ['infrastructure', 'Fund setup and ongoing operations for dedicated or owned infrastructure'],
    ],
  },
} as const

const results: Record<Result, { title: string; why: string; action: string; target: string }> = {
  specialist: {
    title: 'Specialist review',
    why: 'Your information is restricted or its permitted use is unclear. Ask the data owner and relevant specialists to confirm permitted processors, locations, and access before sending real records to an AI system.',
    action: 'Review the security checklist',
    target: '/learn/guide#security',
  },
  private: {
    title: 'Private feasibility assessment',
    why: 'You want private or customer-controlled execution, have a technical operator, and can fund setup and ongoing operations. Validate workloads, model licenses, capacity, and recovery before choosing a deployment.',
    action: 'See private AI inquiry options',
    target: '#private-ai',
  },
  hybrid: {
    title: 'Hybrid or controlled-hosting discovery',
    why: 'Your workflow involves confidentiality or complex integrations. Map where records can travel and which actions require approval before deciding what to host where.',
    action: 'See private AI inquiry options',
    target: '#private-ai',
  },
  website: {
    title: 'Website package discovery',
    why: 'Your goal is website-first, with ordinary data and a simple integration. Start by defining an approved FAQ or callback flow, then measure inquiries and staff handoffs before connecting more tools.',
    action: 'Explore the website inquiry path',
    target: '#website-ai',
  },
  managed: {
    title: 'Managed cloud evaluation',
    why: 'Your workflow can start with a managed pilot because the answers did not flag restricted data, confidentiality, complex integrations, or sufficient readiness for private feasibility. Compare retention, export, support, and cost using approved test data. If private execution is a requirement, validate the boundary before using real records.',
    action: 'Compare deployment approaches',
    target: '/learn/guide#approaches',
  },
}

export function Assessment() {
  const [ready, setReady] = useState(false)
  const [result, setResult] = useState<Result | null>(null)
  const [submission, setSubmission] = useState(0)
  const heading = useRef<HTMLHeadingElement>(null)

  useEffect(() => setReady(true), [])

  useEffect(() => {
    if (submission) heading.current?.focus()
  }, [submission])

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const answers = new FormData(event.currentTarget)
    setResult(recommend({
      objective: String(answers.get('objective')),
      sensitivity: String(answers.get('sensitivity')),
      integration: String(answers.get('integration')),
      operations: String(answers.get('operations')),
      investment: String(answers.get('investment')),
    }))
    setSubmission(count => count + 1)
  }

  const recommendation = result && results[result]

  return (
    <>
      <p>Answer five questions to get a starting point. Your selections stay in this page and are cleared when you reload it.</p>
      <noscript><p>The assessment needs JavaScript. You can compare options in the <a href="/learn/guide">starter guide</a>.</p></noscript>
      <form className={styles.form} onSubmit={submit} onChange={() => setResult(null)}>
        {Object.entries(questions).map(([name, question], index) => (
          <fieldset key={name} disabled={!ready} className={styles.question}>
            <legend>{index + 1}. {question.label}</legend>
            {question.options.map(([value, label]) => (
              <label key={value} className={styles.option}>
                <input type="radio" name={name} value={value} required />
                <span>{label}</span>
              </label>
            ))}
          </fieldset>
        ))}
        <button className={styles.primary} type="submit" disabled={!ready}>Show my recommendation</button>
      </form>
      {recommendation && (
        <div className={styles.result}>
          <p className={styles.eyebrow}>Your recommendation</p>
          <h3 ref={heading} tabIndex={-1}>{recommendation.title}</h3>
          <p>{recommendation.why}</p>
          <a className={styles.textLink} href={recommendation.target}>{recommendation.action}</a>
        </div>
      )}
      <details className={styles.rules}>
        <summary>How recommendations are chosen</summary>
        <ol>
          <li>Restricted or uncertain data goes to specialist review first.</li>
          <li>A private goal with technical support and infrastructure funding goes to feasibility assessment.</li>
          <li>Complex integrations or confidential data go to controlled-hosting discovery.</li>
          <li>A website-first goal with ordinary data and simple integration goes to website package discovery.</li>
          <li>Other workflows go to managed cloud evaluation.</li>
        </ol>
      </details>
    </>
  )
}
