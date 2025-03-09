'use client';

import { Anchor, Content, Root } from '@radix-ui/react-popover';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FeedbackPopover({
  selectedText,
  position,
  isOpen,
  onOpenChange,
  onSubmit,
}) {
  const [feedback, setFeedback] = useState('');
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const [anonymous, setAnonymous] = useState(true);
  const [email, setEmail] = useState('');
  const [feedbackCount, setFeedbackCount] = useState(0);

  useEffect(() => {
    if (isOpen && position) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const POPOVER_WIDTH = 300;
      const POPOVER_HEIGHT = 200;
      const MARGIN = 20;

      let newX = position.x;
      let newY = position.y;

      if (position.x + POPOVER_WIDTH > viewportWidth - MARGIN) {
        newX = viewportWidth - POPOVER_WIDTH - MARGIN;
      }

      if (position.x < MARGIN) {
        newX = MARGIN;
      }

      if (position.y + POPOVER_HEIGHT > viewportHeight - MARGIN) {
        newY = position.y - POPOVER_HEIGHT - 20;
      }

      setAdjustedPosition({ x: newX, y: newY });
    }
  }, [position, isOpen]);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;

    onSubmit({ selectedText, feedback });
    setFeedback('');
  };

  return (
    <Root open={isOpen} onOpenChange={onOpenChange}>
      <Anchor
        style={{
          position: 'absolute',
          top: adjustedPosition.y,
          left: adjustedPosition.x,
        }}
      />
      <Content
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-[300px] animate-in fade-in-0 zoom-in-95"
        sideOffset={5}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="space-y-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <p className="font-medium">Selected Text:</p>
              <p className="text-xs text-gray-500">{feedbackCount} / 5</p>
            </div>
            <p className="italic line-clamp-3">{selectedText}</p>
          </div>
          <div>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              className="w-full p-2 text-sm border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={3}
            />

            <div className="flex text-sm justify-center-center flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="anonymous"
                  id="anonymous"
                  checked={anonymous}
                  onChange={(e) => setAnonymous(e.target.checked)}
                />
                <label htmlFor="anonymous">Anonymous</label>
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  disabled={anonymous}
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-1 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </Content>
    </Root>
  );
}
