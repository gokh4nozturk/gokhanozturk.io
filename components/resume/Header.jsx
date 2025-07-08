import { personalInfo } from '@lib/resume-data';

export function Header() {
  return (
    <header>
      <h1 className="mt-2 mb-3 font-bold text-3xl text-gray-900 tracking-tight dark:text-white">
        {personalInfo.name}
      </h1>

      <div className="mb-8 text-gray-600 dark:text-gray-400">
        {personalInfo.title}
        <br />
        {personalInfo.location} ·{' '}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          aria-label="GitHub profile"
        >
          {personalInfo.githubDisplay}
        </a>{' '}
        ·{' '}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          aria-label="LinkedIn profile"
        >
          {personalInfo.linkedinDisplay}
        </a>
      </div>
    </header>
  );
}
