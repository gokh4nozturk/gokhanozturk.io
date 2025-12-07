"use client";

import { Bluesky } from "@components/icons";
import { cn } from "@lib/utils";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export function CircularMenu({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuContainerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.07,
      },
    },
  };

  // Variants for individual menu items
  const menuItemVariants = {
    exit: {
      opacity: 0,
      scale: 0.3,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
      x: 0,
      y: 0,
    },
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: 0,
      y: 0,
    },
    visible: (index) => {
      const startAngle = isMobile ? -60 : 6.8; // Starting angle in degrees
      const endAngle = isMobile ? -180 : -191.5; // Ending angle in degrees
      const angleRange = endAngle - startAngle;
      const angleStep = angleRange / (6 - 1); // Divide by (n-1) for even distribution
      const currentAngle = (startAngle + index * angleStep) * (Math.PI / 180); // Convert to radians

      return {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.15,
          ease: "easeOut",
          type: "spring",
        },
        x: Math.cos(currentAngle) * 100,
        y: Math.sin(currentAngle) * 100,
      };
    },
  };

  const menuItems = [
    {
      icon: <Github size={20} />,
      name: "Github",
      rotation: 0,
      url: "https://github.com/gokh4nozturk?ref=gokhanozturk.io",
    },
    {
      icon: <Linkedin size={20} />,
      name: "Linkedin",
      rotation: 60,
      url: "https://www.linkedin.com/in/gokhannozturk?ref=gokhanozturk.io",
    },
    {
      icon: <Twitter size={20} />,
      name: "X",
      rotation: 120,
      url: "https://x.com/intent/follow?screen_name=gokh4nozturk?ref=gokhanozturk.io",
    },
    {
      icon: <Instagram size={20} />,
      name: "Instagram",
      rotation: 180,
      url: "https://www.instagram.com/gokh4nozturk?ref=gokhanozturk.io",
    },
    {
      icon: <Bluesky className="size-5" />,
      name: "Bluesky",
      rotation: 240,
      url: "https://bsky.app/profile/gokhanozturk.io?ref=gokhanozturk.io",
    },
  ];

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className="relative flex items-center justify-center"
      initial="closed"
      variants={menuContainerVariants}
    >
      {/* Hamburger Menu Button */}
      <button
        className={cn(
          "absolute z-50 flex size-10 cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-black p-2 text-white dark:bg-yellow-50 dark:text-black",
          "hover:animate-tilt",
          className,
        )}
        onClick={toggleMenu}
        type="button"
      >
        {Array.from({ length: 2 }).map((_, index) => {
          const rotateAngle = index % 2 === 0 ? 45 : -45;
          const changeY = index % 2 === 0 ? 5.5 : -5.5;

          return (
            <motion.span
              animate={{
                rotate: isOpen ? rotateAngle : 0,
                transition: {
                  duration: 0.15,
                  ease: "easeInOut",
                },
                y: isOpen ? changeY : 0,
              }}
              className="!h-[3px] w-4 shrink-0 bg-white sm:w-5 dark:bg-black"
              key={index}
            />
          );
        })}
      </button>

      {/* Animate Presence handles entering and exiting */}
      <AnimatePresence>
        {isOpen &&
          menuItems.map((item, index) => (
            <motion.a
              animate="visible"
              className="absolute flex size-10 cursor-pointer items-center justify-center rounded-full bg-black text-white transition-colors will-change-transform hover:bg-gray-800 dark:bg-yellow-50 dark:text-black"
              custom={index}
              exit="exit"
              href={item.url}
              initial="hidden"
              key={item.url}
              rel="noopener noreferrer"
              style={{
                left: "50%",
                margin: "-32px",
                top: "50%",
                transform: "rotate(45deg)",
                transformOrigin: "center",
              }}
              target="_blank"
              variants={menuItemVariants}
            >
              {item.icon}
            </motion.a>
          ))}
      </AnimatePresence>
    </motion.div>
  );
}
