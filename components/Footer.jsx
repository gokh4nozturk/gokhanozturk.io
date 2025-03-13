import AnimatedLink from './AnimatedLink';

export default function Footer() {
  const links = [
    { name: '@gokh4nozturk', url: 'https://x.com/intent/follow?screen_name=gokh4nozturk' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/gokhannozturk' },
    { name: 'github', url: 'https://github.com/gokh4nozturk' },
  ];

  return (
    <footer className="h-20 text-center sm:pb-32 pb-28 z-30">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <AnimatedLink
            color="blue"
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 "
          >
            {link.name}
          </AnimatedLink>
        ))}
      </div>
    </footer>
  );
}
