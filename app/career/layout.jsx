export const metadata = {
  title: 'Career | Your Name',
  description: 'Professional journey and career highlights',
}

export default function CareerLayout({ children }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-2xl mx-auto py-8">
      {children}
    </article>
  )
} 