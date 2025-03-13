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
import { cn } from '@lib/utils';

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
    name: 'CFWorkers',
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

const MARQUEE_DURATION = '120s';

export const BrandScroller = ({ className, pauseOnHover = true }) => {
  return (
    <div
      className={cn(
        'group backdrop-blur-sm border-y border-dashed h-12 relative bg-black/10 dark:bg-white/5',
        className
      )}
    >
      <div
        className={cn(
          ` flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap)] flex-row max-w-screen-sm [--duration:${MARQUEE_DURATION}]`,
          '[mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]'
        )}
      >
        <div
          className={cn(
            'flex shrink-0 animate-marquee flex-row space-x-3',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
        >
          {TECHS.map(({ name, icon }) => {
            const Icon = icon;
            return (
              <div className={cn('flex items-center justify-center w-32 space-x-2')} key={name}>
                <Icon className="w-8 h-8" />
                <p className="text-base font-bold truncate">{name}</p>
              </div>
            );
          })}
        </div>
        <div
          className={cn(
            'flex shrink-0 animate-marquee flex-row space-x-3',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
        >
          {TECHS.map(({ name, icon }) => {
            const Icon = icon;
            return (
              <div
                className={cn(
                  'flex items-center justify-center w-32 space-x-2',
                  pauseOnHover && 'group-hover:[animation-play-state:paused]'
                )}
                key={`${name}-duplicate`}
              >
                <Icon className="w-8 h-8" />
                <p className="text-base font-bold truncate">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
