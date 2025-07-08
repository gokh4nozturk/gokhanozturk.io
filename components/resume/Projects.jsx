import AnimatedLink from '@components/AnimatedLink';
import { projects } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';

function ProjectItem({ project, isFirst }) {
  const titleClass = isFirst ? styles.projectTitle : styles.projectTitleWithMargin;

  return (
    <div>
      <h3 className={titleClass}>
        {project.title} | {project.role}
      </h3>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.inlineLink}
        aria-label={`Visit ${project.title} project`}
      >
        <i>{project.displayUrl}</i>
      </a>
      <ul className={styles.list}>
        {project.achievements.map((achievement, index) => (
          <li key={`${project.title}-achievement-${index}`}>
            {achievement ===
            'Rocket UI is actively used across all Rockads projects to ensure consistent UI and improve development efficiency' ? (
              <strong>
                Rocket UI is actively used across all{' '}
                <AnimatedLink href={project.rockadsLink} color="rockads" name="Rockads">
                  Rockads
                </AnimatedLink>{' '}
                projects to ensure consistent UI and improve development efficiency
              </strong>
            ) : (
              achievement
            )}
          </li>
        ))}
        <li>
          <strong>Tech stack:</strong> {project.techStack}
        </li>
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <section>
      <h2 className={styles.sectionTitleWithMargin}>Open Source & Projects</h2>
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} isFirst={project === projects[0]} />
      ))}
    </section>
  );
}
