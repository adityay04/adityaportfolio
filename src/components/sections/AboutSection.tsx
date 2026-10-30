import { useRef } from 'react'
import { SectionDivider } from '../common/SectionDivider'
import { useEditorialMotion } from '../../hooks/useEditorialMotion'

const focusAreas = [
  {
    number: '01',
    title: 'Software engineering',
    description: 'Building useful applications, APIs, and reliable systems.',
  },
  {
    number: '02',
    title: 'Artificial intelligence',
    description: 'Exploring machine learning, LLMs, neural networks, and RAG.',
  },
  {
    number: '03',
    title: 'First principles',
    description:
      'Understanding algorithms, architecture, and engineering trade-offs rather than blindly depending on abstractions.',
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEditorialMotion(sectionRef)

  return (
    <section
      aria-labelledby="about-title"
      className="editorial-section about-section page-gutter"
      id="about"
      ref={sectionRef}
    >
      <SectionDivider />

      <div className="section-kicker" data-editorial-kicker>
        <span>01 / A little about me</span>
        <span className="section-kicker__aside">Curiosity into practice</span>
      </div>

      <h2 className="about-section__title" id="about-title" data-editorial-heading>
        <span>Not just writing code.</span>
        <span>
          Understanding what&apos;s <em>underneath.</em>
        </span>
      </h2>

      <div className="about-section__intro">
        <div className="about-section__intro-index" aria-hidden="true">
          AY / 01
        </div>
        <div className="about-section__copy">
          <p>
            I&apos;m Aditya, a Computer Science student interested in the
            intersection of software engineering and artificial intelligence.
          </p>
          <p>
            I enjoy understanding how things work beneath the surface — from
            algorithms and system architecture to neural networks and retrieval
            systems — and using that understanding to build practical products.
          </p>
        </div>
      </div>

      <div aria-label="Areas of focus" className="focus-list">
        {focusAreas.map(({ number, title, description }) => (
          <article className="focus-row" key={number}>
            <span className="focus-row__number">{number}</span>
            <h3 className="focus-row__title">{title}</h3>
            <p className="focus-row__description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
