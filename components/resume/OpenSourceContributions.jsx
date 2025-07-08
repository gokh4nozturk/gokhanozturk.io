import { openSourceContributions } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';

function ContributionItem({ contribution, isFirst, isLast }) {
  const titleClass = isLast ? styles.contributionTitleWithMargin : styles.contributionTitle;

  return (
    <div>
      <h4 className={titleClass}>
        {contribution.title} | {contribution.role}
      </h4>
      <a
        href={contribution.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.inlineLink}
        aria-label={`Visit ${contribution.title} project`}
      >
        <i>{contribution.displayUrl}</i>
      </a>
      <ul className={styles.list}>
        {contribution.achievements.map((achievement, index) => (
          <li key={`${contribution.title}-achievement-${index}`}>{achievement}</li>
        ))}
        <li>
          <strong>Tech stack:</strong> {contribution.techStack}
        </li>
      </ul>
    </div>
  );
}

export function OpenSourceContributions() {
  return (
    <section>
      <h3 className="mt-6 mb-0 border-gray-200 border-b font-medium text-gray-900 text-lg dark:text-white">
        Open Source Contributions
      </h3>
      {openSourceContributions.map((contribution, index) => (
        <ContributionItem
          key={contribution.title}
          contribution={contribution}
          isFirst={index === 0}
          isLast={index === openSourceContributions.length - 1}
        />
      ))}
    </section>
  );
}
