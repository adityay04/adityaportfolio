import { Hero } from './components/sections/Hero'
import { Navigation } from './components/sections/Navigation'
import { AboutSection } from './components/sections/AboutSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { EducationSection } from './components/sections/EducationSection'
import {
  ContactSection,
  SiteFooter,
} from './components/sections/ContactSection'

export default function App() {
  return (
    <div className="site-shell min-h-svh text-copy" id="top">
      <div aria-hidden="true" className="site-background" />
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
