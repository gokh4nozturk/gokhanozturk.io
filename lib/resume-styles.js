import { cva } from 'class-variance-authority';
import { cn } from './utils';

// Container Variants
export const containerVariants = cva('relative mx-auto', {
  variants: {
    size: {
      default: 'max-w-2xl',
      wide: 'max-w-4xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

// Article Variants
export const articleVariants = cva('prose max-w-none', {
  variants: {
    theme: {
      light: 'prose-slate',
      dark: 'prose-slate dark:prose-invert',
    },
  },
  defaultVariants: {
    theme: 'dark',
  },
});

// Typography Variants
export const titleVariants = cva('font-bold tracking-tight', {
  variants: {
    size: {
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    spacing: {
      none: '',
      sm: 'mt-2 mb-3',
      md: 'mt-4 mb-4',
      lg: 'mt-6 mb-6',
      xl: 'mt-8 mb-8',
    },
    color: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
      body: 'text-gray-600 dark:text-gray-300',
    },
  },
  defaultVariants: {
    size: '3xl',
    spacing: 'sm',
    color: 'primary',
  },
});

export const sectionTitleVariants = cva('font-semibold border-b pb-1', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
    },
    spacing: {
      none: 'mb-4',
      top: 'mt-8 mb-4',
    },
    border: {
      default: 'border-gray-500 dark:border-gray-800',
      none: 'border-transparent',
    },
    color: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
    },
  },
  defaultVariants: {
    size: 'xl',
    spacing: 'none',
    border: 'default',
    color: 'primary',
  },
});

export const jobTitleVariants = cva('font-medium', {
  variants: {
    size: {
      base: 'text-base',
      lg: 'text-lg',
    },
    spacing: {
      none: 'mb-0',
      top: 'mt-6 mb-0',
      small: 'my-1',
      smallTop: 'my-1 mb-1',
    },
    color: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
    },
  },
  defaultVariants: {
    size: 'lg',
    spacing: 'none',
    color: 'primary',
  },
});

export const textVariants = cva('', {
  variants: {
    color: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
      body: 'text-gray-600 dark:text-gray-300',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    spacing: {
      none: '',
      sm: 'mb-2',
      md: 'mb-4',
      lg: 'mb-8',
    },
  },
  defaultVariants: {
    color: 'body',
    size: 'base',
    spacing: 'none',
  },
});

export const linkVariants = cva('transition-colors', {
  variants: {
    variant: {
      default: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
      inline:
        'mb-1 inline-block text-blue-600 text-sm hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    },
    underline: {
      none: 'no-underline',
      hover: 'hover:underline',
      always: 'underline',
    },
  },
  defaultVariants: {
    variant: 'default',
    underline: 'hover',
  },
});

export const listVariants = cva('', {
  variants: {
    style: {
      disc: 'list-disc',
      decimal: 'list-decimal',
      none: 'list-none',
    },
    spacing: {
      none: 'pl-0',
      sm: 'pl-2',
      default: 'pl-4',
      lg: 'pl-6',
    },
    color: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-600 dark:text-gray-400',
      body: 'text-gray-600 dark:text-gray-300',
    },
  },
  defaultVariants: {
    style: 'disc',
    spacing: 'default',
    color: 'body',
  },
});

export const dividerVariants = cva('border-t', {
  variants: {
    spacing: {
      sm: 'my-4',
      default: 'my-8',
      lg: 'my-12',
    },
    color: {
      default: 'border-gray-500 dark:border-gray-800',
      light: 'border-gray-300 dark:border-gray-600',
      transparent: 'border-transparent',
    },
  },
  defaultVariants: {
    spacing: 'default',
    color: 'default',
  },
});

// Helper function to create component with variants
export function createResumeComponent(variants) {
  return function ResumeComponent({ className, variant, ...props }) {
    return cn(variants(variant), className);
  };
}
