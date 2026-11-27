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
        <div className="case-cover" data-theme={cover.theme}>
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

        <div className="profile-grid">
          <section className="profile-section" id="about" aria-labelledby="about-title">
            <h2 id="about-title">About</h2>
            <p>{portfolio.education}</p>
            <p>{portfolio.interests}</p>
          </section>
          <section className="learning-section" id="learning" aria-labelledby="learning-title">
            <h2 id="learning-title">What I Want to Learn</h2>
            <p>{portfolio.learning}</p>
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
