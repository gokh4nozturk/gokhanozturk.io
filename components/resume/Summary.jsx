import { summary } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';

export function Summary() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Summary</h2>
      <p className={styles.bodyText}>{summary.text}</p>
    </section>
  );
}
