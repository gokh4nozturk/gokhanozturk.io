import { cn } from '../../lib/utils';

export const resumeVariants = {
  container: 'relative mx-auto max-w-2xl',
  article: 'prose prose-slate dark:prose-invert max-w-none',

  heading: {
    h1: 'mt-2 mb-3 font-bold text-3xl text-gray-900 tracking-tight dark:text-white',
    h2: 'mt-8 mb-4 border-gray-200 border-b pb-1 font-semibold text-gray-900 text-xl dark:border-gray-800 dark:text-white',
    h3: 'mb-0 font-medium text-gray-900 text-lg dark:text-white',
    h3WithBorder:
      'mt-6 mb-0 border-gray-200 border-b font-medium text-gray-900 text-lg dark:text-white',
    h4: 'my-1 font-medium text-base text-gray-900 dark:text-white',
    h4WithMargin: 'my-1 mb-1 font-medium text-base text-gray-900 dark:text-white',
  },

  text: {
    meta: 'mb-8 text-gray-600 dark:text-gray-400',
    paragraph: 'text-gray-600 dark:text-gray-300',
    date: 'mb-2 text-gray-600 text-sm dark:text-gray-400',
    link: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    repoLink:
      'mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    lastUpdated: 'text-gray-600 text-sm dark:text-gray-400',
  },

  lists: {
    unordered: 'list-disc pl-4 text-gray-600 dark:text-gray-300',
  },

  dividers: {
    hr: 'my-8 border-gray-200 dark:border-gray-800',
  },

  education: {
    label: 'text-gray-900 dark:text-gray-200',
  },
};

export function getHeadingVariant(level, withBorder = false) {
  if (level === 1) return resumeVariants.heading.h1;
  if (level === 2) return resumeVariants.heading.h2;
  if (level === 3)
    return withBorder ? resumeVariants.heading.h3WithBorder : resumeVariants.heading.h3;
  if (level === 4) return resumeVariants.heading.h4;
  return '';
}

export function getLinkVariant(isRepo = false) {
  return isRepo ? resumeVariants.text.repoLink : resumeVariants.text.link;
}
