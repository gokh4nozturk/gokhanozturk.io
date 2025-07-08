import AnimatedLink from '@components/AnimatedLink';
import { experience } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';
import { Briefcase } from 'lucide-react';

function ExperienceItem({ item, isFirst }) {
  const titleClass = isFirst ? styles.jobTitle : styles.jobTitleWithMargin;

  return (
    <div>
      <h3 className={titleClass}>
        {item.title} | {item.company}
      </h3>
      <p className={styles.jobPeriod}>
        {item.period} | {item.location}
      </p>
      <ul className={styles.list}>
        {item.achievements.map((achievement, index) => (
          <li key={`${item.company}-achievement-${index}`}>
            {achievement ===
            'Developed and maintained Rocket UI, a modern UI component library.' ? (
              <>
                Developed and maintained{' '}
                <AnimatedLink href={item.rocketUiLink} className="no-underline">
                  Rocket UI
                </AnimatedLink>
                , a modern UI component library.
              </>
            ) : (
              achievement
            )}
          </li>
        ))}
        <li>
          <strong>Tech stack:</strong> {item.techStack}
        </li>
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section>
      <h2 className={`${styles.sectionTitleWithMargin} flex items-center gap-2`}>
        <Briefcase size={20} />
        Professional Experience
      </h2>
      {experience.map((item, index) => (
        <ExperienceItem key={`${item.company}-${item.period}`} item={item} isFirst={index === 0} />
      ))}
    </section>
  );
}
