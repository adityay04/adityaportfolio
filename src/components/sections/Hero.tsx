import { useRef } from 'react'
import { KineticButton } from '../common/KineticButton'
import { SectionDivider } from '../common/SectionDivider'
import { useHeroMotion } from '../../hooks/useHeroMotion'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useHeroMotion(heroRef)

  return (
    <section aria-labelledby="hero-title" className="hero page-gutter" id="top" ref={heroRef}>
      <div className="hero__eyebrow" data-hero-label>
        <span className="hero__eyebrow-mark" aria-hidden="true" />
        Independently curious. Engineering-driven.
      </div>

      <h1 className="hero__title" id="hero-title">
        <span className="hero__line hero__line--first" data-hero-line>
          Building
        </span>
        <span className="hero__line hero__line--second" data-hero-line>
          Things that
        </span>
        <span className="hero__line hero__line--third" data-hero-line>
          <span className="hero__highlight">Make sense.</span>
        </span>
      </h1>

      <div className="hero__bottom">
        <p className="hero__intro">
          I&apos;m Aditya - a computer science student exploring the intersection
          of software engineering, AI, and intelligent systems. I like
          understanding how things work, then building something useful with
          that knowledge.
        </p>

        <dl aria-label="Profile details" className="hero__details">
          <div className="hero__detail">
            <dt>Location</dt>
            <dd>New Delhi, India</dd>
          </div>
          <div className="hero__detail">
            <dt>Focus</dt>
            <dd>Software engineering × AI</dd>
          </div>
          <div className="hero__detail">
            <dt>Status</dt>
            <dd>Open to engineering opportunities</dd>
          </div>
        </dl>

        <div className="hero__actions">
          <KineticButton className="kinetic-button--primary" href="#projects">
            Explore my work
          </KineticButton>
          <KineticButton href="#contact">Let&apos;s talk</KineticButton>
        </div>
      </div>

      <SectionDivider className="hero__bottom-rule" />
    </section>
  )
}
