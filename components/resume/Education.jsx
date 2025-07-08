import { education } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';

export function Education() {
  return (
    <section>
      <h2 className={styles.sectionTitleWithMargin}>Education</h2>

      {education.map((item) => (
        <div key={`${item.institution}-${item.degree}`} className="mb-6 last:mb-0">
          <strong className={styles.primaryText}>{item.degree}</strong> | {item.institution} |{' '}
          <span className={styles.secondaryText}>{item.period}</span>
        </div>
      ))}
    </section>
  );
}
