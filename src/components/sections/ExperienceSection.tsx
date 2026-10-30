import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowUpRight, Minus, Plus } from 'lucide-react'
import { gsap } from 'gsap'
import { SectionDivider } from '../common/SectionDivider'
import { useEditorialMotion } from '../../hooks/useEditorialMotion'

const experiences = [
  {
    id: 'alchimetis',
    number: '01',
    company: 'Alchimetis',
    role: 'AI Engineer Intern',
    location: 'Michigan, US — Remote',
    duration: 'September 2026 – Present',
    details: [
      'Designed and integrated generative AI pipelines and fine-tuned open-source LLMs using PyTorch and Hugging Face.',
      'Improved domain-specific response relevance by 32%.',
      'Developed REST APIs using FastAPI for model serving and frontend integration.',
      'Optimized vector search and embedding retrieval using ChromaDB and LangChain.',
    ],
  },
  {
    id: 'sequoia-technologies',
    number: '02',
    company: 'Sequoia Technologies',
    role: 'Software Engineering Intern',
    location: 'New Delhi, India — Remote',
    duration: 'October 2026 – Present',
    details: [
      'Developed OneLab pathology SaaS workflows for specimen collection and reporting.',
      'Implemented shared sample IDs and barcodes for compatible tests using the same physical specimen.',
      'Built configurable sample-color management and camera-based barcode entry.',
      'Integrated self-hosted TinyMCE into clinical notes and report comments, including rich formatting and authenticated image uploads.',
    ],
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollFrameRef = useRef<number | null>(null)
  const panelRefs = useRef(new Map<string, HTMLDivElement>())
  const previousExpandedIdRef = useRef<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEditorialMotion(sectionRef)

  useLayoutEffect(() => {
    if (scrollFrameRef.current !== null) {
      window.cancelAnimationFrame(scrollFrameRef.current)
      scrollFrameRef.current = null
    }

    const previousId = previousExpandedIdRef.current
    previousExpandedIdRef.current = expandedId

    if (previousId === expandedId) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (previousId) {
      const previousPanel = panelRefs.current.get(previousId)

      if (previousPanel) {
        gsap.killTweensOf(previousPanel)
        gsap.set(previousPanel, {
          height: previousPanel.scrollHeight,
          visibility: 'visible',
        })
        gsap.to(previousPanel, {
          height: 0,
          duration: prefersReducedMotion ? 0 : 0.35,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(previousPanel, { clearProps: 'height', visibility: 'hidden' })
          },
        })
      }
    }

    if (!expandedId) return

    const panel = panelRefs.current.get(expandedId)

    if (!panel) return

    gsap.killTweensOf(panel)
    gsap.set(panel, { height: 0, visibility: 'visible' })
    gsap.to(panel, {
      height: panel.scrollHeight,
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(panel, { clearProps: 'height' })
        scrollFrameRef.current = window.requestAnimationFrame(() => {
          const { top, bottom } = panel.getBoundingClientRect()
          const headerHeight =
            Number.parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue(
                '--site-header-height',
              ),
            ) || 0
          const isFullyVisible =
            top >= headerHeight + 16 && bottom <= window.innerHeight - 24

          if (!isFullyVisible) {
            panel.scrollIntoView({
              behavior: prefersReducedMotion ? 'instant' : 'smooth',
              block: 'nearest',
            })
          }

          scrollFrameRef.current = null
        })
      },
    })
  }, [expandedId])

  useEffect(
    () => () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current)
      }
      panelRefs.current.forEach((panel) => gsap.killTweensOf(panel))
    },
    [],
  )

  return (
    <section
      aria-labelledby="experience-title"
      className="editorial-section experience-section page-gutter"
      id="experience"
      ref={sectionRef}
    >
      <SectionDivider />

      <div className="section-kicker" data-editorial-kicker>
        <span>02 / Where I&apos;ve been building</span>
        <span className="section-kicker__aside">Professional experience</span>
      </div>

      <h2 className="experience-section__title" id="experience-title" data-editorial-heading>
        <span>Engineering</span>
        <span>in the <em>real world.</em></span>
      </h2>

      <div className="experience-list">
        {experiences.map((experience) => {
          const isExpanded = expandedId === experience.id
          const panelId = `${experience.id}-details`

          return (
            <article
              className={`experience-row${isExpanded ? ' is-expanded' : ''}`}
              key={experience.id}
            >
              <span aria-hidden="true" className="experience-row__watermark">
                {experience.number}
              </span>

              <button
                aria-controls={panelId}
                aria-expanded={isExpanded}
                aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${experience.company}, ${experience.role}`}
                className="experience-row__trigger"
                onClick={() =>
                  setExpandedId(isExpanded ? null : experience.id)
                }
                type="button"
              >
                <span className="experience-row__index">{experience.number}</span>

                <span className="experience-row__identity">
                  <span className="experience-row__company" role="heading" aria-level={3}>
                    {experience.company}
                  </span>
                  <span className="experience-row__role">{experience.role}</span>
                </span>

                <span className="experience-row__meta">
                  <span>{experience.duration}</span>
                  <span>{experience.location}</span>
                </span>

                <span aria-hidden="true" className="experience-row__controls">
                  <ArrowUpRight className="experience-row__arrow" size={22} />
                  {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div
                aria-hidden={!isExpanded}
                className={`experience-row__panel${isExpanded ? ' is-expanded' : ''}`}
                inert={!isExpanded}
                id={panelId}
                ref={(element) => {
                  if (element) panelRefs.current.set(experience.id, element)
                  else panelRefs.current.delete(experience.id)
                }}
              >
                <div className="experience-row__panel-inner">
                  <ul>
                    {experience.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
