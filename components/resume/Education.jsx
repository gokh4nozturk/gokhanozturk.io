import { education } from '@lib/resume-data';
import { sectionTitleVariants, textVariants } from '@lib/resume-styles';
import { cn } from '@lib/utils';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section>
      <h2 className={cn(sectionTitleVariants({ spacing: 'top' }), 'flex items-center gap-2')}>
        <GraduationCap size={20} />
        Education
      </h2>

      {education.map((item) => (
        <div key={`${item.institution}-${item.degree}`} className="mb-6 last:mb-0">
          <strong className={textVariants({ color: 'primary' })}>{item.degree}</strong> |{' '}
          {item.institution} |{' '}
          <span className={textVariants({ color: 'secondary' })}>{item.period}</span>
        </div>
      ))}
    </section>
  );
}
