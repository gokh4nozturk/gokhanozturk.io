'use client';

import { Checkbox } from '@components/luxe/checkbox';
import { TextGenerateEffect } from '@components/luxe/text-generate';
import { cn } from '@lib/utils';
import { Annoyed, Frown, Laugh, Smile } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export const FeedbackRating = ({ className }) => {
  const [rating, setRating] = useState(0);
  const [feedbackActive, setFeedbackActive] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
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
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [feedbackActive]);

  const handleSubmit = async () => {
    const loadingToast = toast.loading('Submitting feedback...');
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({ rating, feedback, email, isAnonymous }),
      });
      toast.success('Feedback submitted', { id: loadingToast });
    } catch ({ error }) {
      console.error(error);
      toast.error(error || 'Failed to submit feedback', { id: loadingToast });
    }
  };

  return (
    <>
      <form
        ref={node}
        className={cn(
          'flex gap-4 px-6 py-3 bg-secondary/50 shadow-sm border items-start transition-all ease-in-out overflow-hidden flex-col max-[315px]:scale-95',
          feedbackActive ? 'max-[374px]:h-[16rem] min-h-[14rem]' : 'h-[3.5rem]',
          feedbackActive ? 'rounded-md' : 'rounded-full',
          feedbackActive ? 'w-[19rem] max-[374px]:w-[15rem]' : 'w-[14rem]',
          feedbackActive ? 'max-[374px]:justify-center' : 'justify-end',
          className
        )}
        style={{
          transition: feedbackActive
            ? 'border-radius 0.2s ease-in-out, width 0.2s ease-in-out 0.2s, height 0.2s ease-in-out 0.2s'
            : 'border-radius 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="w-full gap-2 flex flex-col">
          <textarea
            className="w-full h-[6rem] px-2 py-1 rounded-md border resize-none -mb-1 text-primary outline-none text-sm transition-all duration-500"
            style={{
              filter: feedbackActive ? 'blur(0px)' : 'blur(100px)',
            }}
            placeholder="Your feedback..."
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
          />
          <input
            className="w-full px-2 py-1 rounded-md border resize-none -mb-1 text-primary outline-none text-sm transition-all duration-500 disabled:opacity-50"
            style={{
              filter: feedbackActive ? 'blur(0px)' : 'blur(100px)',
            }}
            placeholder="Your email..."
            value={email}
            disabled={isAnonymous}
            required={!isAnonymous}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-3 items-center">
            <Checkbox id="isAnonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
            <div className="grid gap-1.5">
              <label
                htmlFor="isAnonymous"
                className="text-xs font-medium leading-none text-neutral-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white"
              >
                <TextGenerateEffect
                  duration={0.2}
                  text={isAnonymous ? 'Anonymous' : 'Not anonymous'}
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex justify-between w-full',
            feedbackActive && 'max-[374px]:flex-col',
            feedbackActive ? 'gap-4' : 'gap-8'
          )}
        >
          <div
            className={cn(
              'flex items-center',
              feedbackActive ? 'justify-center' : 'mt-1.5',
              'gap-4'
            )}
          >
            <button
              type="button"
              onClick={() => {
                setRating(1);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <Frown
                size={32}
                className={`${rating === 1 ? 'opacity-100 fill-red-500' : 'fill-transparent'}`}
              />
            </button>
            <button
              type="button"
              onClick={() => {
                setRating(2);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <Annoyed
                size={32}
                className={`${rating === 2 ? 'opacity-100 fill-orange-500' : 'fill-transparent'}`}
              />
            </button>
            <button
              type="button"
              onClick={() => {
                setRating(3);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <Smile
                size={32}
                className={`${rating === 3 ? 'opacity-100 fill-blue-500' : 'fill-transparent'}`}
              />
            </button>
            <button
              type="button"
              onClick={() => {
                setRating(4);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <Laugh
                size={32}
                className={`${rating === 4 ? 'opacity-100 fill-green-500' : 'fill-transparent'}`}
              />
            </button>
          </div>
          <div>
            <button
              type="submit"
              className={cn(
                'text-sm font-bold px-3 py-2 border rounded-md max-[374px]:w-full max-[374px]:py-2 flex items-center justify-center',
                'bg-neutral-900 text-neutral-50 hover:bg-neutral-800 active:scale-[.95] transition-all duration-400'
              )}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
