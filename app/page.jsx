"use client";

import About from "@components/About";
import {
  AppleHelloEnglishEffect,
  AppleHelloFrenchEffect,
  AppleHelloTurkishEffect,
} from "@components/apple-hello-effect";
import { cn } from "@lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [onViewHello, setOnViewHello] = useState("english");
  return (
    <div className="flex h-full flex-col justify-between sm:relative">
      <About />

      <div className="flex h-full items-start justify-center">
        <div
          className={cn(
            "-translate-x-1/2 -translate-y-2/3 fixed top-2/3 left-1/2 w-min overflow-hidden sm:h-32",
            "grid place-items-center",
          )}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              key="english"
              transition={{ delay: 0.1, duration: 0.2, ease: "easeInOut" }}
            >
              {onViewHello === "english" && (
                <AppleHelloEnglishEffect
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setOnViewHello("turkish");
                    }, 800);
                  }}
                />
              )}
              {onViewHello === "turkish" && (
                <AppleHelloTurkishEffect
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setOnViewHello("french");
                    }, 800);
                  }}
                />
              )}
              {onViewHello === "french" && (
                <AppleHelloFrenchEffect
                  onAnimationComplete={() => {
                    setTimeout(() => {
                      setOnViewHello("english");
                    }, 800);
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
