import { cn } from '@lib/utils'

const components = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        'mt-2 mb-3 text-3xl font-bold tracking-tight text-white',
        'print:text-black print:text-3xl print:mt-0',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        'mt-8 border-b border-gray-800 pb-1 text-xl font-semibold tracking-tight text-gray-100 first:mt-0',
        'print:text-black print:border-gray-300 print:mt-6',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={cn(
        'mt-6 text-lg font-medium tracking-tight text-gray-200',
        'print:text-black print:mt-4',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn(
        'leading-7 text-gray-300 [&:not(:first-child)]:mt-3',
        'print:text-black print:mt-2',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul 
      className={cn(
        'my-3 ml-4 list-disc space-y-1 text-gray-300',
        'print:text-black print:my-2',
        className
      )} 
      {...props} 
    />
  ),
  li: ({ className, ...props }) => (
    <li 
      className={cn(
        'leading-7',
        'print:text-black',
        className
      )} 
      {...props} 
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        'font-medium text-blue-400 underline underline-offset-2 transition-colors hover:text-blue-300',
        'print:text-black print:no-underline',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong
      className={cn(
        'font-semibold text-gray-100',
        'print:text-black',
        className
      )}
      {...props}
    />
  ),
  em: ({ className, ...props }) => (
    <em
      className={cn(
        'italic text-gray-200',
        'print:text-black',
        className
      )}
      {...props}
    />
  ),
}

export default components 