"use client";

import { Anchor, Content, Root } from "@radix-ui/react-popover";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function FeedbackPopover({
  selectedText,
  position,
  isOpen,
  onOpenChange,
  onSubmit,
}) {
  const [feedback, setFeedback] = useState("");
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const [anonymous, setAnonymous] = useState(true);
  const [email, setEmail] = useState("");
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
      toast.error("Email is required");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/feedback", {
        body: JSON.stringify({
          email: anonymous ? null : email,
          feedback,
          is_anonymous: anonymous,
          selectedText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          toast.error("Too many requests. Please try again later.");
        } else {
          toast.error(data.error || "Feedback could not be sent");
        }
        return;
      }

      toast.success("Thank you for your feedback!");
      onSubmit({ feedback, selectedText });
      setFeedback("");
      setEmail("");
      setFeedbackCount((prev) => prev + 1);
      onOpenChange(false);
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Root onOpenChange={onOpenChange} open={isOpen}>
      <Anchor
        style={{
          left: adjustedPosition.x,
          position: "absolute",
          top: adjustedPosition.y,
        }}
      />
      <Content
        className="fade-in-0 zoom-in-95 w-[300px] animate-in rounded-lg bg-p3-background-light p-4 shadow-lg dark:bg-p3-background"
        onOpenAutoFocus={(e) => e.preventDefault()}
        sideOffset={5}
      >
        <div className="space-y-4">
          <div className="text-p3-text-light text-sm dark:text-p3-text-light">
            <div className="flex justify-between">
              <p className="font-medium">Selected Text:</p>
              <p className="text-p3-text-light text-xs">{feedbackCount} / 5</p>
            </div>
            <p className="line-clamp-3 italic">{selectedText}</p>
          </div>
          <div>
            <textarea
              className="w-full resize-none rounded-md border p-2 text-sm dark:border-p3-border-dark dark:bg-p3-background dark:text-p3-text-dark"
              disabled={isSubmitting}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              rows={3}
              value={feedback}
            />

            <div className="justify-center-center flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <input
                  checked={anonymous}
                  id="anonymous"
                  name="anonymous"
                  onChange={(e) => {
                    setAnonymous(e.target.checked);
                    if (e.target.checked) {
                      setEmail("");
                    }
                  }}
                  type="checkbox"
                />
                <label htmlFor="anonymous">Anonymous</label>
              </div>

              {!anonymous && (
                <div className="flex items-center gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-md border p-1 dark:border-p3-border-dark dark:bg-p3-background dark:text-p3-text-dark"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    type="email"
                    value={email}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-md bg-p3-primary px-4 py-2 text-p3-text-dark text-sm hover:bg-p3-primary-dark disabled:cursor-not-allowed disabled:bg-p3-primary-light"
            disabled={isSubmitting || !feedback.trim()}
            onClick={handleSubmit}
            type="button"
          >
            <Send size={16} />
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </Content>
    </Root>
  );
}
