import { technicalSkills } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';
import { Settings } from 'lucide-react';

export function TechnicalSkills() {
  return (
    <section>
      <h2 className={`${styles.sectionTitleWithMargin} flex items-center gap-2`}>
        <Settings size={20} />
        Technical Skills
      </h2>

      <ul className={styles.list}>
        {technicalSkills.map((skill) => (
          <li key={skill.category}>
            <strong className={styles.primaryText}>{skill.category}:</strong> {skill.skills}
          </li>
        ))}
      </ul>
    </section>
  );
}
