import type { Metadata } from 'next'
import { Assessment } from './assessment'
import { lessons } from './lessons'
import styles from './learn.module.css'

const title = 'Own Your AI'
const description = 'Understand the differences between subscription AI, hosted agents, private deployments, and customer-owned AI infrastructure. Learn how to choose the right level of control for your business.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://aetherpro.us/learn' },
  openGraph: { title, description, url: 'https://aetherpro.us/learn', type: 'website', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

export default function LearnPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="learn-title">
        <div>
          <p className={styles.eyebrow}>Own Your AI</p>
          <h1 id="learn-title">You&apos;re using AI. But <em>who&apos;s really in control?</em></h1>
          <p className={styles.lede}>{description}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#assessment">Find my starting point</a>
            <a className={styles.secondary} href="#lessons">Explore the lessons</a>
          </div>
        </div>
        <aside className={styles.heroCard} aria-labelledby="compare-title">
          <h2 id="compare-title">Four ways to run AI</h2>
          <dl className={styles.approaches}>
            <div><dt>Subscription AI</dt><dd>Use a provider’s application.</dd></div>
            <div><dt>Hosted agents</dt><dd>Delegate a workflow within defined permissions.</dd></div>
            <div><dt>Private deployment</dt><dd>Run AI inside a specified environment.</dd></div>
            <div><dt>Customer-owned infrastructure</dt><dd>Own the equipment and assign operating responsibility.</dd></div>
          </dl>
          <a className={styles.textLink} href="/learn/guide">Read the free starter guide</a>
        </aside>
      </section>

      <section id="lessons" className={styles.section} aria-labelledby="lessons-title">
        <p className={styles.eyebrow}>The course</p>
        <h2 id="lessons-title">Five lessons on AI control</h2>
        <nav className={styles.lessonNav} aria-label="Lesson contents">
          <ol>{lessons.map(lesson => <li key={lesson.id}><a href={'#' + lesson.id}>{lesson.title}</a></li>)}</ol>
        </nav>
        <div className={styles.lessonList}>
          {lessons.map((lesson, index) => (
            <article id={lesson.id} key={lesson.id} className={styles.lesson} aria-labelledby={lesson.id + '-title'}>
              <p className={styles.eyebrow}>Lesson {index + 1}</p>
              <h3 id={lesson.id + '-title'}>{lesson.title}</h3>
              <p>{lesson.summary}</p>
              {lesson.sections.map(([heading, copy]) => (
                <div key={heading}><h4>{heading}</h4><p>{copy}</p></div>
              ))}
              <p className={styles.note}><strong>Try it.</strong> {lesson.exercise}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="presenter-title">
        <h2 id="presenter-title">Meet the presenters</h2>
        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>Aethara</h3>
            <p>Aethara is the educational presenter behind these business examples. Her prompt for a buying conversation is “Which decisions do we need to be able to make ourselves?”</p>
          </article>
          <article className={styles.card}>
            <h3>Aether</h3>
            <p>Aether is the technical demonstrator. His exercise is to take a sample booking request and trace which system reads it, who approves a change, and where the outcome is recorded.</p>
          </article>
        </div>
      </section>

      <section id="assessment" className={styles.section} aria-labelledby="assessment-title">
        <p className={styles.eyebrow}>Five-question assessment</p>
        <h2 id="assessment-title">What level of control fits your business?</h2>
        <Assessment />
      </section>

      <section id="next-steps" className={styles.section} aria-labelledby="next-title">
        <h2 id="next-title">Explore a next step</h2>
        <div className={styles.cards}>
          <article id="website-ai" className={styles.card}>
            <h3>AI business websites</h3>
            <p>Scope a website around approved answers, a callback or inquiry flow, and a clear handoff to your team. Ask what the package covers, who owns the site and domain, and what ongoing support costs.</p>
            <a className={styles.secondary} href="mailto:hello@aetherpro.us?subject=AI%20business%20website%20inquiry">Email about a website package</a>
          </article>
          <article id="private-ai" className={styles.card}>
            <h3>Anchor Systems and private AI</h3>
            <p>Ask AetherPro about your deployment goals, operating responsibilities, and the boundaries your workflow requires. Keep the first email high-level and leave out credentials and private records.</p>
            <div className={styles.actions}>
              <a className={styles.secondary} href="https://presenceos.us/deployment/">Open the deployment assessment</a>
              <a className={styles.textLink} href="mailto:hello@aetherpro.us?subject=Anchor%20Systems%20deployment%20inquiry">Email about a private deployment</a>
            </div>
          </article>
        </div>
        <p className={styles.contact}>Email links open your email app with <strong>hello@aetherpro.us</strong> as the recipient.</p>
      </section>
    </>
  )
}
