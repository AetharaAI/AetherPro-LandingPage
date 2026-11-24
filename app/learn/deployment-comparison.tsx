import styles from './learn.module.css'

const models = [
  {
    title: 'Subscription AI',
    summary: 'Use a provider’s application.',
    operations: 'The provider runs the application. Your team manages accounts, approved inputs, and review of results.',
    data: 'The provider handles processing and storage under its terms. Confirm retention, access, and export options.',
    costs: 'Seats or metered use, plus staff review and the cost of switching tools.',
    example: 'A retailer drafts product descriptions from its published catalog and reviews each draft before publishing.',
  },
  {
    title: 'Hosted agents',
    summary: 'Delegate a workflow with defined permissions.',
    operations: 'The provider runs the workflow. Agree on tool scopes, approval gates, escalation, and who can pause it.',
    data: 'The host and connected tools may each process records. Map both paths and verify their settings.',
    costs: 'Setup, integrations, usage, support, and staff time for approvals and exceptions.',
    example: 'A repair shop has an agent propose open appointment times, while a dispatcher approves schedule changes.',
  },
  {
    title: 'Private deployment',
    summary: 'Run AI inside a specified environment.',
    operations: 'Your team or a named provider operates a dedicated environment. Assign patching, monitoring, and recovery.',
    data: 'Define approved locations, logs, backups, remote support access, and any outbound connections.',
    costs: 'Dedicated capacity, setup, software licenses, ongoing support, and recovery testing.',
    example: 'A manufacturer searches internal work instructions in its own cloud account with restricted network access.',
  },
  {
    title: 'Customer-owned infrastructure',
    summary: 'Own the equipment and assign operating responsibility.',
    operations: 'You own the equipment. Your team or a contracted operator runs it. Model and software rights follow their licenses.',
    data: 'You can control where local services run. External tools, backups, and support can still cross that boundary.',
    costs: 'Hardware, power, replacement, licensing, network, staffing, and downtime coverage.',
    example: 'A site with unreliable connectivity runs document search on its own server and tests recovery from a local backup.',
  },
] as const

export function DeploymentComparison() {
  return (
    <section id="compare" className={styles.section} aria-labelledby="compare-title">
      <h2 id="compare-title">Compare four ways to run AI</h2>
      <p>Open any two or more approaches to compare who operates them, where data goes, and what costs to plan for.</p>
      <div className={styles.comparison}>
        {models.map(model => (
          <details className={styles.disclosure} key={model.title}>
            <summary>
              <strong>{model.title}</strong>
              <span>{model.summary}</span>
            </summary>
            <dl className={styles.comparisonFields}>
              <div><dt>Who operates it</dt><dd>{model.operations}</dd></div>
              <div><dt>Where data goes</dt><dd>{model.data}</dd></div>
              <div><dt>What you pay for</dt><dd>{model.costs}</dd></div>
              <div><dt>Business example</dt><dd>{model.example}</dd></div>
            </dl>
          </details>
        ))}
      </div>
    </section>
  )
}
