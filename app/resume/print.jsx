'use client';

import { cn } from '@lib/utils';
import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';

export function Print() {
  const [isPrinting, setIsPrinting] = useState(false);

  async function handlePrintMD() {
    try {
      setIsPrinting(true);

      window.open('/api/resume', '_blank');
      setIsPrinting(false);
    } catch (error) {
      console.error(error);
      setIsPrinting(false);
    }
  }

  async function handlePrintJSX() {
    try {
      setIsPrinting(true);
      window.open('/api/cv', '_blank');
      setIsPrinting(false);
    } catch (error) {
      console.error(error);
      setIsPrinting(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <PrintIcon className="size-6" />
      <button
        disabled={isPrinting}
        type="button"
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={handlePrintMD}
      >
        MD
      </button>
      <button
        disabled={isPrinting}
        type="button"
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={handlePrintJSX}
      >
        JSX
      </button>
    </div>
  );
}

const pathVariants = {
  normal: { d: 'm19 12-7 7-7-7', translateY: 0 },
  animate: {
    d: 'm19 12-7 7-7-7',
    translateY: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const secondPathVariants = {
  normal: { d: 'M12 5v14' },
  animate: {
    d: ['M12 5v14', 'M12 5v9', 'M12 5v14'],
    transition: {
      duration: 0.4,
    },
  },
};

const PrintIcon = forwardRef(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => controls.start('animate'),
        stopAnimation: () => controls.start('normal'),
      };
    });

    const handleMouseEnter = useCallback(
      (e) => {
        if (!isControlledRef.current) {
          controls.start('animate');
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e) => {
        if (!isControlledRef.current) {
          controls.start('normal');
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path d="m19 12-7 7-7-7" variants={pathVariants} animate={controls} />
          <motion.path d="M12 5v14" variants={secondPathVariants} animate={controls} />
        </svg>
      </div>
    );
  }
);
