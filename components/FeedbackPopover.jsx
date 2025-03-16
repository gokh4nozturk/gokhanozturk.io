'use client';

import { Anchor, Content, Root } from '@radix-ui/react-popover';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!anonymous && !email.trim()) {
      toast.error('Email is required');
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedText,
          feedback,
          is_anonymous: anonymous,
          email: anonymous ? null : email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          toast.error('Too many requests. Please try again later.');
        } else {
          toast.error(data.error || 'Feedback could not be sent');
        }
        return;
      }

      toast.success('Thank you for your feedback!');
      onSubmit({ selectedText, feedback });
      setFeedback('');
      setEmail('');
      setFeedbackCount((prev) => prev + 1);
      onOpenChange(false);
    } catch (err) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        className="bg-p3-background-light dark:bg-p3-background rounded-lg shadow-lg p-4 w-[300px] animate-in fade-in-0 zoom-in-95"
        sideOffset={5}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="space-y-4">
          <div className="text-sm text-p3-text-light dark:text-p3-text-light">
            <div className="flex justify-between">
              <p className="font-medium">Selected Text:</p>
              <p className="text-xs text-p3-text-light">{feedbackCount} / 5</p>
            </div>
            <p className="italic line-clamp-3">{selectedText}</p>
          </div>
          <div>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              className="w-full resize-none p-2 text-sm border rounded-md dark:bg-p3-background dark:border-p3-border-dark dark:text-p3-text-dark"
              rows={3}
              disabled={isSubmitting}
            />

            <div className="flex text-sm justify-center-center flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="anonymous"
                  id="anonymous"
                  checked={anonymous}
                  onChange={(e) => {
                    setAnonymous(e.target.checked);
                    if (e.target.checked) {
                      setEmail('');
                    }
                  }}
                />
                <label htmlFor="anonymous">Anonymous</label>
              </div>

              {!anonymous && (
                <div className="flex items-center gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your email address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-1 border rounded-md dark:bg-p3-background dark:border-p3-border-dark dark:text-p3-text-dark"
                  />
                </div>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || !feedback.trim()}
            className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm text-p3-text-dark bg-p3-primary rounded-md hover:bg-p3-primary-dark disabled:bg-p3-primary-light disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </Content>
    </Root>
  );
}
