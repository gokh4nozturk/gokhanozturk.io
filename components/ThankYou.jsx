"use client";

import { cn } from "@lib/utils";
import Buymeacoffee from "components/icons/buymeacoffee";

export default function ThankYou({ className }) {
  return (
    <a
      aria-disabled="true"
      className={cn(
        "-mr-2.5 ml-1 flex items-center",
        "rounded-full no-underline transition",
        "bg-p3-accent text-p3-text transition-all",
        "dark:bg-p3-accent/40 dark:text-p3-text-light",
        className,
        "hover:animate-tada",
        "cursor-none opacity-60",
      )}
      href="https://www.buymeacoffee.com/gokhanozturk"
      onClick={(e) => e.preventDefault()}
    >
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/10 sm:size-10"
        title="Coming soon!!!"
      >
        <Buymeacoffee />
      </span>
    </a>
  );
}
