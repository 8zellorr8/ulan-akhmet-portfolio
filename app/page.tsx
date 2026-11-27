import Image from 'next/image';
import { portfolio, type Project } from './content';

function TechnologyList({ technologies }: { technologies: readonly string[] }) {
  return (
    <ul className="stack" role="list" aria-label="Technologies">
      {technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { cover, localName } = project;
  const displayName = localName ? `${localName.text} (${project.name})` : project.name;

  return (
    <article className="project-card" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="project-title">
        <h4 id={`${project.id}-title`}>
          {localName ? <><span lang={localName.lang}>{localName.text}</span>{` (${project.name})`}</> : project.name}
        </h4>
        {project.inDevelopment && <span className="project-status">In development</span>}
      </div>
      {project.context && <p className="project-context">{project.context}</p>}
      {cover && (
        <div className="case-cover" data-theme={cover.theme} data-tone={cover.tone} data-screenshot={cover.screenshot ? true : undefined}>
          {cover.screenshot && (
            <a
              className="cover-screenshot"
              href={cover.screenshot.src}
              target="_blank"
              rel="noreferrer"
              aria-label="Open demo screenshot in a new tab"
            >
              <Image
                src={cover.screenshot.src}
                alt={cover.screenshot.alt}
                width={cover.screenshot.width}
                height={cover.screenshot.height}
                unoptimized
              />
              <span>Open demo screenshot</span>
            </a>
          )}
          <p className="cover-value">{cover.value}</p>
          <p className="cover-label">{cover.label}</p>
        </div>
      )}
      <p className="project-description">{project.description}</p>
      <div className="project-work">
        <p><strong>{project.contributionLabel ?? 'My contribution'}</strong>{project.contribution}</p>
        {project.outcome && <p className="project-outcome">{project.outcome}</p>}
      </div>
      <TechnologyList technologies={project.stack} />
      {project.repository && (
        <div className="project-links">
          <a
            href={project.repository}
            className="text-link"
            aria-label={`View code for ${displayName} on GitHub`}
            aria-describedby={project.accessRestricted ? `${project.id}-access` : undefined}
          >
            View code
          </a>
          {project.accessRestricted && <span id={`${project.id}-access`}>Repository access restricted</span>}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  const { highlight } = portfolio;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="UA, Ulan Akhmet, top of page">UA</a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#workflow">Workflow</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="shell">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="location">{portfolio.location}</p>
            <h1 id="intro-title">{portfolio.name}</h1>
            <p className="hero-role">{portfolio.role}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View Projects</a>
              <a className="button button-secondary" href={portfolio.resume} download="Ulan-Akhmet-CV.pdf">Download CV</a>
            </div>
          </div>
          <div className="hero-highlight">
            <a className="highlight-project" href="#replimetr">{highlight.project}</a>
            <p className="highlight-number">{highlight.scored}<span> / </span>{highlight.total}</p>
            <p className="highlight-caption">{highlight.label}</p>
          </div>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="projects-header">
            <h2 id="projects-title">Projects</h2>
            <nav className="project-jumps" aria-label="Project sections">
              <a href="#featured-projects">Featured</a>
              <a href="#hackathon-projects">Hackathons</a>
              <a href="#course-projects">Coursework</a>
            </nav>
          </div>
          <section className="project-group" id="featured-projects" aria-labelledby="featured-title">
            <h3 id="featured-title">Featured projects</h3>
            <div className="project-grid">
              {portfolio.projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>
          <section className="project-group" id="hackathon-projects" aria-labelledby="hackathon-title">
            <h3 id="hackathon-title">More hackathon projects</h3>
            <div className="project-grid archive-grid">
              {portfolio.hackathonProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </section>
          <section className="project-group" id="course-projects" aria-labelledby="course-title">
            <h3 id="course-title">Coursework</h3>
            <ul className="course-grid" role="list">
              {portfolio.courseProjects.map((project) => (
                <li className="course-card" id={project.id} key={project.id}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <TechnologyList technologies={project.stack} />
                </li>
              ))}
            </ul>
          </section>
        </section>

        <div className="profile-content">
          <section className="profile-section" id="about" aria-labelledby="about-title">
            <h2 id="about-title">About</h2>
            <p>{portfolio.education}</p>
            <p>{portfolio.interests}</p>
          </section>

          <section className="workflow-section" id="workflow" aria-labelledby="workflow-title">
            <h2 id="workflow-title">How I Work with Codex</h2>
            <p className="workflow-intro">{portfolio.workflow.intro}</p>
            <ol className="workflow-steps" role="list">
              {portfolio.workflow.steps.map((step, index) => (
                <li key={step.title} className="workflow-step">
                  <span className="workflow-number" aria-hidden="true">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="workflow-example">
              <h3>A Code Review Example</h3>
              <p>{portfolio.workflow.example}</p>
              <nav className="workflow-links" aria-label="Workflow examples">
                {portfolio.workflow.links.map((link) => (
                  <a key={link.label} className="text-link" href={link.href}>{link.label}</a>
                ))}
              </nav>
            </div>
          </section>

          <section className="stack-overview" id="stack" aria-labelledby="stack-title">
            <h2 id="stack-title">Stack and Learning</h2>
            <div className="profile-grid">
              <section className="profile-section" aria-labelledby="tools-title">
                <h3 id="tools-title">Tools I’ve Used</h3>
                {portfolio.stack.current.map((group) => (
                  <div className="tool-group" key={group.label}>
                    <p className="tool-label">{group.label}</p>
                    <TechnologyList technologies={group.tools} />
                  </div>
                ))}
              </section>
              <section className="learning-section" id="learning" aria-labelledby="learning-title">
                <h3 id="learning-title">What I Want to Learn</h3>
                <p>{portfolio.learning}</p>
                <div className="tool-group">
                  <p className="tool-label">Tools from the internship stack</p>
                  <TechnologyList technologies={portfolio.stack.next} />
                </div>
              </section>
            </div>
          </section>

          <section className="project-walkthrough" aria-labelledby="walkthrough-title">
            <div>
              <h2 id="walkthrough-title">Walk Through a Project</h2>
              <p>{portfolio.walkthrough}</p>
            </div>
            <a className="button walkthrough-link" href="#contact">Get in touch</a>
          </section>
        </div>
      </main>

      <footer className="site-footer" id="contact" aria-labelledby="contact-title">
        <div className="shell footer-inner">
          <h2 id="contact-title">Contact</h2>
          <ul className="contact-links" role="list">
            {portfolio.contacts.map((contact) => (
              <li key={contact.label}><a className="text-link" href={contact.href}>{contact.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="shell footer-build">
          <p>{portfolio.build.description}</p>
          <nav className="footer-build-links" aria-label="Portfolio development">
            {portfolio.build.links.map((link) => (
              <a key={link.label} className="text-link" href={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}
