import AnimatedLink from "@components/AnimatedLink";
import { BrandScroller } from "@components/hextaui/brand-scroller";
import TitleDescription from "@components/TitleDescription";
import { ScrollArea } from "@components/ui/scroll-area";
import { Github } from "@lib/github";
import { cn } from "@lib/utils";
import { GitFork, Star } from "lucide-react";

const REPOS = [
  "gokh4nozturk/chop-url",
  "gokh4nozturk/gauge",
  "gokh4nozturk/fancy-hn",
  "magicuidesign/magicui",
  "pqoqubbw/icons",
  "Teknasyon/rocket-ui",
  "gokh4nozturk/gokhanozturk.io",
  "RustDili/Rust-Ogrenmek",
  "gokh4nozturk/linguolink",
];

const LANG_COLORS = {
  TypeScript: "text-blue-500",
  JavaScript: "text-yellow-500",
  HTML: "text-red-500",
  CSS: "text-blue-500",
  SCSS: "text-pink-500",
  Shell: "text-gray-500",
  Dockerfile: "text-blue-500",
  Rust: "text-orange-500",
  "C#": "text-blue-500",
  Go: "text-blue-500",
  Makefile: "text-blue-500",
  MDX: "text-amber-500",
  PowerShell: "text-blue-500",
  Vue: "text-emerald-500",
};

export const revalidate = 3600; // 60 * 60 seconds

export default async function Works() {
  const github = new Github();
  const works = await Promise.all(
    REPOS.map(async (repo) => {
      const repoData = await github.getRepo(repo);
      return repoData;
    }),
  );

  return (
    <div className="relative w-full">
      <TitleDescription
        title="Works"
        description="A collection of works that I have contributed to."
      />
      <BrandScroller className="absolute inset-0 top-[72px] z-30 md:top-20" />
      <ScrollArea>
        <div className="grid divide-y py-10">
          {works.map((work) => (
            <Work key={work.id} data={work} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function Work({ data: work }) {
  return (
    <div key={work.id} className="grid gap-1 py-3">
      <AnimatedLink
        href={work.html_url}
        name={work.name}
        className="font-medium text-sm sm:text-base"
      >
        {work.full_name}
      </AnimatedLink>
      <p className="my-1 truncate text-neutral-400 text-xs">
        {work.description}
      </p>
      <div className="flex gap-3 font-medium text-neutral-400 text-xs">
        <span className={cn(LANG_COLORS[work.language])}>
          {work.language || "Unknown"}
        </span>
        <span className="flex items-center gap-1">
          <Star size={12} />
          {work.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={12} />
          {work.forks_count}
        </span>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  const siteUrl = "/works";

  return {
    title: "Works",
    description: "A collection of works that I have contributed to.",
    openGraph: {
      title: "Works",
      description: "A collection of works that I have contributed to.",
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
