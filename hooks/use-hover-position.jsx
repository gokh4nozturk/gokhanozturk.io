import { useEffect, useRef, useState } from 'react';

const useHoverPosition = (items, containerRef) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const itemsRef = useRef([]);

  useEffect(() => {
    if (hoveredId) {
      const itemIndex = items.findIndex((item) => item.path === hoveredId);
      const element = itemsRef.current[itemIndex];
      if (element && containerRef.current) {
        const rect = element.getBoundingClientRect();
        const parentRect = containerRef.current.getBoundingClientRect();
        setHoverPosition({
          x: rect.left - parentRect.left - 15,
          y: rect.top - parentRect.top - 10,
          width: rect.width,
          height: rect.height,
        });
      }
    }
  }, [hoveredId, items, containerRef]);

  return {
    hoveredId,
    setHoveredId,
    hoverPosition,
    itemsRef,
  };
};

export default useHoverPosition;
