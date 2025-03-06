'use client'

import { MDXProvider } from '@mdx-js/react'
import ResumeContent from './content.mdx'
import components from '../components/mdx-components'

export default function ResumePage() {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <ResumeContent />
      </div>
    </MDXProvider>
  )
} 