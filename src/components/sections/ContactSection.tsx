import { useRef } from 'react'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { SectionDivider } from '../common/SectionDivider'
import { useEditorialMotion } from '../../hooks/useEditorialMotion'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/adityay04',
    handle: 'adityay04',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aditya-yadav2005',
    handle: 'aditya-yadav2005',
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEditorialMotion(sectionRef)

  return (
    <section
      aria-labelledby="contact-title"
      className="editorial-section contact-section page-gutter"
      id="contact"
      ref={sectionRef}
    >
      <SectionDivider />

      <div className="section-kicker" data-editorial-kicker>
        <span>06 / Let&apos;s connect</span>
        <span className="section-kicker__aside">Start a conversation</span>
      </div>

      <div className="contact-section__composition">
        <h2
          className="contact-section__title"
          data-editorial-heading
          id="contact-title"
        >
          <span>Have an</span>
          <span>
            <em>interesting</em>
          </span>
          <span>problem?</span>
          <span className="contact-section__final">
            <em>Let&apos;s build.</em>
          </span>
        </h2>

        <div className="contact-section__aside">
          <p className="contact-section__intro" data-editorial-detail>
            I&apos;m always interested in connecting with people building useful
            things across software engineering, AI, and intelligent systems. If
            you have an interesting problem or opportunity, let&apos;s talk.
          </p>

          <p className="contact-section__availability" data-editorial-detail>
            <span
              aria-hidden="true"
              className="contact-section__availability-mark"
            />
            Open to software engineering &amp; AI opportunities
          </p>
        </div>
      </div>

      <nav
        aria-label="Contact links"
        className="contact-links"
        data-editorial-detail
      >
        {socialLinks.map(({ label, href, handle }) => (
          <a
            aria-label={`${label}: ${handle} (opens in a new tab)`}
            className="contact-link"
            href={href}
            key={label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="contact-link__label">{label}</span>
            <span className="contact-link__handle">{handle}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="contact-link__arrow"
            />
          </a>
        ))}
      </nav>
    </section>
  )
}

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null)

  useEditorialMotion(footerRef)

  return (
    <footer className="site-footer page-gutter" ref={footerRef}>
      <SectionDivider />

      <div className="site-footer__main" data-editorial-detail>
        <a
          aria-label="Aditya Yadav, back to top"
          className="site-footer__brand"
          href="#top"
        >
          <span className="site-footer__name">Aditya Yadav</span>
          <span className="site-footer__descriptor">
            Software engineer / AI builder
          </span>
        </a>

        <span className="site-footer__location">New Delhi, India</span>

        <nav aria-label="Social links" className="site-footer__links">
          {socialLinks.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              rel="noopener noreferrer"
              target="_blank"
            >
              {label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a aria-label="Back to top" className="site-footer__top" href="#top">
            <span>Back to top</span>
            <ArrowUp aria-hidden="true" />
          </a>
        </nav>
      </div>

      <p className="site-footer__copyright" data-editorial-detail>
        © {new Date().getFullYear()} Aditya Yadav. All rights reserved.
      </p>
    </footer>
  )
}
