import styles from './learn.module.css'

const questions = [
  {
    question: 'Do I need to buy hardware to run private AI?',
    answer: 'A dedicated host or an environment inside your own cloud account may meet your requirements. Verify the processing boundary and who controls access, backups, and recovery. Equipment ownership is a separate decision.',
  },
  {
    question: 'Can I keep using cloud AI if I deploy a private system?',
    answer: 'Yes. A hybrid design can use cloud tools for approved public tasks and keep confidential retrieval in a controlled environment. Set and test the rules for routing, logs, and what happens when a service is offline.',
  },
  {
    question: 'What can a business website automate first?',
    answer: 'Start with answers drawn from approved service pages or a callback request that goes to a person. Track correct answers and useful handoffs before adding scheduling, customer records, or other write access.',
  },
  {
    question: 'What should I ask about website package scope?',
    answer: 'Describe the pages, approved content, inquiry handoff, and integrations you need. Ask AetherPro to confirm current options, domain and content ownership, hosting, maintenance, and support before committing.',
  },
  {
    question: 'Does the readiness assessment send my answers anywhere?',
    answer: 'The education assessment evaluates your answers in this page. It does not send or store them, and you can see the result without providing contact details.',
  },
] as const

export function EducationFaq() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently asked questions</h2>
      <div className={styles.faq}>
        {questions.map(({ question, answer }) => (
          <details className={styles.disclosure} key={question}>
            <summary><strong>{question}</strong></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
