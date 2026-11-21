import type { Metadata } from 'next'
import styles from '../learn.module.css'

const title = 'The Business Owner’s Guide to AI Ownership & Control'
const description = 'A free procurement and deployment guide for business owners evaluating subscription, hosted, private, and customer-owned AI.'
const canonical = 'https://aetherpro.us/learn/guide'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'article', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

const contents = [
  ['approaches', 'Four deployment approaches'],
  ['questions', 'Five procurement questions'],
  ['ownership', 'What infrastructure ownership means'],
  ['pilot', 'Choose your first project'],
  ['security', 'Security and permissions checklist'],
  ['costs', 'Ongoing costs'],
  ['decision', 'Deployment decision checklist'],
] as const

export default function GuidePage() {
  return (
    <article className={styles.guide}>
      <p className={styles.eyebrow}>Own Your AI · Free starter guide</p>
      <h1>{title}</h1>
      <p className={styles.lede}>Use this guide to prepare for a vendor conversation, choose a first project, and decide what your team needs to control.</p>
      <nav className={styles.lessonNav} aria-label="Guide contents">
        <ol>{contents.map(([id, label]) => <li key={id}><a href={'#' + id}>{label}</a></li>)}</ol>
      </nav>

      <section id="approaches" className={styles.section}>
        <h2>Four deployment approaches</h2>
        <dl className={styles.guideApproaches}>
          <div><dt>Subscription application</dt><dd>Use a provider’s interface. Good for approved tasks with few integrations. Check data use, retention, limits, and export.</dd></div>
          <div><dt>Hosted agent</dt><dd>A provider operates a workflow with tools such as email or scheduling. Agree on tool permissions, human handoffs, evidence, and who can pause it.</dd></div>
          <div><dt>Private deployment</dt><dd>Run workloads within a defined environment, such as a dedicated host or your cloud account. Confirm which services and operators can cross that boundary.</dd></div>
          <div><dt>Customer-owned infrastructure</dt><dd>Buy and control equipment for the workload. You can hire an operator, but someone must own capacity, updates, backups, incident response, and replacement.</dd></div>
        </dl>
        <p>A hybrid design combines approaches. For example, keep internal retrieval in a controlled environment and let a separate hosted assistant answer from published material.</p>
      </section>

      <section id="questions" className={styles.section}>
        <h2>Five procurement questions</h2>
        <ol>
          <li>Where do inputs, outputs, logs, and backups go, who can access them, and when are they deleted?</li>
          <li>Who owns the domain, cloud accounts, credentials, data, and workflow definitions, and what can we export on exit?</li>
          <li>Which model and software licenses apply to our intended use, and who approves changes?</li>
          <li>Which actions can agents perform, who must approve them, and what records can we inspect afterward?</li>
          <li>What does the full operating cost include, and who handles support, incidents, and restoration?</li>
        </ol>
      </section>

      <section id="ownership" className={styles.section}>
        <h2>What infrastructure ownership means</h2>
        <p>Physical ownership gives you rights over equipment. Control also depends on who holds administrator credentials, manages the network, and can recover the system. Cloud account control can give you authority over configuration without physical ownership. Model weights, software, and support each carry separate terms.</p>
        <p>Ask for an exit plan with a data export format, workflow definitions, key rotation steps, and a handover or deletion process. Test a small export before committing.</p>
      </section>

      <section id="pilot" className={styles.section}>
        <h2>Choose your first project</h2>
        <p>Choose one repeatable task with approved inputs, a human owner, and a manual fallback. For example, draft answers to common questions from published service pages. Compare correct drafts, time to review, and escalations with your current process. Begin with sample inputs and agree on a cap for time and spend.</p>
        <p>Set an acceptance threshold and a stop condition before the pilot. Expand permissions only after reviewing errors and showing that people can pause the workflow.</p>
      </section>

      <section id="security" className={styles.section}>
        <h2>Security and permissions checklist</h2>
        <ul>
          <li>Classify inputs and map storage, processing, support access, retention, and deletion.</li>
          <li>Give each agent its own credentials and only the access it needs.</li>
          <li>Require explicit approval for costly, public, sensitive, or hard-to-reverse actions.</li>
          <li>Keep reviewable evidence of decisions and actions with restricted access and limited retention.</li>
          <li>Exercise credential revocation, incident escalation, manual fallback, and backup restoration.</li>
        </ul>
      </section>

      <section id="costs" className={styles.section}>
        <h2>Ongoing costs</h2>
        <p>Estimate a year of normal and peak usage. Include subscriptions, model and tool usage, storage, network charges, licenses, patches, monitoring, on-call support, backups, and staff review. For owned equipment include electricity, cooling, replacement, and spare capacity. Price a migration and test recovery time before agreeing to support terms.</p>
      </section>

      <section id="decision" className={styles.section}>
        <h2>Deployment decision checklist</h2>
        <ol>
          <li>Write the workflow goal, baseline, and owner.</li>
          <li>Confirm the allowed data and where it may travel. If any of it is restricted or unclear, get specialist review first.</li>
          <li>Compare operating models at the same volume, quality target, and recovery needs.</li>
          <li>Set approval and evidence requirements, then test with approved examples.</li>
          <li>Document cost, support, exit, and rollback. Approve broader use only after the pilot passes.</li>
        </ol>
        <div className={styles.actions}>
          <a className={styles.primary} href="/learn#assessment">Take the assessment</a>
          <a className={styles.secondary} href="/learn#lessons">Return to the lessons</a>
        </div>
      </section>
    </article>
  )
}
