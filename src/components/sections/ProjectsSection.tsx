import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SectionDivider } from '../common/SectionDivider'
import { useProjectsMotion } from '../../hooks/useProjectsMotion'

const projects = [
  {
    number: '01',
    name: 'AquaCompute',
    category: 'AI / Sustainability',
    description:
      'An open-source environmental impact estimator that explores the energy, water, and carbon footprint of AI inference.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Recharts',
      'OpenRouter API',
    ],
    highlights: [
      'Catalog of 400+ LLMs with per-token environmental impact estimates.',
      'Model comparison and traffic simulation.',
      'Country-specific equivalents to make environmental impact easier to understand.',
      'Infrastructure What-If simulator with PUE, WUE, and grid-intensity controls.',
    ],
    marker: '400+ models',
    emphasis: true,
  },
  {
    number: '02',
    name: 'Panduit Conversational RAG',
    category: 'AI / Retrieval systems',
    description:
      'A conversational retrieval-augmented generation system designed to answer questions over Panduit catalog documentation.',
    technologies: [
      'Python',
      'PostgreSQL',
      'pgvector',
      'Ollama',
      'Groq',
      'Open WebUI',
      'Docker',
    ],
    highlights: [
      'Ingestion and semantic retrieval over 1,000+ pages of catalog data.',
      'Embedding-based retrieval using Ollama.',
      'Deployed on a Linux cloud server using Docker.',
      'Integrated a Groq-hosted openai/gpt-oss-120b model with Open WebUI.',
    ],
    marker: 'In progress',
    status: 'In progress',
  },
  {
    number: '03',
    name: 'Neural Networks from Scratch',
    category: 'C++ / Machine learning',
    description:
      'An implementation-focused exploration of neural network fundamentals, built in C++ to understand what happens beneath high-level ML frameworks.',
    technologies: ['C++'],
    highlights: [
      'C++ implementation of a feedforward neural network.',
      'Explores forward propagation, backpropagation, and weight updates.',
      'Trained on the XOR problem.',
    ],
    marker: 'Loss ≈ 0.00049',
    markerDetail: 'at epoch 9,000',
  },
  {
    number: '04',
    name: 'Compiler Studio (NOVA)',
    category: 'C++ / Compiler design',
    description:
      'A project exploring compiler design and programming-language internals, with a focus on understanding how source code moves through the compilation process.',
    technologies: ['C++'],
    highlights: ['Compiler design and programming-language fundamentals.'],
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useProjectsMotion(sectionRef)

  return (
    <section
      aria-labelledby="projects-title"
      className="editorial-section projects-section page-gutter"
      id="projects"
      ref={sectionRef}
    >
      <SectionDivider />

      <div className="section-kicker" data-projects-kicker>
        <span>03 / Selected work</span>
        <span className="section-kicker__aside">Ideas made tangible</span>
      </div>

      <h2 className="projects-section__title" id="projects-title">
        <span data-projects-heading>Built to <em>explore.</em></span>
        <span data-projects-heading>Engineered to <em>solve.</em></span>
      </h2>

      <p className="projects-section__intro" data-projects-intro>
        Projects are where I turn curiosity into working systems — exploring
        everything from AI infrastructure and retrieval pipelines to the
        fundamentals of neural networks and compilers.
      </p>

      <div aria-label="Selected projects" className="projects-list">
        {projects.map((project) => (
          <article
            className={`project-entry${project.emphasis ? ' project-entry--featured' : ''}`}
            key={project.number}
            data-project-entry
          >
            <div className="project-entry__meta">
              <span className="project-entry__number">{project.number}</span>
              <span className="project-entry__category">{project.category}</span>
            </div>

            <div className="project-entry__main">
              <div className="project-entry__heading-row">
                <h3 className="project-entry__title">{project.name}</h3>
                <ArrowUpRight
                  aria-hidden="true"
                  className="project-entry__arrow"
                  size={28}
                />
              </div>

              <p className="project-entry__description">{project.description}</p>

              <ul
                aria-label={`${project.name} technologies`}
                className="project-entry__technologies"
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>

            <div className="project-entry__details">
              {project.marker && project.number !== '02' && (
                <div
                  className={`project-entry__marker${project.emphasis ? ' project-entry__marker--featured' : ''}`}
                >
                  <span>{project.marker}</span>
                  {project.markerDetail && (
                    <small>{project.markerDetail}</small>
                  )}
                </div>
              )}
              {project.status && (
                <span className="project-entry__status">{project.status}</span>
              )}
              <ul className="project-entry__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
