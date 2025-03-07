export const metadata = {
  title: 'Resume | %s',
  description: 'Professional journey and resume highlights',
  openGraph: {
    title: 'Resume | %s',
    description: 'Professional journey and resume highlights',
    url: '/resume',
  },
  alternates: {
    canonical: '/resume',
  },
}

export default function ResumeLayout({ children }) {
  return (
    <article className="prose prose-neutral mx-auto max-w-2xl pb-20 dark:prose-invert">
      {children}
    </article>
  )
}
