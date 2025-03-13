'use client';

import {
  AWS,
  ClaudeAI,
  Cloudflare,
  CloudflareWorkers,
  DrizzleORM,
  Github,
  Homebrew,
  Hono,
  JWT,
  Motion,
  Nextjs,
  Nodejs,
  Nuxt,
  Pnpm,
  RadixUI,
  ReactJS,
  ShadcnUI,
  Supabase,
  SVG,
  Swagger,
  Tailwind,
  Threejs,
  Vercel,
  Vite,
  Vitest,
  Vue,
  Vuetify,
  VueUse,
  Zed,
  Zod,
} from '@components/icons';

const TECHS = [
  {
    name: 'AWS',
    icon: AWS,
  },
  {
    name: 'ClaudeAI',
    icon: ClaudeAI,
  },
  {
    name: 'Cloudflare',
    icon: Cloudflare,
  },
  {
    name: 'CloudflareWorkers',
    icon: CloudflareWorkers,
  },
  {
    name: 'DrizzleORM',
    icon: DrizzleORM,
  },
  {
    name: 'Github',
    icon: Github,
  },
  {
    name: 'Homebrew',
    icon: Homebrew,
  },
  {
    name: 'Hono',
    icon: Hono,
  },
  {
    name: 'JWT',
    icon: JWT,
  },
  {
    name: 'Motion',
    icon: Motion,
  },
  {
    name: 'Nextjs',
    icon: Nextjs,
  },
  {
    name: 'Nodejs',
    icon: Nodejs,
  },
  {
    name: 'Nuxt',
    icon: Nuxt,
  },
  {
    name: 'Pnpm',
    icon: Pnpm,
  },
  {
    name: 'RadixUI',
    icon: RadixUI,
  },
  {
    name: 'ReactJS',
    icon: ReactJS,
  },
  {
    name: 'ShadcnUI',
    icon: ShadcnUI,
  },
  {
    name: 'Supabase',
    icon: Supabase,
  },
  {
    name: 'SVG',
    icon: SVG,
  },
  {
    name: 'Swagger',
    icon: Swagger,
  },
  {
    name: 'Tailwind',
    icon: Tailwind,
  },
  {
    name: 'Threejs',
    icon: Threejs,
  },
  {
    name: 'Vercel',
    icon: Vercel,
  },
  {
    name: 'Vite',
    icon: Vite,
  },
  {
    name: 'Vitest',
    icon: Vitest,
  },
  {
    name: 'Vue',
    icon: Vue,
  },
  {
    name: 'Vuetify',
    icon: Vuetify,
  },
  {
    name: 'VueUse',
    icon: VueUse,
  },
  {
    name: 'Zed',
    icon: Zed,
  },
  {
    name: 'Zod',
    icon: Zod,
  },
];

export const BrandScroller = () => {
  return (
    <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {TECHS.map(({ name, icon }) => {
        const Icon = icon;

        return (
          <div
            className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
            key={name}
          >
            <div className="flex items-center w-28 gap-3">
              <Icon size={24} />
              <p className="text-lg font-bold">{name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
