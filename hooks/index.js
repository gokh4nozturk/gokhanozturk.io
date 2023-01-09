import { useState, useEffect } from 'react';
const useDarkThemeDetector = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      setIsDark(true);
    }
  }, []);
  return isDark;
};

export { useDarkThemeDetector };
