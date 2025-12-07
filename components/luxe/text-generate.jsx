"use client"; // @NOTE: Add in case you are using Next.js

import { cn } from "@lib/utils";
import { motion } from "motion/react";

export function TextGenerateEffectExample() {
  const text = "This is a text generation effect.";

  return <TextGenerateEffect duration={0.3} text={text} />;
}

export function TextGenerateEffect({ text, duration = 0.3, className }) {
  return (
    <motion.div className="inline-block whitespace-pre">
      {text.split("").map((char, index) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          className={cn(
            "inline-block whitespace-pre text-p3-text-light dark:text-p3-text-dark",
            className,
          )}
          initial={{ filter: "blur(4px)", opacity: 0, rotateX: 90, y: 5 }}
          key={char + index}
          transition={{
            delay: index * 0.015,
            duration: duration,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          whileInView={{
            filter: "blur(0px)",
            opacity: 1,
            rotateX: 0,
            y: 0,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
