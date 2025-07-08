import { summary } from '@lib/resume-data';
import { sectionTitleVariants, textVariants } from '@lib/resume-styles';
import { cn } from '@lib/utils';
import { User } from 'lucide-react';

export function Summary() {
  return (
    <section>
      <h2 className={cn(sectionTitleVariants(), 'flex items-center gap-2')}>
        <User size={20} />
        Summary
      </h2>
      <p className={textVariants()}>{summary.text}</p>
    </section>
  );
}
