"use client";

import {
  Arc,
  AWS,
  Biomejs,
  ClaudeAI,
  Cloudflare,
  CloudflareWorkers,
  Cursor,
  DrizzleORM,
  Github,
  Homebrew,
  Hono,
  JWT,
  Motion,
  Nextjs,
  Nuxt,
  Pnpm,
  PostCSS,
  RadixUI,
  ReactJS,
  ShadcnUI,
  Storybook,
  Supabase,
  SVG,
  Swagger,
  Tailwind,
  Threejs,
  Vercel,
  Vitest,
  Vue,
  Vuetify,
  VueUse,
  Yarn,
  Zed,
  Zod,
} from "@components/icons";
import { cn } from "@lib/utils";

const TECHS = [
  {
    icon: Arc,
    name: "Arc",
  },
  {
    icon: AWS,
    name: "AWS",
  },
  {
    icon: Biomejs,
    name: "Biomejs",
  },
  {
    icon: ClaudeAI,
    name: "ClaudeAI",
  },
  {
    icon: Cloudflare,
    name: "Cloudflare",
  },
  {
    icon: CloudflareWorkers,
    name: "CFWorkers",
  },
  {
    icon: Cursor,
    name: "Cursor",
  },
  {
    icon: DrizzleORM,
    name: "DrizzleORM",
  },
  {
    icon: Github,
    name: "Github",
  },
  {
    icon: Homebrew,
    name: "Homebrew",
  },
  {
    icon: Hono,
    name: "Hono",
  },
  {
    icon: JWT,
    name: "JWT",
  },
  {
    icon: Motion,
    name: "Motion",
  },
  {
    icon: Nextjs,
    name: "Nextjs",
  },
  {
    icon: Nuxt,
    name: "Nuxt",
  },
  {
    icon: Pnpm,
    name: "Pnpm",
  },
  {
    icon: PostCSS,
    name: "PostCSS",
  },
  {
    icon: RadixUI,
    name: "RadixUI",
  },
  {
    icon: ReactJS,
    name: "ReactJS",
  },
  {
    icon: ShadcnUI,
    name: "ShadcnUI",
  },
  {
    icon: Storybook,
    name: "Storybook",
  },
  {
    icon: Supabase,
    name: "Supabase",
  },
  {
    icon: SVG,
    name: "SVG",
  },
  {
    icon: Swagger,
    name: "Swagger",
  },
  {
    icon: Tailwind,
    name: "Tailwind",
  },
  {
    icon: Threejs,
    name: "Threejs",
  },
  {
    icon: Vercel,
    name: "Vercel",
  },
  {
    icon: Vitest,
    name: "Vitest",
  },
  {
    icon: Vue,
    name: "Vue",
  },
  {
    icon: Vuetify,
    name: "Vuetify",
  },
  {
    icon: VueUse,
    name: "VueUse",
  },
  {
    icon: Yarn,
    name: "Yarn",
  },
  {
    icon: Zed,
    name: "Zed",
  },
  {
    icon: Zod,
    name: "Zod",
  },
];

const MARQUEE_DURATION = "110s"; // 110 seconds - 1.83 minutes - update this if you add more techs

export const BrandScroller = ({ className, pauseOnHover = true }) => {
  return (
    <div
      className={cn(
        "group relative h-12 overflow-hidden border-y border-dashed bg-p3-background/10 backdrop-blur-sm dark:bg-p3-background-light/5",
        className,
      )}
    >
      <div
        className={cn(
          "flex max-w-screen-sm flex-row py-2 [--gap:2rem] [gap:var(--gap)]",
          "[mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]",
        )}
      >
        <div
          className={cn(
            "flex shrink-0 animate-marquee flex-row space-x-4",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{ "--duration": MARQUEE_DURATION }}
        >
          {TECHS.map(({ name, icon }) => {
            const Icon = icon;
            return (
              <div
                className={cn(
                  "flex w-32 flex-shrink-0 items-center justify-center space-x-2 object-contain",
                )}
                key={name}
              >
                <Icon className="h-8 w-8" />
                <p className="truncate font-bold text-base">{name}</p>
              </div>
            );
          })}
        </div>
        <div
          className={cn(
            "flex shrink-0 animate-marquee flex-row space-x-4",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{ "--duration": MARQUEE_DURATION }}
        >
          {TECHS.map(({ name, icon }) => {
            const Icon = icon;
            return (
              <div
                className={cn(
                  "flex w-32 flex-shrink-0 items-center justify-center space-x-2 object-contain",
                )}
                key={`${name}-duplicate`}
              >
                <Icon className="h-8 w-8" />
                <p className="truncate font-bold text-base">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
