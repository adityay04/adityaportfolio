import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useEditorialMotion(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current

    if (!root) return

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const revealTargets = root.querySelectorAll<HTMLElement>(
          '[data-editorial-kicker], [data-editorial-heading], [data-editorial-detail]',
        )

        gsap.from(revealTargets, {
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
      }, root)
    }, root)

    return () => {
      context.revert()
      media.revert()
    }
  }, [rootRef])
}
