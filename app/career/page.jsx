'use client'

import { MDXProvider } from '@mdx-js/react'
import CareerContent from './content.mdx'
import components from '../components/mdx-components'

export default function CareerPage() {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <CareerContent />
      </div>
    </MDXProvider>
  )
} 