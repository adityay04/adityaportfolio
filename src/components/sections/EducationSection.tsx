import { useRef } from 'react'
import { SectionDivider } from '../common/SectionDivider'
import { useEditorialMotion } from '../../hooks/useEditorialMotion'

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEditorialMotion(sectionRef)

  return (
    <section
      aria-labelledby="education-title"
      className="editorial-section education-section page-gutter"
      id="education"
      ref={sectionRef}
    >
      <SectionDivider />

      <div className="section-kicker" data-editorial-kicker>
        <span>05 / Education</span>
        <span className="section-kicker__aside">The learning continues</span>
      </div>

      <h2
        className="education-section__title"
        data-editorial-heading
        id="education-title"
      >
        <span>The <em>foundation</em></span>
        <span>behind the building.</span>
      </h2>

      <p className="education-section__intro" data-editorial-heading>
        Building a strong foundation in computer science while exploring how
        software engineering and artificial intelligence can solve practical
        problems.
      </p>

      <article
        aria-labelledby="education-institution"
        className="education-record"
        data-editorial-detail
      >
        <div className="education-record__year">
          <span className="education-record__year-label">Graduation year</span>
          <span aria-label="2027" className="education-record__year-value">
            2027
          </span>
        </div>

        <div className="education-record__content">
          <h3
            className="education-record__institution"
            id="education-institution"
          >
            Bharati Vidyapeeth&apos;s College of Engineering
          </h3>
          <p className="education-record__degree">
            Bachelor of Technology <span>(B.Tech)</span>
          </p>
          <p className="education-record__field">
            Computer Science and Engineering
          </p>

          <dl className="education-record__metadata">
            <div className="education-record__date">
              <dt>Duration</dt>
              <dd>
                <time dateTime="2023-08">August 2023</time>
                {' – '}
                <time dateTime="2027-07">July 2027</time>
              </dd>
            </div>
            <div className="education-record__location">
              <dt>Location</dt>
              <dd>New Delhi, India</dd>
            </div>
            <div className="education-record__cgpa">
              <dt>CGPA</dt>
              <dd>8.01 <span>/ 10</span></dd>
            </div>
          </dl>
        </div>
      </article>
    </section>
  )
}
