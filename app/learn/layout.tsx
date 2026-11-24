import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import styles from './learn.module.css'

export default function LearnLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <a href="#learn-main" className={styles.skip}>Skip to content</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <Image src="/brand/aetherpro-education-ice-blue.webp" width={624} height={182}
              alt="AetherPro Technologies home" loading="eager" fetchPriority="high" unoptimized />
          </Link>
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
          <Link href="/">Corporate home</Link>
        </div>
      </footer>
    </div>
  )
}
