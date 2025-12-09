import AnimatedLink from "./AnimatedLink";

export default function Footer() {
  const links = [
    {
      name: "github",
      url: "https://github.com/gokh4nozturk?ref=gokhanozturk.io",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/gokhannozturk?ref=gokhanozturk.io",
    },
    {
      name: "@gokh4nozturk",
      url: "https://x.com/intent/follow?screen_name=gokh4nozturk?ref=gokhanozturk.io",
    },
  ];

  return (
    <footer className="z-30 h-20 pb-28 text-center sm:pb-32">
      <div className="flex flex-col items-end justify-start tracking-tight">
        {links.map((link) => (
          <AnimatedLink
            className="text-sm transition-colors duration-200"
            href={link.url}
            key={link.name}
            name={link.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.name}
          </AnimatedLink>
        ))}
      </div>
    </footer>
  );
}
