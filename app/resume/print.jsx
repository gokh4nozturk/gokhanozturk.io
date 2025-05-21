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
      window.open('/resume.pdf', '_blank');
      setIsPrinting(false);
    } catch (error) {
      console.error(error);
      setIsPrinting(false);
    }
  }

  return (
    <div className="flex items-center gap-2 print:hidden">
      {/* <PrintButton size={24} disabled={isPrinting} onClick={handlePrintMD}>
        md
      </PrintButton> */}

      <PrintButton size={24} disabled={isPrinting} onClick={handlePrintJSX} />
    </div>
  );
}

const pathVariants = {
  normal: { d: 'M12 17V3', translateY: 0 },
  animate: {
    d: 'M12 17V3',
    translateY: [0, -4, 0],
    transition: {
      duration: 0.3,
    },
  },
};

const secondPathVariants = {
  normal: { d: 'm6 11 6 6 6-6' },
  animate: {
    d: ['m6 11 6 6 6-6', 'm6 6 6 6 6-6', 'm6 11 6 6 6-6'],
    transition: {
      duration: 0.3,
    },
  },
};

const PrintButton = forwardRef(
  (
    {
      onMouseEnter,
      onMouseLeave,
      className,
      size = 28,
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
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
      <button
        disabled={disabled}
        type="button"
        className={cn(
          className,
          disabled && 'opacity-50',
          'flex items-center gap-2 rounded-full border border-gray-300 p-2'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        {...props}
      >
        {children}
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
          <path d="M19 21H5" />
          <motion.path d="M12 17V3" variants={pathVariants} animate={controls} />
          <motion.path d="m6 11 6 6 6-6" variants={secondPathVariants} animate={controls} />
        </svg>
      </button>
    );
  }
);
