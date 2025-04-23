'use client'; // @NOTE: Add in case you are using Next.js

import { motion } from 'motion/react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';

export function CheckboxExample() {
  return (
    <form className="flex items-start gap-3">
      <Checkbox />
      <div className="grid gap-1.5">
        <label
          htmlFor="terms"
          className="font-medium text-p3-text text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-p3-text-dark"
        >
          Accept terms and conditions
        </label>
        <span className="text-p3-text-light text-sm dark:text-p3-text-light">
          You agree to our Terms of Service and Privacy Policy.
        </span>
      </div>
    </form>
  );
}

export function Checkbox({ id = 'terms', checked = false, onCheckedChange }) {
  return (
    <RadixCheckbox.Root
      className="flex h-5 w-5 flex-shrink-0 appearance-none items-center justify-center rounded border border-p3-border bg-p3-background-light outline-none dark:border-p3-border-dark dark:bg-p3-background"
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
    >
      <RadixCheckbox.Indicator>
        <motion.div
          className="h-[inherit] w-[inherit] rounded bg-p3-text dark:bg-p3-text-dark"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring',
              duration: 0.2,
            },
          }}
        >
          <CheckIcon />
        </motion.div>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M5 7.5L7 9.5L7.40859 8.81902C8.13346 7.6109 9.00376 6.49624 10 5.5V5.5"
        className="stroke-p3-text-dark dark:stroke-p3-text"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{
          pathLength: 0,
        }}
        animate={{
          pathLength: 1,
        }}
        exit={{
          pathLength: 0,
        }}
        transition={{
          delay: 0.025,
          duration: 0.35,
        }}
      />
    </svg>
  );
}
