import { personalInfo } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';

export function Header() {
  return (
    <header>
      <h1 className={styles.title}>{personalInfo.name}</h1>

      <div className={styles.contactInfo}>
        {personalInfo.title}
        <br />
        {personalInfo.location} ·{' '}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="GitHub profile"
        >
          {personalInfo.githubDisplay}
        </a>{' '}
        ·{' '}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="LinkedIn profile"
        >
          {personalInfo.linkedinDisplay}
        </a>
      </div>
    </header>
  );
}
