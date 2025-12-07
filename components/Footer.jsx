import AnimatedLink from "./AnimatedLink";

export default function Footer() {
  const links = [
    {
      name: "@gokh4nozturk",
      url: "https://x.com/intent/follow?screen_name=gokh4nozturk?ref=gokhanozturk.io",
    },
    { name: "linkedin", url: "https://www.linkedin.com/in/gokhannozturk?ref=gokhanozturk.io" },
    { name: "github", url: "https://github.com/gokh4nozturk?ref=gokhanozturk.io" },
  ];

  return (
    <footer className="z-30 h-20 pb-28 text-center sm:pb-32">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <AnimatedLink
            className="transition-colors duration-200"
            color="p3-primary"
            href={link.url}
            key={link.name}
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
