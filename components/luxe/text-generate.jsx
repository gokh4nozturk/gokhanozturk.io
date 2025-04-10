'use client'; // @NOTE: Add in case you are using Next.js

import { motion } from 'motion/react';

import { cn } from '@lib/utils';

export function TextGenerateEffectExample() {
  const text = 'This is a text generation effect.';

  return <TextGenerateEffect text={text} duration={0.3} />;
}

export function TextGenerateEffect({ text, duration = 0.3, className }) {
  return (
    <motion.div className="inline-block whitespace-pre">
      {text.split('').map((char, index) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={char + index}
          className={cn(
            'inline-block whitespace-pre text-p3-text-light dark:text-p3-text-dark',
            className
          )}
          initial={{ opacity: 0, filter: 'blur(4px)', rotateX: 90, y: 5 }}
          whileInView={{
            opacity: 1,
            filter: 'blur(0px)',
            rotateX: 0,
            y: 0,
          }}
          transition={{
            ease: 'easeOut',
            duration: duration,
            delay: index * 0.015,
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
