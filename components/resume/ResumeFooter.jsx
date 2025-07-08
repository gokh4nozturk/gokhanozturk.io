import { lastUpdated } from '@lib/resume-data';
import { dividerVariants, textVariants } from '@lib/resume-styles';

export function ResumeFooter() {
  return (
    <footer>
      <hr className={dividerVariants()} />
      <p className={textVariants({ color: 'secondary', size: 'sm' })}>
        Last Updated: {lastUpdated}
      </p>
    </footer>
  );
}
