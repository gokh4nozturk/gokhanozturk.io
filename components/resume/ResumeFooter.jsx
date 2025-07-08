import { lastUpdated } from '@lib/resume-data';

export function ResumeFooter() {
  return (
    <footer>
      <hr className="my-8 border-gray-500 dark:border-gray-800" />
      <p className="text-gray-600 text-sm dark:text-gray-400">Last Updated: {lastUpdated}</p>
    </footer>
  );
}
