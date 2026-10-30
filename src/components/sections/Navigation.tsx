import { useLayoutEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../common/ThemeToggle'
import { SectionDivider } from '../common/SectionDivider'

const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const headerRef = useRef<HTMLElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState('')

  useLayoutEffect(() => {
    const header = headerRef.current
    const spacer = spacerRef.current

    if (!header || !spacer) return

    const updateHeight = () => {
      const height = header.getBoundingClientRect().height
      spacer.style.height = `${height}px`
      document.documentElement.style.setProperty(
        '--site-header-height',
        `${height}px`,
      )
    }

    updateHeight()
    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(header)

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section[id]'),
    )
    const updateActiveSection = () => {
      const headerHeight = header.getBoundingClientRect().height
      const lastSection = sections.at(-1)
      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      const currentSection = atPageEnd
        ? lastSection
        : sections
            .filter(
              (section) =>
                section.getBoundingClientRect().top <= headerHeight + 64,
            )
            .at(-1) ?? sections[0]

      setActiveSection(currentSection?.id ?? '')
    }

    let activeFrame = 0
    const scheduleActiveUpdate = () => {
      if (activeFrame) return

      activeFrame = window.requestAnimationFrame(() => {
        activeFrame = 0
        updateActiveSection()
      })
    }
    const observer = new IntersectionObserver(scheduleActiveUpdate, {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0,
    })

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('resize', updateHeight)
    window.addEventListener('scroll', scheduleActiveUpdate, { passive: true })
    updateActiveSection()

    return () => {
      resizeObserver.disconnect()
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
      window.removeEventListener('scroll', scheduleActiveUpdate)
      if (activeFrame) window.cancelAnimationFrame(activeFrame)
      document.documentElement.style.removeProperty('--site-header-height')
    }
  }, [])

  return (
    <>
      <div aria-hidden="true" className="site-header-spacer" ref={spacerRef} />
      <header className="site-header" ref={headerRef}>
        <div className="site-header__top page-gutter">
          <a aria-label="Aditya Yadav home" className="site-brand" href="#top">
            <span className="site-brand__name">Aditya Yadav<sup>®</sup></span>
            <span className="site-brand__descriptor">Software engineer / AI builder</span>
          </a>

          <nav aria-label="Main navigation" className="site-nav">
            {navigationLinks.map(({ label, href }) => (
              <a
                aria-current={
                  activeSection === href.slice(1) ? 'location' : undefined
                }
                className="site-nav__link"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
        <SectionDivider />
      </header>
    </>
  )
}
