import { personalInfo } from '@lib/resume-data';
import { linkVariants, textVariants, titleVariants } from '@lib/resume-styles';
import { cn } from '@lib/utils';

export function Header() {
  return (
    <header>
      <h1 className={titleVariants()}>{personalInfo.name}</h1>

      <div className={textVariants({ color: 'secondary', spacing: 'lg' })}>
        {personalInfo.title}
        <br />
        {personalInfo.location} ·{' '}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkVariants()}
          aria-label="GitHub profile"
        >
          {personalInfo.githubDisplay}
        </a>{' '}
        ·{' '}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={linkVariants()}
          aria-label="LinkedIn profile"
        >
          {personalInfo.linkedinDisplay}
        </a>
      </div>
    </header>
  );
}
