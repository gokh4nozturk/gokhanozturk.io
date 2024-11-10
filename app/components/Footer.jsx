export default function Footer() {
  const links = [
    { name: '@gokh4nozturk', url: 'https://x.com/gokh4nozturk' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/gokhannozturk' },
    { name: 'github', url: 'https://github.com/gokh4nozturk' },
  ]

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-500"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
