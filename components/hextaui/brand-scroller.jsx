'use client';

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
} from '@components/icons';
import { cn } from '@lib/utils';

const TECHS = [
  {
    name: 'Arc',
    icon: Arc,
  },
  {
    name: 'AWS',
    icon: AWS,
  },
  {
    name: 'Biomejs',
    icon: Biomejs,
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
    name: 'Cursor',
    icon: Cursor,
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
    name: 'Nuxt',
    icon: Nuxt,
  },
  {
    name: 'Pnpm',
    icon: Pnpm,
  },
  {
    name: 'PostCSS',
    icon: PostCSS,
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
    name: 'Storybook',
    icon: Storybook,
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
    name: 'Yarn',
    icon: Yarn,
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

const MARQUEE_DURATION = '110s'; // 110 seconds - 1.83 minutes - update this if you add more techs

export const BrandScroller = ({ className, pauseOnHover = true }) => {
  return (
    <div
      className={cn(
        'group relative h-12 overflow-hidden border-y border-dashed bg-p3-background/10 backdrop-blur-sm dark:bg-p3-background-light/5',
        className
      )}
    >
      <div
        className={cn(
          'flex max-w-screen-sm flex-row py-2 [--gap:2rem] [gap:var(--gap)]',
          '[mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]'
        )}
      >
        <div
          className={cn(
            'flex shrink-0 animate-marquee flex-row space-x-4',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{ '--duration': MARQUEE_DURATION }}
        >
          {TECHS.map(({ name, icon }) => {
            const Icon = icon;
            return (
              <div
                className={cn(
                  'flex w-32 flex-shrink-0 items-center justify-center space-x-2 object-contain'
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
            'flex shrink-0 animate-marquee flex-row space-x-4',
            pauseOnHover && 'group-hover:[animation-play-state:paused]'
          )}
          style={{ '--duration': MARQUEE_DURATION }}
        >
          {TECHS.map(({ name, icon }) => {
            const Icon = icon;
            return (
              <div
                className={cn(
                  'flex w-32 flex-shrink-0 items-center justify-center space-x-2 object-contain'
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
