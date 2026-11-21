import Image from 'next/image'
import type { ReactNode } from 'react'
import styles from './learn.module.css'

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a href="#learn-main" className={styles.skip}>Skip to content</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="/" className={styles.brand}>
            <Image src="/brand/aetherpro-header-lockup-480.png" width={480} height={131}
              alt="AetherPro Technologies home" unoptimized />
          </a>
          <nav aria-label="Education" className={styles.nav}>
            <a href="/learn#lessons">Lessons</a>
            <a href="/learn#assessment">Assessment</a>
            <a href="/learn/guide">Starter guide</a>
          </nav>
        </div>
      </header>
      <main id="learn-main" tabIndex={-1} className={styles.container}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.headerInner}>
          <span>AetherPro Technologies</span>
          <a href="/learn">Own Your AI</a>
          <a href="/">Corporate home</a>
        </div>
      </footer>
    </div>
  )
}
