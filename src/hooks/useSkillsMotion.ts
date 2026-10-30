import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useSkillsMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current

    if (!root) return

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const headingTargets = root.querySelectorAll<HTMLElement>(
          '[data-skills-kicker], [data-skills-heading], [data-skills-intro]',
        )
        const categories =
          root.querySelectorAll<HTMLElement>('[data-skill-category]')

        gsap.from(headingTargets, {
          opacity: 0.82,
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

        gsap.from(categories, {
          opacity: 0.86,
          y: 18,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: categories[0],
            start: 'top 88%',
            once: true,
          },
        })
      }, root)
    }, root)

    return () => {
      context.revert()
      media.revert()
    }
  }, [rootRef])
}
