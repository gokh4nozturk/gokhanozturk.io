export const metadata = {
  title: 'Resume | Gökhan Öztürk',
  description: 'Professional journey and resume highlights',
}

export default function ResumeLayout({ children }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-2xl mx-auto py-8">
      {children}
    </article>
  )
} 