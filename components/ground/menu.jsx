'use client';

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export function CircularMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuContainerVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Variants for individual menu items
  const menuItemVariants = {
    hidden: {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.3,
    },
    visible: (index) => {
      const startAngle = isMobile ? -90 : -10; // Starting angle in degrees
      const endAngle = -210; // Ending angle in degrees
      const angleRange = endAngle - startAngle;
      const angleStep = angleRange / (6 - 1); // Divide by (n-1) for even distribution
      const currentAngle = (startAngle + index * angleStep) * (Math.PI / 180); // Convert to radians

      return {
        x: Math.cos(currentAngle) * 120,
        y: Math.sin(currentAngle) * 120,
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.15,
          ease: 'easeOut',
        },
      };
    },
    exit: {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.3,
      transition: {
        duration: 0.15,
        ease: 'easeOut',
      },
    },
  };

  const menuItems = [
    {
      name: 'Github',
      icon: <Github size={20} />,
      rotation: 0,
      url: 'https://github.com/gokh4nozturk',
    },
    {
      name: 'Linkedin',
      icon: <Linkedin size={20} />,
      rotation: 60,
      url: 'https://www.linkedin.com/in/gokhannozturk',
    },
    {
      name: 'X',
      icon: <Twitter size={20} />,
      rotation: 120,
      url: 'https://x.com/intent/follow?screen_name=gokh4nozturk',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      rotation: 180,
      url: 'https://www.instagram.com/gokh4nozturk',
    },
  ];

  return (
    <motion.div
      variants={menuContainerVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="relative flex items-center justify-center"
    >
      {/* Hamburger Menu Button */}
      <button
        type="button"
        className="absolute z-50 size-10 p-2 flex items-center justify-center gap-2 cursor-pointer bg-black text-white dark:bg-yellow-50 dark:text-black rounded-full flex-col"
        onClick={toggleMenu}
      >
        {Array.from({ length: 2 }).map((_, index) => {
          const rotateAngle = index % 2 === 0 ? 45 : -45;
          const changeY = index % 2 === 0 ? 5.5 : -5.5;

          return (
            <motion.span
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              animate={{
                rotate: isOpen ? rotateAngle : 0,
                y: isOpen ? changeY : 0,
              }}
              className="sm:w-5 w-4 !h-[3px] bg-white dark:bg-black shrink-0"
            />
          );
        })}
      </button>

      {/* Animate Presence handles entering and exiting */}
      <AnimatePresence>
        {isOpen &&
          menuItems.map((item, index) => (
            <motion.a
              key={item.url}
              className="absolute sm:size-12 size-10 bg-black text-white dark:bg-yellow-50 dark:text-black flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-colors will-change-transform"
              custom={index}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                top: '50%',
                left: '50%',
                margin: '-32px',
                transform: 'rotate(45deg)',
                transformOrigin: 'center',
              }}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </motion.a>
          ))}
      </AnimatePresence>
    </motion.div>
  );
}
