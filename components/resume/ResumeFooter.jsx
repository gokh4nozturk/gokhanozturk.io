import { lastUpdated } from '@lib/resume-data';
import { styles } from '@lib/resume-styles';

export function ResumeFooter() {
  return (
    <footer>
      <hr className={styles.divider} />
      <p className={styles.smallText}>Last Updated: {lastUpdated}</p>
    </footer>
  );
}
