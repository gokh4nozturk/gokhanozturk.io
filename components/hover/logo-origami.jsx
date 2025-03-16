import { AWS, Calcom, Github, Google, Meta, Twitch } from '@components/icons';
import { cn } from '@lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

export const DivOrigamiExample = () => {
  return (
    <section className="flex h-72 flex-col items-center justify-center gap-12 bg-p3-background px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-p3-primary text-p3-text">
            <AWS />
          </LogoItem>,
          <LogoItem key={2} className="bg-p3-secondary text-p3-text">
            <Calcom />
          </LogoItem>,
          <LogoItem key={3} className="bg-p3-accent text-p3-text">
            <Meta />
          </LogoItem>,
          <LogoItem key={4} className="bg-p3-background-light text-p3-text">
            <Github />
          </LogoItem>,
          <LogoItem key={5} className="bg-p3-primary-light text-p3-text">
            <Twitch />
          </LogoItem>,
          <LogoItem key={6} className="bg-p3-background-light text-p3-text">
            <Google />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: 'rotateY(-20deg)',
        transformStyle: 'preserve-3d',
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-p3-border bg-p3-background"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: '-50%',
            x: '-50%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: -index,
            backfaceVisibility: 'hidden',
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: 'easeInOut',
          }}
          initial={{ rotateX: '0deg' }}
          animate={{ rotateX: '0deg' }}
          exit={{ rotateX: '-180deg' }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: '-50%',
            x: '-50%',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: index,
            backfaceVisibility: 'hidden',
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: '180deg' }}
          animate={{ rotateX: '0deg' }}
          exit={{ rotateX: '0deg' }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: 'translateZ(1px)',
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-p3-border"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid h-36 w-52 place-content-center rounded-lg bg-p3-background text-6xl text-p3-text',
        className
      )}
    >
      {children}
    </div>
  );
};
