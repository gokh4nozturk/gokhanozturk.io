import AnimatedLink from '@components/AnimatedLink';
import { experience } from '@lib/resume-data';
import {
  jobTitleVariants,
  listVariants,
  sectionTitleVariants,
  textVariants,
} from '@lib/resume-styles';
import { cn } from '@lib/utils';
import { Briefcase } from 'lucide-react';

function ExperienceItem({ item, isFirst }) {
  return (
    <div>
      <h3
        className={jobTitleVariants({
          spacing: isFirst ? 'none' : 'top',
        })}
      >
        {item.title} | {item.company}
      </h3>
      <p
        className={textVariants({
          color: 'secondary',
          size: 'sm',
          spacing: 'sm',
        })}
      >
        {item.period} | {item.location}
      </p>
      <ul className={listVariants()}>
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
      <h2 className={cn(sectionTitleVariants({ spacing: 'top' }), 'flex items-center gap-2')}>
        <Briefcase size={20} />
        Professional Experience
      </h2>
      {experience.map((item, index) => (
        <ExperienceItem key={`${item.company}-${item.period}`} item={item} isFirst={index === 0} />
      ))}
    </section>
  );
}
