import { education } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section>
      <h2 className={`${styles.sectionTitleWithMargin} flex items-center gap-2`}>
        <GraduationCap size={20} />
        Education
      </h2>

      {education.map((item) => (
        <div key={`${item.institution}-${item.degree}`} className="mb-6 last:mb-0">
          <strong className={styles.primaryText}>{item.degree}</strong> | {item.institution} |{' '}
          <span className={styles.secondaryText}>{item.period}</span>
        </div>
      ))}
    </section>
  );
}
