import { personalInfo } from "@lib/resume-data";

export function Header() {
  return (
    <header>
      <h1 className="mt-2 mb-3 font-bold text-3xl text-gray-900 tracking-tight dark:text-white">
        {personalInfo.name}
      </h1>

      <div className="mb-8 text-gray-600 dark:text-gray-400">
        {personalInfo.title}
        <br />
        {personalInfo.location} ·{" "}
        <a
          aria-label="GitHub profile"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          href={personalInfo.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          {personalInfo.githubDisplay}
        </a>{" "}
        ·{" "}
        <a
          aria-label="LinkedIn profile"
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          href={personalInfo.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          {personalInfo.linkedinDisplay}
        </a>
      </div>
    </header>
  );
}
