import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useProjectsMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current

    if (!root) return

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const headingTargets = root.querySelectorAll<HTMLElement>(
          '[data-projects-kicker], [data-projects-heading], [data-projects-intro]',
        )
        const entries = root.querySelectorAll<HTMLElement>('[data-project-entry]')

        gsap.from(headingTargets, {
          opacity: 0.8,
          y: 16,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            once: true,
          },
        })

        entries.forEach((entry) => {
          gsap.from(entry, {
            opacity: 0.85,
            y: 20,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: entry,
              start: 'top 88%',
              once: true,
            },
          })
        })
      }, root)
    }, root)

    return () => {
      context.revert()
      media.revert()
    }
  }, [rootRef])
}
