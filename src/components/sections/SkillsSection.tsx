import { useRef } from 'react'
import { SectionDivider } from '../common/SectionDivider'
import { useSkillsMotion } from '../../hooks/useSkillsMotion'

const skillGroups = [
  {
    number: '01',
    title: 'Languages',
    skills: [
      'Python',
      'C++',
      'JavaScript',
      'TypeScript',
      'SQL',
      'HTML',
      'CSS',
    ],
  },
  {
    number: '02',
    title: 'Frameworks & Development',
    skills: [
      'React',
      'Next.js',
      'FastAPI',
      'Tailwind CSS',
      'GSAP',
      'Streamlit',
    ],
  },
  {
    number: '03',
    title: 'AI / Machine Learning',
    skills: [
      'PyTorch',
      'Hugging Face',
      'TensorFlow',
      'Scikit-learn',
      'LangChain',
      'NumPy',
      'Pandas',
      'NLP',
      'LLMs',
      'Retrieval-Augmented Generation',
      'Fine-tuning',
      'Embeddings',
      'Prompt Engineering',
    ],
  },
  {
    number: '04',
    title: 'Databases & Infrastructure',
    skills: [
      'PostgreSQL',
      'pgvector',
      'ChromaDB',
      'Qdrant',
      'Docker',
      'Ollama',
      'Open WebUI',
      'Git',
      'GitHub',
      'Vercel',
      'Jupyter',
    ],
  },
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useSkillsMotion(sectionRef)

  return (
    <section
      aria-labelledby="skills-title"
      className="editorial-section skills-section page-gutter"
      id="skills"
      ref={sectionRef}
    >
      <SectionDivider />

      <div className="section-kicker" data-skills-kicker>
        <span>04 / Technical expertise</span>
        <span className="section-kicker__aside">Tools, understood</span>
      </div>

      <h2 className="skills-section__title" data-skills-heading id="skills-title">
        <span>
          <em>Tools</em> are the
        </span>
        <span>medium. understanding</span>
        <span>is the <em>advantage.</em></span>
      </h2>

      <p className="skills-section__intro" data-skills-intro>
        I care about understanding the tools I use — from language fundamentals
        and system architecture to the frameworks and infrastructure that bring
        products to life.
      </p>

      <div aria-label="Technical skills by category" className="skills-grid">
        {skillGroups.map(({ number, title, skills }) => (
          <article
            className="skill-category"
            data-skill-category
            key={number}
          >
            <div className="skill-category__heading">
              <span aria-hidden="true" className="skill-category__number">
                {number}
              </span>
              <h3 className="skill-category__title">{title}</h3>
            </div>
            <ul aria-label={`${title} skills`} className="skill-category__list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
