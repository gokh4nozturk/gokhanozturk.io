import { summary } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';
import { User } from 'lucide-react';

export function Summary() {
  return (
    <section>
      <h2 className={`${styles.sectionTitle} flex items-center gap-2`}>
        <User size={20} />
        Summary
      </h2>
      <p className={styles.bodyText}>{summary.text}</p>
    </section>
  );
}
