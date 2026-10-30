import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current

    if (!root) return

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const label = root.querySelector<HTMLElement>('[data-hero-label]')
        const lines = root.querySelectorAll<HTMLElement>('[data-hero-line]')

        if (label) {
          gsap.from(label, {
            opacity: 0.65,
            y: 8,
            duration: 0.45,
            ease: 'power2.out',
          })
        }

        gsap.from(lines, {
          opacity: 0.8,
          y: 22,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
        })

        const firstLine = root.querySelector<HTMLElement>('.hero__line--first')
        const thirdLine = root.querySelector<HTMLElement>('.hero__line--third')

        if (firstLine) {
          gsap.to(firstLine, {
            x: -24,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          })
        }

        if (thirdLine) {
          gsap.to(thirdLine, {
            x: 24,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          })
        }
      }, root)
    }, root)

    return () => {
      context.revert()
      media.revert()
    }
  }, [rootRef])
}
