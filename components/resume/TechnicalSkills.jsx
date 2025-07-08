import { technicalSkills } from '@lib/resume-data';
import { listVariants, sectionTitleVariants, textVariants } from '@lib/resume-styles';
import { cn } from '@lib/utils';
import { Settings } from 'lucide-react';

export function TechnicalSkills() {
  return (
    <section>
      <h2 className={cn(sectionTitleVariants({ spacing: 'top' }), 'flex items-center gap-2')}>
        <Settings size={20} />
        Technical Skills
      </h2>

      <ul className={listVariants()}>
        {technicalSkills.map((skill) => (
          <li key={skill.category}>
            <strong className={textVariants({ color: 'primary' })}>{skill.category}:</strong>{' '}
            {skill.skills}
          </li>
        ))}
      </ul>
    </section>
  );
}
