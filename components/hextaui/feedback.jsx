"use client";

import { Checkbox } from "@components/luxe/checkbox";
import { TextGenerateEffect } from "@components/luxe/text-generate";
import { cn } from "@lib/utils";
import { Annoyed, Frown, Laugh, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const FeedbackRating = ({ className }) => {
  const [rating, setRating] = useState(0);
  const [feedbackActive, setFeedbackActive] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    if (feedbackActive === true) {
      const handleClickOutside = (e) => {
        if (node.current && !node.current.contains(e.target)) {
          setFeedbackActive(false);
          setRating(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [feedbackActive]);

  const handleSubmit = async () => {
    const loadingToast = toast.loading("Submitting feedback...");
    try {
      await fetch("/api/feedback", {
        body: JSON.stringify({ email, feedback, isAnonymous, rating }),
        method: "POST",
      });
      toast.success("Feedback submitted", { id: loadingToast });
    } catch ({ error }) {
      console.error(error);
      toast.error(error || "Failed to submit feedback", { id: loadingToast });
    }
  };

  return (
    <>
      <form
        className={cn(
          "flex flex-col items-start gap-4 overflow-hidden border bg-secondary/50 px-6 py-1.5 shadow-sm transition-all ease-in-out max-[315px]:scale-95",
          feedbackActive ? "min-h-[14rem] max-[374px]:h-[16rem]" : "h-[3rem]",
          feedbackActive ? "rounded-md" : "rounded-full",
          feedbackActive ? "w-[19rem] max-[374px]:w-[15rem]" : "w-[12rem] sm:w-[13rem]",
          feedbackActive ? "max-[374px]:justify-center" : "justify-end",
          className,
        )}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        ref={node}
        style={{
          transition: feedbackActive
            ? "border-radius 0.2s ease-in-out, width 0.2s ease-in-out 0.2s, height 0.2s ease-in-out 0.2s"
            : "border-radius 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out",
        }}
      >
        <div className="flex w-full flex-col gap-2">
          <textarea
            className="-mb-1 h-[6rem] w-full resize-none rounded-md border px-2 py-1 text-primary text-sm outline-none transition-all duration-500"
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback..."
            style={{
              filter: feedbackActive ? "blur(0px)" : "blur(100px)",
            }}
            value={feedback}
          />
          <input
            className="-mb-1 w-full resize-none rounded-md border px-2 py-1 text-primary text-sm outline-none transition-all duration-500 disabled:opacity-50"
            disabled={isAnonymous}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email..."
            required={!isAnonymous}
            style={{
              filter: feedbackActive ? "blur(0px)" : "blur(100px)",
            }}
            value={email}
          />
          <div className="flex items-center gap-3">
            <Checkbox checked={isAnonymous} id="isAnonymous" onCheckedChange={setIsAnonymous} />
            <div className="grid gap-1.5">
              <label
                className="font-medium text-neutral-500 text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
                htmlFor="isAnonymous"
              >
                <TextGenerateEffect
                  duration={0.2}
                  text={isAnonymous ? "Anonymous" : "Not anonymous"}
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex w-full justify-between",
            feedbackActive && "max-[374px]:flex-col",
            feedbackActive ? "gap-4" : "gap-6",
          )}
        >
          <div
            className={cn(
              "flex items-center",
              feedbackActive ? "justify-center" : "mt-1.5",
              "gap-4",
            )}
          >
            <button
              className="text-primary transition-all duration-400 hover:scale-105 active:scale-[.95]"
              onClick={() => {
                setRating(1);
                setFeedbackActive(true);
              }}
              type="button"
            >
              <Frown
                className={cn(
                  `${rating === 1 ? "fill-red-500 opacity-100" : "fill-transparent"}`,
                  "size-6 sm:size-7",
                )}
              />
            </button>
            <button
              className="text-primary transition-all duration-400 hover:scale-105 active:scale-[.95]"
              onClick={() => {
                setRating(2);
                setFeedbackActive(true);
              }}
              type="button"
            >
              <Annoyed
                className={cn(
                  `${rating === 2 ? "fill-orange-500 opacity-100" : "fill-transparent"}`,
                  "size-6 sm:size-7",
                )}
              />
            </button>
            <button
              className="text-primary transition-all duration-400 hover:scale-105 active:scale-[.95]"
              onClick={() => {
                setRating(3);
                setFeedbackActive(true);
              }}
              type="button"
            >
              <Smile
                className={cn(
                  `${rating === 3 ? "fill-blue-500 opacity-100" : "fill-transparent"}`,
                  "size-6 sm:size-7",
                )}
              />
            </button>
            <button
              className="text-primary transition-all duration-400 hover:scale-105 active:scale-[.95]"
              onClick={() => {
                setRating(4);
                setFeedbackActive(true);
              }}
              type="button"
            >
              <Laugh
                className={cn(
                  `${rating === 4 ? "fill-green-500 opacity-100" : "fill-transparent"}`,
                  "size-6 sm:size-7",
                )}
              />
            </button>
          </div>
          <div>
            <button
              className={cn(
                "flex items-center justify-center rounded-md border px-3 py-2 font-bold text-sm max-[374px]:w-full max-[374px]:py-2",
                "bg-neutral-900 text-neutral-50 transition-all duration-400 hover:bg-neutral-800 active:scale-[.95]",
              )}
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
